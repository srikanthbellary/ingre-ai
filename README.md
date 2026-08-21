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

The Android store URL is left unset in `src/lib/site.ts` (`playStoreUrl`) until a public listing URL is confirmed.
