import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faq = z.object({ q: z.string(), a: z.string() });

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(), // short name for cards/nav: "Boat Lifts"
      serviceType: z.string(), // schema.org serviceType
      order: z.number(),
      h1: z.string(),
      metaTitle: z.string().max(60),
      metaDescription: z.string().max(155),
      cardSummary: z.string(),
      /** 40 to 60 word answer-first intro (AEO). Rendered as first paragraph under the H1. */
      answer: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      included: z.array(z.string()),
      costDrivers: z.array(z.string()),
      faqs: z.array(faq).min(4).max(6),
      related: z.array(z.string()), // service ids
      projectTags: z.array(z.string()).default([]),
      /** Visible preview banner for unverified items on this page */
      confirmNote: z.string().optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      metaTitle: z.string().max(60),
      metaDescription: z.string().max(155),
      town: z.string(),
      summary: z.string(),
      services: z.array(z.string()), // service ids
      specs: z.array(z.object({ label: z.string(), value: z.string() })),
      suppliers: z.array(z.string()).default([]),
      year: z.string(),
      photos: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      source: z.string(),
      confirmNote: z.string().optional(),
    }),
});

export const collections = { services, projects };
