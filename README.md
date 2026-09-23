# Ingre

Marketing site for [ingre.ai](https://ingre.ai). A mobile app that reads the printed ingredient label on food, beauty, and personal care products.

## Local

```bash
npm install
npm run dev
```

## Build

Static export to `out/` for GitHub Pages:

```bash
npm run build
```

## Deploy

Pushes to `main` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and publish the export to GitHub Pages.

The custom domain is `ingre.ai` (`public/CNAME`). DNS is pointed separately.

The store URL is left unset in `src/lib/site.ts` (`storeUrl`) until a public listing URL is confirmed. The call to action falls back to the on-page `#get` section.

## Visual system

Glassy Monograph. The Monograph palette stays. Glass is a material on top of it, not a new set of hues.

| Token | Value | Use |
| --- | --- | --- |
| bone | `#F4F1EA` | Text on graphite, primary action |
| graphite | `#0B0D0F` | Page field, text on bone buttons |
| ink | `#1F4A7D` | Ambient glow, focus, domain rule |
| glass.fill | bone at 6% | Cards and sheets over the field |
| glass.fillStrong | bone at 10% | Header chrome, stronger panels |
| glass.fillDark | graphite at 55% | Pills over a busy surface, such as the phone |
| glass.hairline | bone at 14%, 1px, faded ends | Top edge light on every glass surface |
| glass.edge | bone at 8%, 1px | Outer border |
| glass.specular | bone 10% to 0% over the top 42% | Soft light inside the surface |
| blur | 14 / 18 / 24 px | Pill, card, and chrome |

Saturated colour belongs to the verdicts only (`clear`, `caution`, `avoid`). Chips stay opaque washes. Type is Fraunces for display, Inter for text, and IBM Plex Mono for eyebrows and figure labels. Small captions use `#828890`, a step lighter than the contest sheet's gray, so they stay readable on graphite.

The page field is graphite with one soft ambient glow (ink, with a little verdict green and amber at the edges) so the frost has something to refract. When the reader asks for reduced transparency or more contrast, or the browser has no `backdrop-filter`, the same shapes fall back to solid graphite 800. Layout does not shift.

The mark is the aperture: viewfinder corners around a centred `i`. Assets live in `public/`: `favicon.svg`, `apple-touch-icon.png`, `brand/ingre-mark.svg`, `brand/ingre-mark-bone.svg`, and the social card `brand/og-monograph.png` (rendered from [`scripts/brand-og.html`](scripts/brand-og.html)).

Pattern reference for this pass: research-library topic **Web design resources for AI coding** (nav, footer, CTA, and section patterns only). This is our own material. No Apple product names, symbols, or brand clone.

Display name stays **Ingre**. `storeUrl` stays unset until a public listing exists.
