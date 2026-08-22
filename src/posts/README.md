# Posts

One markdown file per post. The file name becomes the URL:
`src/posts/why-your-site-is-slow.md` is served at `/blog/why-your-site-is-slow`.

## Adding a post

1. Copy `_template.md`, rename it to the slug you want.
2. Fill in `title`, `date` and `description`.
3. Delete the `draft: true` line when it is ready to go live.
4. Commit. The build picks it up with no other wiring.

Posts sort newest first by `date`, so back-dated LinkedIn posts drop into the
right spot automatically.

## What happens automatically

Adding a file updates the blog index, `/sitemap.xml` (with a `lastmod`),
`/rss.xml`, the prev/next links on neighbouring posts, and the `BlogPosting`
structured data on the post page. Nothing needs registering anywhere else.

## Gotchas

- `date` must be `YYYY-MM-DD`. The build fails loudly on anything else, which is
  deliberate: a bad date silently reorders the whole index.
- `title` is required and the build fails without one.
- Frontmatter parsing handles `key: value` and `key: [a, b]`. It is not a full
  YAML parser, so no nested structures or multi-line strings.
- Post bodies are rendered with `{@html}`. That is fine because you write them,
  but do not paste in markdown from a source you do not trust.
