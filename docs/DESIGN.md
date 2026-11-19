# NCMC design system (v4, SaaS direction, proposed, pending client approval)

## v6: dark theme + photo hero (2026-11-19, current)

- Whole site is dark. Tokens: paper #0e0d0c (page), shallow #161412, card #1c1a18, night #23201d (raised panels, text on gold), rule #2e2a27, ink #f4f2ef (text), muted #a8a29e, sea #8fd3c9 (teal text accent), tide #134e4a (teal fill), marker #e7c989 (gold CTA). `ink` means TEXT; use `night` for dark fills.
- Home hero is a full-bleed photo (twin boat lifts, Surf City) with the nav overlaid, glass estimate bar, credentials and a dark glass spec card. Rest of v5 layout unchanged.
- Logo is inverted (white) everywhere. Gold buttons use dark `night` text.

## v5: "SaaS company meets construction" (2026-11-19)

Mix of v3 (photos shown full color, no dark overlays) and v4 (SaaS components, Outfit + Work Sans, gold CTA).
- Solid sticky header (gold "Free estimate" + ink phone button). The overlay header variant still exists but is unused.
- Split hero on a faint drafting-paper grid: headline, white quick-estimate bar (prefills /contact/), credentials row; right side a full-color photo with two product-style cards: a spec sheet listing only what is visible in the photo, and a 4-step project tracker.
- Supplier strip ("trusted by" pattern) from the verified North Topsail project credits.
- Service feature cards with clean photos (UI/UX Pro Max "Bento Grid Showcase"), plus an ink "Not sure what you need?" card.
- Fixed vs floating comparison table (skill "Comparison Table Focus": factual only; same statements as the service pages). Also good for AI answer extraction.
- No eyebrow labels or pill badges above headings (reviewer: reads as AI-generated).

## v4 changes (2026-11-19, superseded)

Reviewer asked for a less "AI" feel, closer to a SaaS landing page (reference: automotive SaaS hero).
- Home hero: rounded inset photo (22px radius, 8 to 12px page margin), nav overlaid on the photo, uppercase Outfit headline bottom-left, frosted-glass quick-estimate bar (project + town selects, lime CTA) that prefills the contact form via `?project=&town=`, floating glass project tag.
- Type: UI/UX Pro Max "Geometric Modern" pairing, Outfit + Work Sans (replaces Playfair + Inter).
- Accent: light gold `#e7c989` (from v3) as a fill only, ink text 10.9:1. Lime was tried and rejected by the reviewer. Ink buttons on light grounds, teal for labels and links.
- Radius 10px controls, 18 to 22px cards and panels. Glass only on photo overlays (skill rule: blur 10 to 20px, white 15 to 30%, 1px light border, contrast checked).
- Sections: proof row, service bento (3 photo cards + 5 compact), slider, numbered process cards, teal town panel, FAQ, inset ink estimate card.

## v3 notes (superseded where v4 differs)

Built with the UI/UX Pro Max skill (`.claude/skills/ui-ux-pro-max`). Tokens live in `src/styles/global.css`.

## Sources from the skill databases

| Decision | Skill result | Query |
|---|---|---|
| Page pattern | Hero-Centric Design + Trust & Authority + Conversion (full-bleed hero, proof strip, case studies, low-friction form, accent for CTA only) | `--design-system` "coastal marine construction premium craftsmanship" / "home services contractor construction local trust"; `--domain landing` |
| Project section | Portfolio Grid (visuals first, neutral background) | `--domain landing` "local service trust portfolio" |
| Palette | Luxury/Premium "premium black + gold", plus deep teal from Real Estate/Property | `--domain color` "luxury real estate premium" |
| Type | "Classic Elegant": Playfair Display + Inter | `--domain typography` "luxury premium elegant" |

The skill's default `--design-system` palettes for construction and contractor queries all pair with a safety-orange accent. Orange was rejected by the client reviewer, so the palette comes from the color database instead. No result was persisted with `--persist` for that reason.

## Tokens

| Token | Value | Use |
|---|---|---|
| ink | #1c1917 | text, dark bands, footer |
| paper | #fafaf9 | page ground |
| shallow | #f2f1ef | alternate sections |
| rule | #d6d3d1 | borders |
| muted | #57534e | secondary text |
| brass | #a16207 | primary CTA on light grounds (white text 4.9:1) |
| marker | #e7c989 | CTA and labels on dark grounds (ink text 10.9:1) |
| tide | #134e4a | case study band, links |

## Rules (from the skill's priority table)

- Accent only on calls to action. Phone number visible in the header and hero.
- Contrast at least 4.5:1, visible focus ring, 44px+ tap targets, `prefers-reduced-motion` honored.
- Hover transitions 200ms, color/opacity or small translate only. No carousels.
- Real photos only. Supplied photos are 740px wide; the hero needs ~1600px+ originals.
