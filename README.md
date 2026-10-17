# curiousoffice.com

The website for [Curious Office](https://curiousoffice.com): seed-stage investing in AI-first companies since 2007.

Built with Next.js, React, Tailwind CSS 4 and TypeScript. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev -- --port 3002
```

Then open http://localhost:3002.

## Edit content

Most content lives in `src/lib/data.ts`. Mirror any changes in `public/llms.txt`. See `CLAUDE.md` for the full list of files to keep in sync and the design rules.
