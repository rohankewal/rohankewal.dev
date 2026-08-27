---
title: "When a CMS Is the Wrong Tool"
date: 2026-08-27
description: "If the value is in the content, use a CMS. If the value is in the logic, build the thing. Where the line sits, and what it costs to get it wrong."
tags: ["React", "Next.js", "SvelteKit", "Vue", "Web Development", "Product"]
---

I build most client sites on WordPress or Shopify. I'll also tell you when neither one is right, which is a slightly awkward thing for someone who bills for WordPress work to say, but it saves everyone money in the long run.

The line is roughly this: **if the value is in the content, use a CMS. If the value is in the logic, build the thing.**

## When a CMS is correct

Pages, posts, services, case studies, a shop. Content that a non-technical person needs to change on a Tuesday afternoon without emailing a developer and waiting two days.

This is most websites, and it's most websites for good reason. WordPress and Shopify have solved editing, media handling, permissions, SEO tooling, and the hundred small administrative problems that you'd otherwise be rebuilding badly from scratch. Rejecting that because a custom build sounds more sophisticated is how people end up paying three times as much for something worse.

If your site is fundamentally a set of pages that describe what you do, a CMS is not a compromise. It's the right answer.

## When a CMS becomes six plugins in a trench coat

The other category looks like this:

- **Calculators with real rules.** Not "multiply two fields" — pricing engines, eligibility checks, quoting tools with genuine branching.
- **Client portals.** Per-user data, permissions, documents, statuses. Something different for every person who logs in.
- **Dashboards pulling from an API.** Live data, refreshed, filtered, charted, and actually reliable.
- **Multi-step flows that branch.** Where step four depends on what happened in step two.
- **Anything where "what should this page show?" has an answer that changes per visitor** and that answer comes from real logic rather than a category filter.

You *can* force all of this into WordPress. I've seen it done and I've been called in to maintain it. It works until the day it doesn't, and the day it doesn't is usually the day the business has come to depend on it.

The failure mode is specific and worth naming. You end up with a stack of plugins that were each designed for a simpler version of your problem, held together with custom code in a child theme, with no tests, no clear data model, and behaviour that depends on the load order of five vendors who don't know about each other. Every plugin update is a small gamble. Nobody can tell you with confidence what will break.

Meanwhile the actual logic — the part that makes the thing valuable — is scattered across a settings panel, a form builder's conditional rules, and a snippet in `functions.php`.

## What building it properly looks like

For that second category I build in React, Next.js, SvelteKit, or Vue — chosen for the job, not for my preference.

That choice is less dramatic than the internet makes it sound. Next.js when there's meaningful public content that needs to render fast and rank. SvelteKit when it's mostly an application and I want less runtime weight and less ceremony. Vue when a team already knows Vue and will maintain it. React when the ecosystem you need to integrate with is a React ecosystem, which is often.

What actually matters is what you get: a real data model, logic in one place you can point at, state that behaves predictably, and the ability to change one part without holding your breath about four others.

I built [Runway](https://rohankewal.dev/projects) that way — a free financial toolkit for freelancers, with invoicing, runway tracking, and an AI advisor built in. Designed and shipped end to end, solo. It's live and it's on Product Hunt, which is the only kind of proof that actually counts: the thing exists and people use it.

## The honest trade-offs

Custom builds are not free wins, and anyone who tells you otherwise is selling.

**You lose the admin panel** unless someone builds one. Non-technical editing has to be designed and built deliberately, and that's real scope.

**You lose the plugin ecosystem.** In WordPress, "we need a booking system" is an afternoon. In a custom app it's a decision, an integration, and a week.

**It costs more upfront.** Meaningfully. The payoff is that the second, third, and fourth features cost less than they would in a stack you're constantly fighting.

**Someone has to maintain it.** A custom app with no one looking after it degrades quietly — dependencies age, APIs change. That needs a plan before you start, not after.

This is exactly why the line matters. Getting it wrong in either direction is expensive: a CMS bent into being an application is fragile, and an application built for what should have been a five-page brochure site is money set on fire.

## The hybrid nobody mentions

The answer is frequently both, and this is the option most people never get offered.

Marketing site on WordPress, because the marketing team needs to edit it. Application on a subdomain, built properly, sharing the design system and the navigation so it feels like one product. Each part on the tool that suits it.

It sounds like more work. It's usually less, because neither half is pretending to be something it isn't.

---

**I take on both kinds of work.** WordPress and Shopify when a CMS is the right answer, and React, Next.js, SvelteKit, or Vue when it isn't.

If you've been quoted for a "custom WordPress build" that sounds more like software than a website, that's a conversation worth having before you sign it. [Get in touch](https://rohankewal.dev/contact).
