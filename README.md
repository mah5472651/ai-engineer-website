# AI Engineer Portfolio

Dark tech / terminal-style portfolio for an AI engineer. Built with **Next.js** and **Tailwind CSS**.

Includes:

- Full portfolio (hero, about, skills, projects, experience, contact)
- Project case study pages (`/projects/[slug]`)
- Blog listing + posts (`/blog`, `/blog/[slug]`)
- Downloadable resume (`public/resume.pdf`)

## Quick start

```bash
cd ai-engineer-portfolio
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

| File | What to edit |
| --- | --- |
| `src/data/portfolio.ts` | Name, about, skills, projects, experience, contact |
| `src/data/blog.ts` | Blog posts (Markdown bodies) |
| `scripts/generate-resume.mjs` | Resume PDF content (then regenerate) |

```bash
npm run generate:resume   # writes public/resume.pdf
```

Replace GitHub/demo URLs and personal details with your own.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run generate:resume` | Generate `public/resume.pdf` |

## Deploy

Deploy on [Vercel](https://vercel.com) (import the repo, framework: Next.js).

### SEO / production URL

Set the public origin so sitemap, robots, and Open Graph use the correct domain:

```bash
# .env.local or Vercel env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Without it, the app falls back to Vercel’s production URL when available.

SEO includes: `sitemap.xml`, `robots.txt`, canonical URLs, Open Graph / Twitter cards, JSON-LD (Person + WebSite + projects/posts), and a web app manifest.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- react-markdown
- pdfkit (resume generation)
- Vitest (content integrity)
