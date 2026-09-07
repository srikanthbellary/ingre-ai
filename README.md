# Ingre

Marketing site for [ingre.ai](https://ingre.ai) — a mobile app that reads the printed ingredient label on food, beauty, and personal care products.

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

The store URL is left unset in `src/lib/site.ts` (`storeUrl`) until a public listing URL is confirmed; the call-to-action falls back to the on-page `#get` section.

## Visual system

The site shares the Monograph tokens with the app:

| Token    | Value     | Use                                                        |
| -------- | --------- | ---------------------------------------------------------- |
| bone     | `#F4F1EA` | Paper — page background, text on graphite                  |
| graphite | `#0B0D0F` | Ink — type, buttons, dark bands, app screens               |
| ink      | `#1F4A7D` | Restrained accent — rules, underlines, focus, figure chrome |

Saturated colour belongs to the verdicts only (`clear`, `caution`, `avoid`), never
to brand chrome. Type is Fraunces (display) over Inter (text).

The mark is the aperture: viewfinder corners around a centred `i`. Assets live in
`public/` — `favicon.svg`, `apple-touch-icon.png`, `brand/ingre-mark.svg`,
`brand/ingre-mark-bone.svg`, and the social card `brand/og-monograph.png`
(rendered from [`scripts/brand-og.html`](scripts/brand-og.html)).
