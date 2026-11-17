# oj.dzn — Portfolio

The portfolio of Ohjay (Olajide Oladunni): premium websites for brands, artists and businesses.

Built with Next.js (App Router), TypeScript and plain CSS. No UI libraries.

## Editing content

Almost everything you'd want to change lives in **`src/content/site.ts`**:

| What | Where |
| --- | --- |
| Email, Calendly, WhatsApp number, socials | `site` |
| Case studies (name, link, copy, scope, colour) | `projects` |
| Pain-point pills | `painPoints` |
| Service tiles | `services` |
| Comparison table | `comparison` |
| Process steps | `steps` |
| Packages & prices | `packages` (set `price` to show it) |
| FAQ | `faqs` |
| Rotating hero words | `heroWords` |

Project screenshots live in `public/work/{slug}-desktop.webp` (1600×1000) and `{slug}-mobile.webp` (600 wide).

Setting `site.whatsapp` (e.g. `"2348012345678"`) adds "Chat on WhatsApp" buttons automatically.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub and import the repo on Vercel. Update `site.url` in `src/content/site.ts` to the final domain so SEO and share images use it.
