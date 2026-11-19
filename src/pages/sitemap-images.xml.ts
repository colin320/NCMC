import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getImage } from 'astro:assets';
import { galleryImageUrls } from '../lib/gallery-images';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Google image sitemap: which pages show which project photos. Listed in robots.txt and the sitemap index. */
export const GET: APIRoute = async ({ site }) => {
  const s = site!;
  const gallery = await galleryImageUrls(s);
  const pages: { loc: string; images: string[] }[] = [
    { loc: new URL('/', s).toString(), images: gallery.map((g) => g.url) },
    { loc: new URL('/projects/', s).toString(), images: gallery.map((g) => g.url) },
  ];
  for (const svc of await getCollection('services')) {
    if (!svc.data.image) continue;
    const img = await getImage({ src: svc.data.image, format: 'webp', width: Math.min(1600, svc.data.image.width) });
    pages.push({ loc: new URL(`/services/${svc.id}/`, s).toString(), images: [new URL(img.src, s).toString()] });
  }
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map((p) => `  <url>\n    <loc>${esc(p.loc)}</loc>\n${p.images.map((i) => `    <image:image><image:loc>${esc(i)}</image:loc></image:image>`).join('\n')}\n  </url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
