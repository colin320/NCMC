// Launch gate: no TODO_CONFIRM placeholders may remain in the built site.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const hits = {};
const walk = (d) => readdirSync(d).forEach((n) => {
  const p = join(d, n);
  if (statSync(p).isDirectory()) return walk(p);
  if (!/\.(html|txt|xml|json)$/.test(n)) return;
  const m = readFileSync(p, 'utf8').match(/TODO_CONFIRM[^<"\n]*/g);
  if (m) hits[p] = [...new Set(m)];
});
walk('dist');
const files = Object.keys(hits);
if (!files.length) { console.log('No placeholders found. Launch gate passed.'); process.exit(0); }
for (const f of files) { console.log(f); hits[f].forEach((h) => console.log('   ', h.trim())); }
console.log(`\n${files.length} file(s) still contain TODO_CONFIRM placeholders.`);
process.exit(1);
