# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mane Message is a freelance copywriting and content marketing site for the equine, pet, and veterinary industries, owned by Jennifer Mitchell. It is a static Next.js 14 App Router site with no database or CMS — all content lives in two TypeScript files. Commits pushed to `main` deploy automatically via Vercel.

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

**`content/blog-posts.ts`** — The source of truth for all blog posts. Exports `blogPostsFull: BlogPost[]`. Each post object contains `slug`, `image`, `tag`, `title`, `excerpt`, `date`, `readTime`, `metaDescription`, and `content` (full HTML as a template literal). New posts are prepended to the array (newest first). The blog index and individual post pages are both driven entirely from this array.

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

---

## Blog Post Schema

**File:** `content/blog-posts.ts`

```ts
export interface BlogPost {
  slug: string;            // kebab-case URL segment — see Slug Format below
  image: string;           // absolute path from public/, e.g. "/images/about-page-handshake.jpg"
  tag: string;             // exactly one approved tag — see Tags below
  title: string;           // display title (plain text, no HTML entities)
  excerpt: string;         // 1–2 sentence teaser shown on the blog tile
  date: string;            // ISO 8601: "YYYY-MM-DD"
  readTime: string;        // e.g. "9 min read"
  metaDescription: string; // ~155-char SEO description, distinct from excerpt
  content: string;         // full post body as an HTML template literal
}
```

### Real example

```ts
{
  slug: "about-page-that-wins-business",
  image: "/images/about-page-handshake.jpg",
  tag: "Content Strategy",
  title: "How to Write Your Website's About Page That Actually Wins You Business",
  excerpt: "Your About page is your business interview. Most fail it by writing about the wrong person. Here is how to write one that actually wins you business.",
  date: "2026-05-15",
  readTime: "9 min read",
  metaDescription: "Your About page is your business interview. Most fail it by writing about the wrong person. Learn how to write one that actually wins business.",
  content: `<p><em>The best About pages aren&rsquo;t just about you. Here&rsquo;s why.</em></p>

<p>Your website About page is the second most-visited page on your website.</p>

<h2>The Cardinal Mistake: You Are Writing About the Wrong Person</h2>

<p>Almost every weak About page makes the same fundamental error...</p>`,
}
```

---

## Tags

Use **exactly one** of these strings (case-sensitive). Do not invent new tags without asking Jennifer first.

- `"Content Strategy"`
- `"Digital Marketing"`
- `"SEO"`
- `"Equestrian Life"`
- `"Pet Industry"`

---

## Image Conventions

- **Source folder:** `public/images/`
- **Referenced in code as:** `/images/filename` (not `/public/images/`)
- **Naming:** lowercase kebab-case, descriptive — e.g. `about-page-handshake.jpg`, `blog-dressage.jpg`, `rescue-blog.jpg`
- **Formats:** `.jpg` is the standard. `.png` is used for logos and graphics (e.g. `logo.png`, `trail-ride.png`). Avoid uppercase extensions (`.JPG`).
- The image file must exist in `public/images/` before the post object is committed. Stage both together.

---

## Slug Format

- Lowercase words separated by hyphens: `"about-page-that-wins-business"`
- Derived from the post title — drop stop words, keep meaningful keywords
- Must be unique across all posts in `blogPostsFull`
- Becomes the URL: `/blog/[slug]`

---

## Date Format

`"YYYY-MM-DD"` (ISO 8601). The blog listing sorts by this field descending — newer dates appear first. Use today's actual date when publishing.

---

## Git Workflow

- Commit directly to `main` (no feature branches needed for content changes)
- Stage the content file and image file together in one commit
- Push to `origin main` — Vercel auto-deploys on every push, no manual step needed

**Commit message style:** imperative sentence, no trailing period.
Examples: `"Add [topic] blog post"`, `"Update excerpt for [slug] post"`, `"Swap image on [slug] post"`

---

## Publishing a New Blog Post

1. Place the image file in `public/images/` using kebab-case naming
2. Open `content/blog-posts.ts`
3. Prepend a new object to the `blogPostsFull` array (newest post first)
4. Fill in all fields per the schema above
5. Use HTML entities for typographic characters in `content`:
   - Curly apostrophe: `&rsquo;`
   - Opening/closing double quotes: `&ldquo;` / `&rdquo;`
   - Em dash: `&mdash;`
6. Use only these HTML tags inside `content` — `.prose-mane` styles them, no extra classes needed:
   `<h2>`, `<h3>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<em>`, `<a>`, `<blockquote>`
7. Run `npm run build` to confirm no TypeScript errors
8. `git add content/blog-posts.ts public/images/<image-file>`
9. `git commit -m "Add [topic] blog post"`
10. `git push origin main`
