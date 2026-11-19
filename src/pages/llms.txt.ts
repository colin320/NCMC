import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { business as B, isConfirmed, fullAddress } from '../data/business';

export const GET: APIRoute = async ({ site }) => {
  const u = (p: string) => new URL(p, site).toString();
  const services = (await getCollection('services')).sort((a, b) => a.data.order - b.data.order);
  const projects = await getCollection('projects');
  const addr = [B.address.street, B.address.city, B.address.postalCode].every(isConfirmed) ? fullAddress() : null;
  const body = `# ${B.name}

> ${B.legalName} is a ${B.positioning.toLowerCase()} building docks, piers, floating docks, boat lifts, jet ski lifts and vinyl seawalls/bulkheads for waterfront homes in ${B.serviceAreaSummary}. ${B.differentiator}. Free on-site estimates.

- Phone: ${B.phones.office.display}
- Email: ${B.email}
${addr ? `- Address: ${addr}\n` : ''}- Website: ${u('/')}
- Service area: ${B.areas.map((a) => `${a.name}, NC`).join('; ')}

## Services
${services.map((s) => `- [${s.data.name}](${u(`/services/${s.id}/`)}): ${s.data.cardSummary}`).join('\n')}

## Projects
${projects.map((p) => `- [${p.data.title}](${u(`/projects/${p.id}/`)})`).join('\n')}

## Answers
- [FAQ, including CAMA permit basics](${u('/faq/')})
- [About and credentials](${u('/about/')})
- [Contact and free estimate](${u('/contact/')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
