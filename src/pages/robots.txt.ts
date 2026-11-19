import type { APIRoute } from 'astro';

// AI and search crawlers are explicitly allowed (brief section 8).
const bots = ['Googlebot', 'Bingbot', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot'];

export const GET: APIRoute = ({ site }) => {
  const lines = [
    ...bots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    '',
    `Sitemap: ${new URL('/sitemap-index.xml', site)}`,
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
