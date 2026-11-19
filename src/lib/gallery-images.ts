import { getImage } from 'astro:assets';
import { gallery } from '../data/gallery';

/** Absolute URLs for gallery photos, for schema and the image sitemap. */
export async function galleryImageUrls(site: URL) {
  return Promise.all(
    gallery.map(async (g) => {
      const img = await getImage({ src: g.src, format: 'webp', width: Math.min(1600, g.src.width) });
      return { url: new URL(img.src, site).toString(), caption: g.caption, alt: g.alt, town: g.town };
    }),
  );
}
