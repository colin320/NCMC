# NC Marine Construction website

Project brief: `docs/BRIEF.md` (read it before changing anything). Launch status: `docs/LAUNCH-CHECKLIST.md`. Design: `docs/DESIGN.md`.

**Target market override (2026-11-19, supersedes the brief):** own Surf City, Hampstead, Topsail Beach and North Topsail Beach. Do not target or mention Wilmington (or Wrightsville, Carolina Beach, Southport, etc.). NCMC does not offer dredging; do not list it. Page titles use "Topsail Island & Hampstead, NC"; H1s and answer-first intros name the towns. The brief's keyword map (section 7) and area list (section 5) are outdated on this point. Legal/permit text keeps "coastal North Carolina" where it describes CAMA's scope.

- Astro (static) + Tailwind v4, deployed to Cloudflare Pages. Do not swap frameworks.
- All business facts come from `src/data/business.ts`. Never invent reviews, prices, years, license numbers or project details. Use `TODO('...')` / `TODO_CONFIRM` placeholders and list them in the checklist.
- Content: `src/content/services/*.md`, `src/content/projects/*.md` (Zod schemas in `src/content.config.ts`); FAQs in `src/data/faqs.ts`.
- Everything important must be in static HTML. Run `npm run build && npm run check:static` after changes.
- Lead endpoint: `functions/api/estimate.ts` (Cloudflare Pages Function). Secrets only in Cloudflare env vars.
