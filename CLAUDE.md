# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

There are no tests. Deployment is automatic: commits pushed to `main` are deployed by Vercel.

## Architecture

This is a **Next.js 14 App Router** site with **TypeScript** and **Tailwind CSS**. There is no database or CMS — all content lives in two TypeScript files.

### Content files (the main editing surface)

**`content/blog-posts.ts`** — The source of truth for all blog posts. Exports `blogPostsFull: BlogPost[]`. Each post object contains `slug`, `tag`, `title`, `excerpt`, `date`, `readTime`, `metaDescription`, and `content` (full HTML as a template literal). To publish a new post, add a new object to this array. The blog index and individual post pages are both driven entirely from this array.

**`content/site-data.ts`** — All other editable site content: `siteConfig` (contact info, Calendly/Medium/LinkedIn URLs), `hero`, `values`, `credentials`, `services`, `processSteps`, `testimonials`, and `about`. This file also has a legacy `blogPosts` export (Medium-linked posts) that is no longer used by any page — ignore it.

### Routing

```
app/page.tsx              → Homepage
app/about/page.tsx        → About
app/services/page.tsx     → Services
app/contact/page.tsx      → Contact
app/blog/page.tsx         → Blog listing (reads blogPostsFull, sorts by date)
app/blog/[slug]/page.tsx  → Individual post (static params from blogPostsFull slugs)
```

Blog post pages use `generateStaticParams` (SSG) and render post HTML with `dangerouslySetInnerHTML` inside a `<div className="prose-mane">`.

### Styling

Custom Tailwind color palette — use these tokens, not raw hex values:
- `saddle` — primary brand brown (`saddle-500` = `#7A5230`)
- `bark` — near-black text scale (`bark-800` = body dark, `bark-300` = muted text)
- `cream` — warm off-white backgrounds (`cream-200` = section backgrounds)
- `sage` — green accent (defined but lightly used)

Custom font families: `font-heading` (Archivo, used for h1–h3) and `font-body` (IBM Plex Sans).

Reusable utility classes defined in `globals.css` (not Tailwind components):
- Buttons: `.btn-primary`, `.btn-secondary`, `.btn-light`
- Section layout: `.section-label`, `.section-title`, `.section-intro`
- Blog body: `.prose-mane` (applied to the wrapper div around blog post HTML)

### Blog post HTML conventions

Post `content` fields are HTML strings. Use HTML entities for curly quotes (`&rsquo;`, `&ldquo;`, `&rdquo;`), em dashes (`&mdash;`), and similar typographic characters. The `.prose-mane` CSS class styles `h2`, `h3`, `p`, `ul`, `ol`, `li`, `strong`, `em`, `a`, and `blockquote` — no extra classes needed inside post content.
