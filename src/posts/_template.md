---
title: 'The headline of the post'
description: 'One or two sentences. This is what shows in the blog index and in Google search results, so write it for a reader who has not clicked yet.'
date: 2026-08-22
tags: [WordPress, SEO]
draft: true
---

The file name is the URL. This one would live at `/blog/_template`, so name files
in lowercase with hyphens: `why-your-site-is-slow.md` becomes `/blog/why-your-site-is-slow`.

## Frontmatter reference

- `title` is required.
- `date` is required, in `YYYY-MM-DD` form. Back-date it to when the post
  originally went out on LinkedIn and it sorts into place on its own.
- `description` is optional but worth writing every time. It is the meta
  description Google shows under the link.
- `tags` is optional, a comma-separated list in square brackets.
- `updated` is optional. Set it if you meaningfully revise a post later.
- `draft: true` keeps a post out of the index, the sitemap and the feed, and
  out of the production build entirely. Delete the line to publish.

## Writing

Everything below the frontmatter is regular markdown. **Bold**, _italic_,
[links](https://rohankewal.dev), lists, quotes and code all render against the
site palette.

> Pull quotes get the serif treatment, in case a line is worth the emphasis.

That is the whole system. Copy this file, rename it, replace the contents.
