/**
 * Cloudflare Pages Function: POST /api/estimate
 *
 * Delivers each lead to TWO destinations so a lead never silently fails:
 *   1. GHL_WEBHOOK_URL       -> Dyno's GoHighLevel sub-account inbound webhook [CONFIRM routing]
 *   2. Lead copy to the Dyno inbox via LEAD_COPY_WEBHOOK_URL (any webhook, e.g. Zapier/Make/n8n
 *      email step) and/or RESEND_API_KEY + LEAD_COPY_EMAIL (direct email via Resend).
 *
 * Optional: TURNSTILE_SECRET_KEY verifies Cloudflare Turnstile tokens.
 *
 * Secrets are set in Cloudflare Pages > Settings > Environment variables. Never commit them.
 * For local testing, put them in .dev.vars (gitignored) and run `npx wrangler pages dev dist`.
 *
 * Response: JSON { ok } for fetch() submits; 303 redirect for no-JS form posts.
 * If at least one destination accepts the lead we treat it as captured (and log the other
 * failure). If none accept it, the visitor is told to call.
 */

interface Env {
  GHL_WEBHOOK_URL?: string;
  LEAD_COPY_WEBHOOK_URL?: string;
  RESEND_API_KEY?: string;
  LEAD_COPY_EMAIL?: string;
  LEAD_FROM_EMAIL?: string;
  TURNSTILE_SECRET_KEY?: string;
}

type Ctx = { request: Request; env: Env; waitUntil: (p: Promise<unknown>) => void };

const MAX = { name: 120, phone: 40, email: 200, town: 80, description: 2000 };

function respond(req: Request, ok: boolean, status = ok ? 200 : 400, error?: string) {
  const wantsJson = (req.headers.get('accept') || '').includes('application/json');
  if (wantsJson) {
    return new Response(JSON.stringify({ ok, error }), { status, headers: { 'content-type': 'application/json' } });
  }
  const url = new URL(ok ? '/thank-you/' : '/contact/?error=1#estimate', req.url);
  return Response.redirect(url.toString(), 303);
}

const str = (v: FormDataEntryValue | null, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

async function verifyTurnstile(token: string, secret: string, ip: string | null) {
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const data = (await r.json()) as { success?: boolean };
  return !!data.success;
}

async function postJson(url: string, payload: unknown) {
  const r = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
}

async function sendResend(env: Env, lead: Record<string, unknown>) {
  const lines = Object.entries(lead).map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`);
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from: env.LEAD_FROM_EMAIL || 'NCMC Website <leads@nc-marineconstruction.com>',
      to: [env.LEAD_COPY_EMAIL],
      subject: `New estimate request: ${lead.name} (${lead.town})`,
      text: lines.join('\n'),
    }),
  });
  if (!r.ok) throw new Error(`Resend HTTP ${r.status}`);
}

export const onRequestPost = async ({ request, env }: Ctx) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return respond(request, false, 400, 'bad_request');
  }

  // Honeypot: pretend success so bots learn nothing.
  if (str(form.get('company'), 200)) return respond(request, true);

  if (env.TURNSTILE_SECRET_KEY) {
    const token = str(form.get('cf-turnstile-response'), 4096);
    const ok = token && (await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, request.headers.get('cf-connecting-ip')));
    if (!ok) return respond(request, false, 400, 'verification_failed');
  }

  const lead = {
    name: str(form.get('name'), MAX.name),
    phone: str(form.get('phone'), MAX.phone),
    email: str(form.get('email'), MAX.email),
    town: str(form.get('town'), MAX.town),
    projectTypes: form.getAll('projectType').map((v) => str(v, 40)).filter(Boolean),
    description: str(form.get('description'), MAX.description),
    contactMethod: str(form.get('contactMethod'), 20) || 'Call',
    smsConsent: form.get('smsConsent') === 'yes',
    page: str(form.get('page'), 200),
    submittedAt: new Date().toISOString(),
    source: 'nc-marineconstruction.com estimate form',
  };

  if (!lead.name || lead.phone.replace(/\D/g, '').length < 10 || !lead.town) {
    return respond(request, false, 422, 'missing_fields');
  }

  const deliveries: Promise<void>[] = [];
  if (env.GHL_WEBHOOK_URL) deliveries.push(postJson(env.GHL_WEBHOOK_URL, lead));
  if (env.LEAD_COPY_WEBHOOK_URL) deliveries.push(postJson(env.LEAD_COPY_WEBHOOK_URL, lead));
  if (env.RESEND_API_KEY && env.LEAD_COPY_EMAIL) deliveries.push(sendResend(env, lead));

  if (deliveries.length === 0) {
    console.error('estimate: no lead destinations configured');
    return respond(request, false, 503, 'not_configured');
  }

  const results = await Promise.allSettled(deliveries);
  const failures = results.filter((r): r is PromiseRejectedResult => r.status === 'rejected');
  failures.forEach((f) => console.error('estimate: delivery failed', String(f.reason)));

  if (failures.length === results.length) return respond(request, false, 502, 'delivery_failed');
  return respond(request, true);
};
