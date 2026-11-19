# NC Marine Construction website

Project brief: `docs/BRIEF.md` (read it before changing anything). Launch status: `docs/LAUNCH-CHECKLIST.md`.

- Astro (static) + Tailwind v4, deployed to Cloudflare Pages. Do not swap frameworks.
- All business facts come from `src/data/business.ts`. Never invent reviews, prices, years, license numbers or project details. Use `TODO('...')` / `TODO_CONFIRM` placeholders and list them in the checklist.
- Content: `src/content/services/*.md`, `src/content/projects/*.md` (Zod schemas in `src/content.config.ts`); FAQs in `src/data/faqs.ts`.
- Everything important must be in static HTML. Run `npm run build && npm run check:static` after changes.
- Lead endpoint: `functions/api/estimate.ts` (Cloudflare Pages Function). Secrets only in Cloudflare env vars.
