# NC Marine Construction: Website Build Plan (SEO + AEO + Conversion)

Prepared by Dyno Digital. Status: **draft, pending client review.**
Hand this whole file to Claude Code as the project brief (save it as `CLAUDE.md` or `docs/BRIEF.md` in the repo).

---

## 0. Instructions for Claude Code

1. Read this whole file before writing code.
2. Build the stack in Section 4 exactly. Do not swap frameworks.
3. Every fact marked **[CONFIRM]** is unverified. Render it from `src/data/business.ts` so it can be fixed in one place. Never invent reviews, prices, years in business, license numbers, or project details. Use clearly labeled placeholders (`TODO_CONFIRM`) instead, and list every remaining placeholder in `docs/LAUNCH-CHECKLIST.md`.
4. All page content must be in the static HTML. Nothing important gets rendered only by client-side JavaScript (AI crawlers like GPTBot, ClaudeBot and PerplexityBot mostly don't run JS).
5. Build in the phase order in Section 11. Run the QA checks in Section 10 at the end of each phase.

---

## 1. Business facts (from research, Nov 18, 2026)

| Field | Value | Source / status |
|---|---|---|
| Legal name | NC Marine Construction Inc. | Current site footer |
| Current site | nc-marineconstruction.com (GoDaddy Website Builder, © 2017, meta title "HOME") | Live site |
| Office phone | (910) 465-1712 | Site + Facebook |
| Mobile | (808) 443-9412 | Site. **[CONFIRM]** 808 is a Hawaii area code. Ask whether to publish it. |
| Email | ncmarineinc@gmail.com | Site. Recommend a branded email on the site's domain **[CONFIRM]** |
| Positioning on current site | "Licensed and insured marine contractor" | Site |
| Directory tagline | "Docks, Boat Lifts, Floating Docks, Sea Walls. Providing the Greater Wilmington Area with engineered plans and quality marine craftsmanship. Call for a free estimate." | thebuildermarket.com listing |
| Services named | Piers, fixed docks, floating docks, boat lifts, PWC/jet ski lifts, bulkheads, seawalls (vinyl), pilings, dredging | Site meta + Facebook |
| Service area | Wilmington and southeastern NC | Site |
| Social | Facebook (≈375 likes), Instagram @ncmarine_inc | Facebook / site |
| Owner name | **[CONFIRM]** | Not found |
| Physical address | **[CONFIRM]** (needed for GBP, schema, NAP) | Not found |
| NC GC license # | **[CONFIRM]** (BuildZoom lists "N.C. Marine Construction, Inc" with a score of 90, page could not be loaded) | Partial |
| Years in business | **[CONFIRM]** | Not found |
| Google rating / review count | **[CONFIRM]** | Not found |
| Hours | **[CONFIRM]** | Not found |
| Warranty | **[CONFIRM]** | Not found |
| Financing | **[CONFIRM]** | Not found |

### Verified project (use as first case study)

From the company's Facebook page, a North Topsail Beach project:

- 300 ft of CMI vinyl seawall
- 250 ft dock with a bridge section for navigation
- Elevator dock lift
- 1,500 lb PWC swinger lift
- WaveArmor jet ski float
- Supplier/dealer credits: Decks & Docks, Guy C. Lee Building Materials (Sneads Ferry), WaveArmor, Tide Tamer

**[CONFIRM]** photos, year, and permission to name the town.

### Brands to confirm (for "materials we use" sections and brand keywords)

CMI (vinyl sheet piling), WaveArmor, Tide Tamer (lifts). Ask what else they install regularly (lift brands, decking such as composite vs. pressure treated, float drums).

---

## 2. Client intake: questions to send before launch

Send as one short list. Everything here unlocks content or trust signals.

1. Owner name(s), short story, and a headshot or crew photo
2. Physical/shop address, hours, and which phone should be primary
3. NC General Contractor license number and classification; insurance carrier (for a "licensed and insured" badge with substance)
4. Year founded
5. Exact list of towns/counties served, ranked by priority (where do they *want* more work?)
6. Services ranked by profitability; anything they don't want to do (e.g. dredging, small repairs)
7. Do they handle CAMA permits and engineered/sealed drawings for the client?
8. Typical price ranges they are comfortable publishing (or "starting at" figures) for: floating dock, fixed pier, boat lift, PWC lift, seawall per linear foot
9. Typical lead time from deposit to build; permit timeline they usually see
10. Warranty terms
11. 20 to 40 best project photos with town + what was built (raw phone photos are fine)
12. Permission to request Google reviews and to quote existing reviews by first name + town
13. Google Business Profile access (manager invite to Dyno)
14. Domain registrar access for the cutover (CJ handles; do not share credentials in chat)

---

## 3. Goals and KPIs

- **Primary conversion:** phone call. **Secondary:** estimate request form. **Tertiary:** text message.
- Rank top 3 in the Wilmington map pack and organic for: dock builder, boat lift installation, seawall/bulkhead contractor, floating dock, marine contractor (+ city modifiers).
- Get cited in AI answers (Google AI Overviews, ChatGPT, Perplexity) for questions like "how much does a dock cost in Wilmington NC" and "do I need a CAMA permit to replace my dock."
- Track: calls (click-to-call events + call tracking number if used), form submits, GBP calls/directions, ranking for 20 target terms, AI referral traffic.

---

## 4. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro** (static output) | Ships plain HTML, fastest Core Web Vitals, every word visible to AI crawlers |
| Styling | Tailwind CSS | Fast, consistent |
| Content | Astro Content Collections (Markdown/MDX + Zod schema) for services, areas, projects, guides, FAQs | One file per page, typed, easy for future edits |
| Images | `astro:assets` → AVIF/WebP, explicit width/height, lazy below the fold | LCP and CLS |
| Forms | Server endpoint or form service that posts to Dyno's GHL sub-account via webhook **[CONFIRM routing]**; copy every lead to a Dyno inbox | Leads must never silently fail |
| Hosting | **Cloudflare Pages** | Free static hosting, no credit cutoff (Netlify now takes sites offline when credits run out) |
| Analytics | GA4 + Google Search Console + Bing Webmaster Tools; Microsoft Clarity optional | Bing feeds ChatGPT search results |
| Repo | GitHub, auto-deploy on push to `main` | |

Do **not** build on GoDaddy or GHL's site builder for this project. GHL pages render client-side and are mostly invisible to AI crawlers.

---

## 5. Site architecture

```
/                                  Home
/services/                         Services hub
  /services/docks-piers/           Fixed docks & piers
  /services/floating-docks/        Floating docks
  /services/boat-lifts/            Boat lifts (elevator, 4-post, cradle)
  /services/jet-ski-lifts/         PWC lifts, swinger lifts, drive-on floats
  /services/seawalls-bulkheads/    Vinyl seawalls & bulkheads
  /services/dock-repair/           Dock & pier repair / replacement
  /services/pilings/               Piling installation
  /services/dredging/              Dredging  [CONFIRM they still offer]
/areas/                            Service area hub (map + list)
  /areas/wilmington-nc/
  /areas/wrightsville-beach-nc/
  /areas/hampstead-nc/
  /areas/topsail-island-nc/        (Surf City, Topsail Beach, North Topsail Beach)
  /areas/sneads-ferry-nc/
  /areas/carolina-beach-nc/
  /areas/porters-neck-ogden-nc/
  /areas/figure-eight-island-nc/
  /areas/southport-oak-island-nc/  [CONFIRM all towns with client]
/projects/                         Project gallery (filter by service + town)
  /projects/[slug]/                Case study pages
/cost/                             Cost guide hub
  /cost/dock-cost-wilmington-nc/
  /cost/boat-lift-cost/
  /cost/seawall-cost-per-foot/
/guides/                           Answer content (AEO)
  /guides/cama-permits-docks-nc/
  /guides/floating-vs-fixed-dock/
  /guides/vinyl-vs-wood-bulkhead/
  /guides/boat-lift-types/
  /guides/hurricane-ready-docks/
  /guides/how-long-does-a-dock-last/
/faq/                              Master FAQ
/about/                            Owner story, license, insurance, crew
/reviews/                          Real reviews only
/contact/                          Estimate form, phone, map, hours
/thank-you/                        Post-form page (noindex, fires conversion)
/privacy/
```

Rules:
- Only launch an area page when it has **real, unique local content** (at least one project or specific local detail: water body, typical conditions, local permit office). Otherwise hold it. No swapped-city-name duplicates.
- Service × city combo pages (e.g. `/boat-lifts-wilmington-nc/`) are **phase 3**, only for combos with real search demand and real projects.
- Breadcrumbs on every page below Home.

---

## 6. Page templates and conversion design

### Global (every page)

- Sticky header: logo, nav, **tap-to-call phone button** (always visible on mobile), "Free Estimate" button.
- Mobile sticky bottom bar: **Call | Text | Estimate**.
- Footer: full NAP (identical to GBP), hours, license # and "Licensed & Insured", service area list linked to area pages, social links.
- No carousels/sliders. No popups on load. No autoplay video with sound.
- Phone above the fold on every page. Hours in crawlable text.

### Home

1. Hero: H1 "Dock, Boat Lift & Seawall Builders in Wilmington, NC" (adjust to confirmed area). One-line subhead with the differentiator (engineered plans + licensed/insured + **[CONFIRM: years]**). Primary CTA call, secondary CTA estimate. Real project photo (not stock).
2. Trust bar: license #, insured, Google rating **[CONFIRM]**, years **[CONFIRM]**, "Free on-site estimates".
3. Services grid (8 cards → service pages).
4. Featured project (North Topsail case study) with specs list.
5. "How it works" in 4 steps: site visit → design & permits → build → walk-through.
6. Service area map + town links.
7. 3 to 5 real reviews (only after received).
8. FAQ (5 to 6 questions, FAQPage schema).
9. Final CTA band.

### Service page template

- H1: "[Service] in Wilmington & Coastal NC"
- **Answer-first intro (40 to 60 words)** that directly states what it is, who it's for, and the starting cost range or "free estimate" (see AEO rules).
- What's included (bullets), materials and brands, options.
- Cost section with a real range **[CONFIRM]** and what drives cost.
- Process steps.
- Permits note linking to the CAMA guide.
- Related projects (pulled from the projects collection by tag).
- 4 to 6 FAQs specific to the service.
- Inline estimate form (short version) + call CTA.
- Links to 2 to 3 related services and relevant area pages.

### Area page template

- H1: "Dock & Marine Construction in [Town], NC"
- Local specifics: water bodies (ICW, Topsail Sound, Masonboro Sound, Cape Fear River, Banks Channel, New River, etc. as relevant), tide/conditions, HOA or town considerations **[CONFIRM with client]**.
- Projects in that town.
- Services offered there.
- Local FAQ (2 to 4).
- Embedded map of the town (lazy-loaded).

### Project / case study template

- Title: "[What] in [Town], NC" (e.g. "300 ft Vinyl Seawall & Dock with Elevator Lift, North Topsail Beach")
- Spec list (lengths, materials, lift capacity, brands), challenge, solution, timeline, before/after photos, client quote if real.
- Schema: `CreativeWork` or `Article` with `about` linked to the service, plus `ImageObject`s.

### Estimate form

Fields (keep it short): name, phone, email, property town (select), project type (multi-select: dock, floating dock, boat lift, PWC lift, seawall/bulkhead, repair, other), short description, optional photo upload, preferred contact method. SMS consent checkbox worded per counsel **[CONFIRM]**.
- Inline validation, no CAPTCHA wall (use honeypot + Cloudflare Turnstile invisible).
- Success → `/thank-you/` with "what happens next" and the phone number.

---

## 7. SEO specification

### Keyword map (seed; validate volumes in a keyword tool before finalizing)

| Page | Primary | Secondary |
|---|---|---|
| Home | marine contractor Wilmington NC | dock builder Wilmington NC, marine construction near me |
| Docks & piers | dock builder Wilmington NC | pier construction, fixed dock, dock contractor |
| Floating docks | floating dock installation NC | floating dock builder Wilmington |
| Boat lifts | boat lift installation Wilmington NC | elevator boat lift, 4-post lift, boat lift repair |
| Jet ski lifts | jet ski lift installation | PWC lift, swinger lift, drive-on jet ski float |
| Seawalls & bulkheads | seawall contractor Wilmington NC | bulkhead replacement, vinyl seawall, bulkhead repair |
| Dock repair | dock repair Wilmington NC | pier repair, dock replacement, hurricane dock repair |
| Pilings | dock piling installation | piling replacement |
| Cost pages | how much does a dock cost NC | boat lift cost, seawall cost per foot |
| CAMA guide | CAMA permit for dock | do I need a permit to replace my dock NC |

### On-page rules

- One H1 per page, keyword-led, natural.
- Title tag ≤ 60 chars: "Boat Lift Installation in Wilmington, NC | NC Marine Construction".
- Meta description ≤ 155 chars with a CTA and phone.
- Descriptive, keyword-aware slugs (as in Section 5).
- Image filenames and alt text describe the actual photo ("elevator-boat-lift-north-topsail-beach.avif").
- Internal links: every service page links to ≥2 area pages and ≥2 projects; every area page links to all services offered there; guides link to the matching service page with descriptive anchor text.
- Canonical tags on every page; XML sitemap; robots.txt referencing sitemap.
- 301 redirect map from all old GoDaddy URLs (`/services`, `/gallery`, `/testimonials`, `/contact-us`, etc.) to new equivalents. Crawl the old site before cutover to capture every URL.

### Technical targets

- Lighthouse mobile ≥ 95 performance, 100 SEO, 100 accessibility, 100 best practices.
- LCP < 2.0 s, CLS < 0.05, INP < 200 ms on mobile.
- WCAG 2.2 AA: contrast, focus states, labels, tap targets ≥ 44 px.
- HTTPS, HSTS, no mixed content. `www` vs apex chosen and enforced.

### Local SEO (outside the codebase, CJ/Dyno tasks)

- Google Business Profile: correct primary category (**Marine contractor** or **Dock builder**, test which), secondary categories (Boat lift supplier/installer, Seawall contractor if available, etc.), services list mirroring the site, service areas, hours, 30+ photos, weekly posts with project photos.
- Review engine: send a review request link after every completed job; ask customers to mention the service and town in their own words. Never write or incentivize reviews.
- NAP consistency: fix Facebook, Instagram, Angi/HomeAdvisor, Yelp, BBB, BuildZoom, Bing Places, Apple Business Connect.
- Supplier backlinks: ask Decks & Docks, Guy C. Lee, WaveArmor, Tide Tamer, CMI about installer/dealer directory listings.

---

## 8. AEO (answer engine optimization) specification

Goal: be the source AI tools quote for coastal NC dock, lift, and seawall questions.

1. **Answer-first blocks.** Every service, cost, and guide page opens with a 40 to 60 word direct answer to the page's main question, in plain language, before any marketing copy. Mark it up as the first paragraph under the H1.
2. **Question headings.** Use H2/H3s phrased as real questions ("How much does a floating dock cost in Wilmington?"), each followed by a 1 to 3 sentence direct answer, then detail.
3. **Facts in tables and lists.** Specs, cost drivers, lift types, material comparisons in HTML tables (AI models extract tables well).
4. **Named entities.** Mention real places (ICW, Topsail Sound, Cape Fear River), real agencies (NC Division of Coastal Management, CAMA, US Army Corps of Engineers), and real materials/brands they install. Link out to official sources (deq.nc.gov) on the permit guide.
5. **Freshness.** Show "Last updated [date]" on guides and cost pages; update cost ranges yearly.
6. **Author/expertise.** Guides bylined by the owner with a short bio and license # (E-E-A-T).
7. **`/llms.txt`** at the root: one-paragraph business summary, NAP, services, areas, and links to the key guides.
8. **robots.txt:** allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, OAI-SearchBot.
9. **Bing Webmaster Tools + IndexNow** enabled (Bing powers ChatGPT search).
10. Content must be static HTML (Astro static build satisfies this). Verify with `curl -s <url> | grep -i "NC Marine Construction"` on every template.

### CAMA guide content notes (verified Nov 2026, have client review; not legal advice)

- Under NC Session Laws 2024-45 and 2024-53, replacing a dock, pier, or walkway damaged by storms, fire, or normal deterioration generally **no longer needs a CAMA permit** if it is restored to its prior footprint, **unless** it is more than 6 ft wide, has more than 800 sq ft of platform, is adjacent to a federal navigation channel, or is enlarged by more than 5 ft or 5% (whichever is less).
- Exempt replacements must still meet other state, federal, and local rules. NC DCM recommends checking with the local code official about whether sealed plans are needed.
- New docks, boat lifts, boathouses, and bulkheads still go through CAMA (general, minor, or major permit depending on scope). DCM proposed raising general permit fees from $400 to $474 in 2026 **[CONFIRM current fee before publishing]**.
- Include a clear disclaimer: general information, not legal advice; confirm with NC DCM or the contractor during the site visit.
- Sources: https://deq.nc.gov/sl-2024-53-gis-link/open and https://coastalreview.org/2026/08/noaa-approves-changes-to-dock-repair-rebuilding-rules/

---

## 9. Structured data (JSON-LD)

Generate from `src/data/business.ts` so NAP stays in sync.

- **Site-wide:** `HomeAndConstructionBusiness` (or `GeneralContractor`) with `name`, `url`, `logo`, `image`, `telephone`, `email`, `address`, `geo`, `openingHoursSpecification`, `areaServed` (list of `City`), `hasOfferCatalog` (services), `sameAs` (Facebook, Instagram, GBP URL), `priceRange` **[CONFIRM]**. Add `aggregateRating` **only** if it mirrors reviews visibly shown on the site.
- **WebSite** with `name` and `url`.
- **Service** on each service page (`serviceType`, `provider` → business `@id`, `areaServed`).
- **FAQPage** on pages with visible FAQs (questions and answers must match the visible text exactly).
- **BreadcrumbList** on all inner pages.
- **Article** on guides (author = owner `Person`, `dateModified`).
- **ImageObject** on project pages.
- Validate with Google Rich Results Test and Schema.org validator before launch.

---

## 10. QA checklist (run each phase)

- [ ] `npm run build` passes with zero warnings that matter
- [ ] Lighthouse mobile scores meet Section 7 targets on Home, one service, one area, one project
- [ ] `curl` check shows full content in raw HTML for each template
- [ ] All schema validates; no errors in Rich Results Test
- [ ] Every page has unique title, meta description, H1, canonical
- [ ] No broken links (run a link checker)
- [ ] Form submits end to end: lead lands in GHL **and** the Dyno copy inbox; thank-you page fires the conversion event
- [ ] Click-to-call and click-to-text fire GA4 events
- [ ] NAP identical in footer, schema, contact page, and GBP
- [ ] No placeholder text visible on any indexable page (`grep -r TODO_CONFIRM dist/` returns nothing at launch)
- [ ] Redirect map tested for every old URL
- [ ] Accessibility: keyboard nav, alt text, contrast pass

---

## 11. Build phases

**Phase 1: Foundation (day 1)**
Astro + Tailwind scaffold, `business.ts` data file, layout, header/footer, sticky mobile CTA bar, design tokens, schema components, sitemap, robots.txt, llms.txt, analytics, Cloudflare Pages deploy to a preview URL.

**Phase 2: Core pages (days 2 to 3)**
Home, services hub + 8 service pages, contact + form + thank-you, about, projects hub + North Topsail case study, FAQ, privacy. Launch-ready with placeholders listed.

**Phase 3: Local + AEO content (days 4 to 6)**
Area hub + area pages that have real local content, cost guide hub + 3 cost pages, 6 guides, reviews page. Internal linking pass.

**Phase 4: Launch**
Client review of all **[CONFIRM]** items → replace placeholders → final QA → redirects → DNS cutover → submit sitemap to Google Search Console and Bing → request indexing for key pages → GBP website link updated.

**Phase 5: Ongoing (monthly)**
2 new project case studies, 1 new guide or cost update, GBP posts weekly, review requests after each job, ranking + AI citation check on the 20 target queries.

---

## 12. Brand direction (proposed, pending client approval)

No brand guide exists on the current site. Proposed:
- Palette: deep navy (water), sand/off-white background, a single high-contrast accent for CTAs (marine orange or safety yellow). Confirm against their logo/truck wrap.
- Type: a sturdy sans for headings (e.g. Inter Tight / Barlow), clean sans for body.
- Photography: real job photos only, shot wide at golden hour when possible, plus drone shots of finished docks. No stock photos of docks that aren't theirs.
- Voice: plain, confident, practical. Talk like a builder, not an agency. Short sentences. No hype.

---

## 13. Competitor notes (for positioning, not copying)

- **Intracoastal Installs** (Hampstead): strong SEO structure (11 service pages, 8 city pages, cost pages, glossary, FAQ schema), publishes price ranges. But its preview site shows placeholder testimonials; our edge is real projects, real reviews, and real specs.
- **Logan Marine** (Wilmington): city pages (e.g. Southport), "25+ years / 500+ clients" stats, phone-first CTAs.
- **Coastal Dock Builders, PFL Marine, Ennett Marine, Breakwater Construction** (Hampstead/Sneads Ferry): mostly thin brochure sites. Easy to outrank with depth.
- **Gap to own:** engineered plans + real case studies with specs + the best CAMA/permit and cost content in the Wilmington-to-Topsail corridor.

---

## Research sources

- Current site: https://nc-marineconstruction.com/
- Facebook: https://www.facebook.com/p/NC-Marine-Construction-100054190360805/
- Directory listing: https://thebuildermarket.com/us/nc/beaufort/docks
- BuildZoom: https://www.buildzoom.com/contractor/n-c-marine-construction-inc
- NC DCM replacement exemption: https://deq.nc.gov/sl-2024-53-gis-link/open
- NC DCM fee proposal: https://www.deq.nc.gov/coastal-management/crc-26-48-updated/download
- Coastal Review: https://coastalreview.org/2026/08/noaa-approves-changes-to-dock-repair-rebuilding-rules/
- Competitors: https://www.intracoastalinstalls.com/marine-contractors, https://loganmarine.com/
