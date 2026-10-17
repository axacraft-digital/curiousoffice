# Curious Office

Single-page site for Curious Office — seed-stage investing in AI-first companies, founded and operated by Kelly Smith, based in Boise, Idaho. Live at https://curiousoffice.com, deployed on Vercel.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, ESLint. No component library, no CMS, no backend.

```sh
npm run dev -- --port 3002
npm run lint
npm run build
```

## Where things live

- `src/lib/data.ts` — all content: tagline, focus areas, ventures, acquisitions, investments, contact links.
- `src/app/page.tsx` — the whole page. The intro and Approach paragraphs are written inline here, not pulled from `data.ts`.
- `src/app/layout.tsx` — fonts, metadata, JSON-LD, Vercel Analytics.
- `src/app/globals.css` — color tokens (see the contrast table at the top of the file).
- `src/app/opengraph-image.tsx`, `robots.ts`, `sitemap.ts`, `not-found.tsx`.
- `public/llms.txt` — plain-text copy of the site for LLMs.

## Keep in sync

Content is duplicated by hand. When you change a venture, acquisition, investment, focus area, tagline or location, update all of these:

- `src/lib/data.ts`
- `public/llms.txt`
- `src/app/layout.tsx` (metadata and JSON-LD) if the tagline or location changes
- `src/app/opengraph-image.tsx` if the tagline changes

## Design rules

- Dark theme only. Typography and whitespace are the design: no images, illustrations or decorative graphics in the page body. The favicon and OG image are the exceptions.
- Two typefaces: Inter (sans, body and labels) and Source Serif 4 (name, tagline, portfolio subheads, acquirer names, one italic pull line in Approach).
- Monochrome, no accent color. Use the tokens in `globals.css`. Any text must meet at least 4.5:1 against `--background`, so nothing dimmer than `--subtle` (#8f8f8f). `--border` is for hairlines only and never for text.
- Section labels are numbered (`01`–`05`) with a hairline that runs to the right edge. Renumber them if you add or remove a section.
- Interaction stays quiet: underlines brighten on hover, the ↗ on external links nudges, and keyboard focus has a visible outline. No scroll animations, no menus.
- The acquisitions list is the quiet flex. Let the names speak: no bold, no badges.
- When in doubt, remove rather than add.
