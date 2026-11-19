# NC Marine Construction website

Astro static site for NC Marine Construction (Wilmington, NC). Built by Dyno Digital. Status: draft, pending client review.

```bash
npm install
npm run dev                 # local dev at http://localhost:4321
npm run build               # static build to dist/
npm run check:static        # QA: key content present in raw HTML
npm run check:placeholders  # launch gate: fails while TODO_CONFIRM placeholders remain
```

To test the form endpoint locally, put secrets in `.dev.vars` (gitignored) and run `npx wrangler pages dev dist`.

See `CLAUDE.md`, `docs/BRIEF.md` and `docs/LAUNCH-CHECKLIST.md`.
