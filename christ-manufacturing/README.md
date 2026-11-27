# CHRIST Manufacturing

Marketing site for **CHRIST Manufacturing**, a premium clothing manufacturer for brands in Abuja, Nigeria
(samples · bulk production · quality finishing). Its layout and type system are modelled on the
editorial gallery feel of [Fe ArtHouse](https://fe-arthouse.framer.website/), reworked around the studio's own
photos and TikTok footage.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the production domain so canonical/OG URLs are correct.

## Structure

- `src/content/site.ts` — every piece of copy, contact detail, product, step and reel lives here.
- `src/components/` — one component per section (Hero, Statement, Pieces, Beyond, Showcase, Process, Founder, Reels, Cta, Footer).
- `public/media/` — web-optimised stills, texture tiles and clips cut from the studio's Drive folder
  (TikTok end-cards trimmed; hero clips cropped to drop the watermark).

## Notes

- All calls to action open WhatsApp (`wa.me/2349019298269`). The footer enquiry form composes a message
  from the visitor's answers and opens it in WhatsApp, so there is no backend.
- Stats (50K likes, 6.3K followers, 302K views) come from the TikTok profile screenshots, so update them as they grow.
- Fonts: Bellefair (display serif), Zalando Sans Expanded (wide headings), Kumbh Sans (body), Playfair Display italic (accents).
