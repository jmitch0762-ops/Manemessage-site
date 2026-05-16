Publish a new blog post to the Mane Message site. Follow all conventions in CLAUDE.md exactly.

## Step 1 — Gather inputs

If the user provided all fields as $ARGUMENTS, parse them. Otherwise ask for all of the following in a single message:

- **Title** — full display title (plain text)
- **Tag** — must be one of the approved tags in CLAUDE.md; if unclear, list the options and ask
- **Excerpt** — 1–2 sentence teaser for the blog tile
- **Meta description** — ~155-char SEO description (distinct from excerpt)
- **Image filename** — file must already exist in `public/images/`; verify it before proceeding
- **Read time** — e.g. "7 min read"
- **Post body** — full HTML content for the `content` field

## Step 2 — Derive computed fields

- **slug:** convert the title to lowercase kebab-case, drop stop words, keep keywords. Confirm it is unique against all existing slugs in `content/blog-posts.ts`.
- **date:** use today's date in `YYYY-MM-DD` format.

## Step 3 — Validate

- Confirm the image file exists in `public/images/` using the Glob tool. If it does not exist, stop and tell the user.
- Confirm the tag is on the approved list. If not, stop and ask.
- Confirm the slug is not already in use. If it is, suggest an alternative.

## Step 4 — Write the post

Prepend the new post object to the `blogPostsFull` array in `content/blog-posts.ts` (newest first). Use the schema and example in CLAUDE.md as the exact template. Apply HTML entities to typographic characters in the `content` field (`&rsquo;`, `&ldquo;`, `&rdquo;`, `&mdash;`).

## Step 5 — Build check

Run `npm run build`. If it fails, fix the TypeScript error before continuing.

## Step 6 — Commit and push

```bash
git add content/blog-posts.ts public/images/<image-filename>
git commit -m "Add [topic] blog post"
git push origin main
```

Confirm the push succeeded and tell the user the live URL will be: `/blog/[slug]`
