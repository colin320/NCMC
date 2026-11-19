# NC Marine Construction: Launch Checklist

Status: **draft, pending client review.** Nothing below has been confirmed with the client yet.

Launch gate: `npm run build && npm run check:placeholders` must report zero `TODO_CONFIRM` placeholders.

## 1. Placeholders to confirm (all live in one place unless noted)

| Item | Where to fix | Notes |
|---|---|---|
| Owner name | `src/data/business.ts` > `owner.name` | |
| Owner story / bio | `business.ts` > `owner.bio` | 2 to 4 sentences, owner's words |
| Owner headshot or crew photo | `src/pages/about.astro` | Replace placeholder box |
| Street address, city, ZIP | `business.ts` > `address` | Must match GBP exactly (NAP). Also add `geo` lat/long |
| Hours | `business.ts` > `hours` (structured) and remove `hoursText` usage | |
| NC GC license # and classification | `business.ts` > `license` | BuildZoom lists "N.C. Marine Construction, Inc" |
| Insurance carrier | `business.ts` > `insuranceCarrier` | |
| Year founded | `business.ts` > `yearFounded` | Also update hero subhead in `src/pages/index.astro` |
| Google rating + count | `business.ts` > `googleRating` | Real, current numbers only; trust bar in `index.astro` |
| Warranty terms | `business.ts` > `warranty` | |
| Financing | `business.ts` > `financing` | Not rendered yet |
| Schema priceRange | `business.ts` > `priceRange` | |
| Google Business Profile URL | `business.ts` > `social.googleBusinessProfile` | |
| Town list + priority | `business.ts` > `areas`, then set `areasConfirmed: true` | Also used in form town dropdown and FAQ "What areas do you serve?" (`src/data/faqs.ts`) |
| Permits: do they handle CAMA + sealed drawings? | `business.ts` > `handlesPermits`, then update `faqs.ts` "Who applies for the permit?" and service copy | |
| Lead time | `business.ts` > `leadTime` | Not rendered yet |
| Publishable price ranges | Service page template `src/pages/services/[slug].astro` ("How much does it cost?") | Per-service figures; consider a `priceRange` field in each service file |
| SMS consent wording | `src/components/EstimateForm.astro` | Per counsel |
| Privacy policy approval | `src/pages/privacy.astro` | Client/counsel review |
| Dredging still offered? | `src/content/services/dredging.md` | If no, delete the file (links update automatically) |
| Home plan schematic (`src/components/PlanSchematic.astro`) is illustrative only; replace with real plan or drone photo | `PlanSchematic.astro` | |
| North Topsail project: year, photos, permission to name town, challenge/solution/timeline | `src/content/projects/north-topsail-beach-seawall-dock-lifts.md` | Client quote only if real |
| Tide Tamer as the lift brand on that project | `boat-lifts.md` FAQ | Brief lists Tide Tamer as a supplier credit; confirm |
| "Recent work" photos: town, year, what was built | `src/data/gallery.ts`, `src/pages/projects/index.astro` | 4 photos supplied in chat; also confirm they are NCMC's own work |

## 2. Other decisions (not rendered as placeholders)

- [ ] Mobile (808) 443-9412: publish? Set `phones.publishMobile` in `business.ts`. 808 is a Hawaii area code.
- [ ] Can the office line (910) 465-1712 receive texts? It powers the "Text" button (`phones.text`). If not, point it at a textable number.
- [ ] Branded email on the site domain (currently ncmarineinc@gmail.com).
- [ ] www vs apex: `src/data/site-url.mjs`, then enforce with a Cloudflare redirect rule.
- [ ] Brand palette and type (proposed ink/chart-blue with marker-yellow CTA; Archivo Expanded, Public Sans, IBM Plex Mono) vs. logo/truck wrap.
- [ ] Higher resolution photos. Supplied photos are 740 px wide; the home hero needs ~1600 px+.
- [ ] Photo upload on the estimate form (brief: optional). Not built yet: needs storage (e.g. Cloudflare R2) decided first.
- [ ] Brands they install regularly beyond CMI, WaveArmor, Tide Tamer (decking, float drums, lift brands).

## 3. Integrations (CJ / Dyno)

- [ ] Cloudflare Pages project connected to GitHub, build `npm run build`, output `dist`.
- [ ] Env vars in Cloudflare (never in the repo): `GHL_WEBHOOK_URL`, `LEAD_COPY_WEBHOOK_URL` and/or `RESEND_API_KEY` + `LEAD_COPY_EMAIL` (+ `LEAD_FROM_EMAIL`), `TURNSTILE_SECRET_KEY`.
- [ ] Confirm GHL routing for the webhook.
- [ ] Turnstile site key in `business.ts` > `integrations.turnstileSiteKey`.
- [ ] GA4 measurement ID in `integrations.ga4Id`; mark `generate_lead` as a key event. `click_to_call`, `click_to_text`, `estimate_cta` events are already wired.
- [ ] Optional: Microsoft Clarity ID.
- [ ] Google Search Console + Bing Webmaster Tools verified; IndexNow enabled.

## 4. QA (brief section 10). Results from the Phase 1 to 2 build

- [x] `npm run build` passes with no warnings
- [x] `npm run check:static`: name, phone, single H1, canonical, JSON-LD, meta description present in raw HTML on every template
- [x] Unique titles on all pages; no broken internal links (scripted check)
- [ ] Lighthouse mobile (not run yet: the Lighthouse download was blocked in the build environment; run on the Cloudflare preview URL)
- [ ] Rich Results Test + Schema.org validator on Home, a service page, the FAQ and the project page
- [ ] Form end to end: lead lands in GHL **and** the Dyno copy inbox; thank-you fires `generate_lead`
- [ ] NAP identical in footer, schema, contact page and GBP
- [ ] Keyboard navigation and contrast pass (manual)
- [ ] Redirects tested for every old URL

## 5. Cutover

- [ ] Crawl the old GoDaddy site and add every URL to `public/_redirects` (only the brief's examples are there now; the old site could not be reached from the build environment)
- [ ] Final `check:placeholders` passes
- [ ] DNS cutover (CJ)
- [ ] Submit sitemap (`/sitemap-index.xml`) to Google and Bing; request indexing for key pages
- [ ] Update the GBP website link
