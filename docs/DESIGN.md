# NCMC design system (v3, proposed, pending client approval)

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
