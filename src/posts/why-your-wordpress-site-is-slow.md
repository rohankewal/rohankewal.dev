---
title: "6 Things Slowing Your WordPress Site Down (In the Order I Fix Them)"
date: 2026-08-26
description: "\"The site feels slow\" is never one problem. It's six — and they aren't equally worth fixing. Here's the order that gets you the most speed for the least effort."
tags: ["WordPress", "Web Performance", "Core Web Vitals", "SEO"]
---

"The site feels slow" is almost never one problem. It's usually six, and they are not equally worth fixing.

The order matters more than the list. Most people start at the bottom of this list because the bottom is the item you can solve by paying someone. The top five cost an afternoon and nothing else.

Here's how I actually work through it.

## 1. Images

Almost always the biggest single win, and almost always the easiest.

The classic case: a 4MB photograph uploaded straight from a phone or a stock site, dropped into a hero section, and scaled down by the browser to fit. The browser scales the *display*. It still downloads all 4MB. On a phone, on mobile data, that is most of your load time in one file.

Three fixes, in order:

- **Correct dimensions.** An image displayed at 1600px wide does not need to be 5000px wide. Resize before upload.
- **Modern formats.** WebP or AVIF instead of JPEG and PNG. Typically 25–50% smaller at visually identical quality.
- **Lazy loading below the fold.** Anything the visitor hasn't scrolled to yet shouldn't be competing for bandwidth with what they're looking at now.

If you do nothing else on this list, do this one.

## 2. Render-blocking scripts

Every tracking pixel, chat widget, heatmap tool, and A/B testing script loaded in the `<head>` is a queue standing between the visitor and your content. The browser stops, fetches, executes, and only then carries on building the page.

Most of them do not need to run before your content appears. Analytics can load async. The chat widget can wait three seconds — nobody opens a chat bubble they haven't scrolled to. The heatmap tool almost certainly doesn't need to be there at all, given it's been running since a redesign two years ago and nobody has opened the dashboard since.

The audit question is simple: for each script, when did someone last look at the data it produces?

## 3. Plugin bloat

The number of plugins is not the problem. The weight is.

Twenty lightweight, well-built plugins will comfortably outperform three that each load their own copy of jQuery, their own stylesheet, and their own font — on every single page, whether or not the feature is used on that page.

The usual culprits are page builders and multi-purpose "toolkit" plugins that ship forty features so you can use one. A contact form plugin that loads its assets on all fifty pages of your site to serve the one page with a form on it is doing real damage.

## 4. Fonts

Four weights of two font families is eight files that have to arrive before a single word renders.

Most designs use two weights. Regular and bold. Look at what's actually loading versus what's actually used on screen — the gap is usually large, and it's often an inherited theme default rather than a decision anyone made.

Then use `font-display: swap` so text renders in a fallback immediately rather than leaving a blank space while the webfont downloads. Invisible text during load is one of the worst perceived-performance problems there is, because the page looks broken rather than slow.

## 5. Caching

Free, high-impact, and remarkably often just switched off — or installed, configured once, and then quietly disabled during a debugging session in 2024 and never turned back on.

Page caching means WordPress doesn't rebuild the same page from the database for every visitor. For a site whose content changes weekly, that is close to pure profit. Add browser caching headers so returning visitors don't re-download assets that haven't changed.

## 6. Hosting

Real. Genuinely real. And still last.

Cheap shared hosting has slow server response times, and no amount of front-end optimisation fixes a server that takes 900ms to start responding. If you're on $4/month shared hosting with a busy site, this is a live constraint.

But moving hosts to fix a 4MB hero image is buying a faster car to shorten a commute that's held up by a closed road. You'll spend money, endure a migration, and arrive at a slightly faster version of the same problem.

Fix 1 through 5. Then measure again. Then, if the server response time is still the bottleneck, move hosts — with a clear before-and-after number rather than a hope.

## How to know which one is yours

Run your site through PageSpeed Insights and look at two things before anything else:

**Largest Contentful Paint** — how long until the biggest visible element appears. If this is bad, it's almost always item 1 or item 2.

**Time to First Byte** — how long the server takes to start responding. If this alone is above ~600ms, you have a genuine item 5 or item 6 problem, and front-end work won't save you.

Everything else in the report is detail. Those two tell you which half of the list you live in.

## The part nobody says out loud

Speed work is unglamorous. It doesn't photograph. There's no reveal, no before-and-after that looks like anything, because a successful speed project changes nothing visible.

It is also, reliably, one of the highest-return things you can do to an existing site. You already have the traffic. You're just losing a portion of it to a wait nobody consented to.

---

**I do speed passes on existing WordPress sites** as standalone work, not just as part of a rebuild. Images, scripts, plugins, fonts, caching, and the hosting conversation only when hosting is genuinely the problem.

If your site is slow enough that it's costing you traffic, I have capacity in September. [Get in touch](https://rohankewal.dev/contact).
