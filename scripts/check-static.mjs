// QA: confirm key content is present in raw static HTML (what AI crawlers see without JS).
import { readFileSync, existsSync } from 'node:fs';
const pages = ['index.html', 'services/index.html', 'services/boat-lifts/index.html', 'projects/north-topsail-beach-seawall-dock-lifts/index.html', 'contact/index.html', 'faq/index.html', 'about/index.html'];
let fail = 0;
for (const p of pages) {
  const f = `dist/${p}`;
  if (!existsSync(f)) { console.error(`MISSING ${f}`); fail++; continue; }
  const html = readFileSync(f, 'utf8');
  const checks = {
    'business name': html.includes('NC Marine Construction'),
    'phone': html.includes('(910) 465-1712'),
    'one h1': (html.match(/<h1[\s>]/g) || []).length === 1,
    'canonical': /<link rel="canonical"/.test(html),
    'json-ld': html.includes('application/ld+json'),
    'meta description': /<meta name="description" content="[^"]{50,}/.test(html),
  };
  const bad = Object.entries(checks).filter(([, ok]) => !ok).map(([k]) => k);
  console.log(`${bad.length ? 'FAIL' : 'ok  '} ${p}${bad.length ? '  -> ' + bad.join(', ') : ''}`);
  fail += bad.length;
}
process.exit(fail ? 1 : 0);
