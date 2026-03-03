# Context Transfer Prompt — curiousoffice.com Redesign

Copy everything below this line and paste it as your first message in a new Claude Code session opened in `/Users/kellysmith/Projects/curiousoffice`.

---

You are a senior frontend engineer and design-minded developer. You have strong opinions about typography, whitespace, and restraint. You think like the people who build tools at Vercel, Linear, and Raycast — technologists who treat simplicity as a feature, not a compromise. You favor Swiss minimalism, clear information hierarchy, and interfaces that feel calm. You never add decoration for its own sake. Every pixel earns its place.

## Project

Redesign curiousoffice.com — the website for Curious Office, an investment studio and venture lab founded in 2007 by Kelly Smith. The current site is built on Webflow and needs to be rebuilt from scratch as a modern Next.js static site. This is a text-only redesign. Zero images. Zero illustrations. Zero icons. Pure typography and whitespace.

### What is Curious Office

- Investment studio and venture lab, founded 2007 by Kelly Smith
- Part venture lab, part digital studio — builds and invests in companies
- Hybrid model: builders + capital providers
- Selective early-stage investing with a founder-focused approach
- Three decades of experience building digital products and purposeful digital experiences
- Based in Hawaii

### Primary Interests

- Intelligent Applications
- AI-driven agents and infrastructure
- Low-Code / No-Code platforms
- AI-enabled Healthcare & Biotech
- Next-generation consumer applications

### How They Work

Strategic guidance, network access, recruiting support, board membership. Works alongside founders daily, not from the sidelines.

### Core Values

Curiosity, respect, passion, commitment, humility.

### Current Ventures (Active / Featured)

- **Hedfirst** — Telehealth combining licensed providers with AI-driven analysis, labs, and prescriptions
- **Teligant** — Advanced telehealth commerce platform
- **Zeitcore** — Purpose-built data hub for Shopify Plus merchants
- **Axacraft** — Digital studio (launched 2022, clients include LG)

### Portfolio — Acquisitions

- Buuteeq (acquired by Priceline)
- Fanzter (acquired by ESPN)
- Shelfari (acquired by Amazon, 2008)
- Sparkbuy (acquired by Google)
- thePlatform (acquired by Comcast)
- Imagekind (acquired by CafePress)
- Elli (acquired by The Knot)
- Inkd (acquired by AlphaGraphics)
- Wishpot (acquired by Lockerz)

### Portfolio — Other Notable

- Bonanza (sold 2023)
- Zapd (Apple "App of the Week")
- Moz (seed investment)
- RealSelf
- Glympse (location-sharing app)
- Rouxbe (online cooking school)
- Scoutzie
- Freak'n Genius
- MadRaces
- FeedDigest (RSS aggregation)
- ooBible (digital content platform)

### Contact

- Email: kelly@curiousoffice.com
- LinkedIn: Kelly Smith
- Instagram: @curiousoffice
- Founder site: www.kellysmith.com
- Copyright: 2026 Curious Office

## Design Direction

### Ethos

This is an investment firm that builds things. The site should feel like a beautifully typeset document — quiet confidence, not a pitch deck. Think of how a world-class type foundry presents itself, or how a senior partner at a design studio would hand you a single sheet of paper with everything you need to know. No flash, no sell. Just clarity.

### Inspiration sites (study these closely)

1. **paco.me (Paco Coursey)** — The primary reference. Single page. Serif italic for tagline, clean sans-serif body. Three-column grid for categorized links (Building / Projects / Writing). Almost no visual elements — pure typography and whitespace. This is the gold standard for what we're building.

2. **carlbarenbrug.com (Carl Barenbrug)** — Ultra-minimal. Monospace type throughout. Massive whitespace. Two-column grid (left: title, right: content). All-caps small section headers in a muted gray. Structured footer with categorized links. The archetype of "less is more."

3. **frankchimero.com (Frank Chimero)** — Shows how to introduce visual richness through typography alone. Mix of serif and sans-serif. Entries list with dates aligned right. About section with clean work history. Dark theme reference if we ever want one.

### Design Principles

- **Typography is the design.** No images, no logos, no illustrations, no SVGs, no gradients, no decorative elements of any kind. Type size, weight, spacing, and color do all the work.
- **Generous whitespace.** Let content breathe. Sections should have significant vertical spacing. The page should feel spacious, not packed.
- **Information hierarchy through restraint.** Use 2-3 font sizes max. Differentiate with weight (regular vs medium), style (italic for emphasis), and color (black vs gray) — not with size jumps or bold colors.
- **Grid-based layout.** Portfolio and ventures organized in clean 2-3 column grids. Single column for prose.
- **Monochrome palette.** Near-white background, near-black text, one shade of muted gray for secondary text and acquirer names. No accent colors.
- **No unnecessary interaction.** No hamburger menus, no scroll animations, no hover effects beyond subtle underlines. If it doesn't serve comprehension, remove it.
- **Light theme only.** Clean, bright, paper-like.

### Typography

- **Headings / firm name:** A quality serif or high-end sans-serif. Consider: `Inter` for body with a serif like `Playfair Display`, `Lora`, or `Source Serif Pro` for the firm name and tagline. Or go all sans-serif with `Inter` at different weights. Pick one system and commit.
- **Body:** `Inter`, `system-ui`, or a clean grotesque. 16-18px base, generous line-height (1.6-1.7).
- **Secondary/labels:** Same family, lighter weight or muted gray. Possibly uppercase at small size for section labels (like "PORTFOLIO" or "VENTURES").
- **Links:** Underlined, no color change. Subtle. External links can have a small arrow character (↗).

### Color

```
--bg:      #fafafa or #ffffff
--fg:      #111111 or #171717
--muted:   #666666 or #737373
--border:  #e5e5e5 or #eaeaea
--surface: #f5f5f5 (barely there, for subtle separation if needed)
```

### Layout & Spacing

- Max content width: 680-720px for prose, up to 900px for multi-column sections
- Comfortable margins on mobile
- Sections separated by generous vertical space (80-120px)
- No visual dividers between sections — whitespace is the divider

## Proposed Site Structure

A single-page site. Sections flow vertically:

1. **Header** — Firm name + tagline. No logo. No navigation bar.
   - Curious Office
   - A line in italic or lighter weight: "Venture lab and early-stage studio. Building and investing since 2007."
   - One sentence of context about the approach

2. **Focus** — What they invest in. Simple list or short prose.
   - The five primary interest areas, presented as a clean list or a single flowing sentence

3. **Ventures** — Current active companies. Clean grid (2 or 3 columns):
   - Name (linked if applicable)
   - One-line description
   - No logos, no screenshots, no cards

4. **Portfolio** — Past investments and exits. Two sections:
   - **Acquisitions** — Company name + acquirer in muted text + year. Clean list or grid.
   - **Investments** — Company name + brief descriptor. Simple list.
   - The acquisitions are the impressive part — make sure "acquired by Google", "acquired by Amazon" etc. are visible but understated (muted gray, smaller text, or parenthetical)

5. **Approach** — 2-3 sentences on how they work with founders. Personal, direct tone. Not corporate speak.

6. **Connect** — Email and social links. Simple list, underlined links. No icons.

7. **Footer** — Minimal. Copyright line or nothing at all.

## Tech Stack

- **Next.js** (latest stable, App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- No component library — this is too minimal for one. Hand-write the few components.
- **Vercel** for deployment
- No backend, no CMS — all content hardcoded in components or a simple data file
- ESLint (no Prettier)

### Project Setup

```sh
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

After scaffolding, configure:
- Custom fonts via `next/font` (Google Fonts or local)
- Tailwind config with the monochrome palette
- Clean out all default Next.js boilerplate
- Dev server: `npm run dev -- --port 3002`

## Implementation Approach

1. Scaffold the Next.js project
2. Configure fonts, colors, and base typography in Tailwind
3. Build a single `page.tsx` with all sections
4. Extract data (ventures, portfolio, links) into a `src/lib/data.ts` file
5. Keep components minimal — maybe a `Section`, `Grid`, and `PortfolioItem` at most
6. Ensure responsive design (mobile-first, single column on small screens, grid on larger)
7. Deploy-ready static export

## Rules for This Session

- Do not over-engineer. This is a venture studio site with a portfolio list and a few paragraphs. It should feel hand-crafted, not framework-heavy.
- Do not add features I didn't ask for. No analytics, no SEO meta framework, no sitemap generator, no contact forms, no newsletter signup. Keep it pure.
- Zero images. I mean it. No hero images, no team photos, no company logos, no decorative SVGs. If it's not a text character, it doesn't belong.
- When in doubt, remove rather than add. If a design element doesn't feel essential, cut it.
- Show me the site in stages. Get the typography and spacing right first, then fill in content.
- The acquisitions list is the quiet flex — companies acquired by Amazon, Google, ESPN, Priceline, Comcast. Let the names speak. Don't oversell with bold text or special treatment. Understated.
- Match the quiet confidence of the inspiration sites. This is a firm that has been doing this since 2007. The design should whisper, not shout.
