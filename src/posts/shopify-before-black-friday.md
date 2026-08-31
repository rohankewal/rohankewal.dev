---
Publish date: 2026-08-31
Slug: shopify-before-black-friday
Meta description: Black Friday is 12 weeks out. Five things I'd fix on a Shopify store before the traffic arrives — and the one most people leave until November, when it's too late to matter.
Tags: Shopify, Ecommerce, BFCM, Conversion, Web Performance
Read time: ~5 min
---

# 5 Things I'd Fix on Your Shopify Store Before Black Friday

*Black Friday is 12 weeks out. Five things I'd fix on a Shopify store before the traffic arrives — and the one most people leave until November, when it's too late to matter.*

Black Friday 2026 is November 27th. From today, that's twelve weeks.

Twelve weeks sounds like plenty. It isn't, because the useful window is shorter than the calendar window. Anything you change in the second week of November has no data behind it and no time to be fixed if it goes wrong. Anything you change in September gets tested by two months of ordinary traffic first, which is the entire point.

So here's what I'd actually do with the twelve weeks. None of it is a rebuild. Most of it is a week of work in total.

## 1. Your product page is doing three jobs

Open your best-selling product on a phone. Before you scroll, count what the page is trying to do.

Most of them are doing three things at once: selling this product, explaining the brand, and pushing four other products. All above the fold, all before the visitor has moved a finger.

Pick one job. This page sells this product. That means, above the fold: the product image, the name, the price, the variant picker, and the button. That's it. The brand story, the "you may also like" carousel, the reviews widget and the shipping banner all still exist — they just move below the point where the visitor has already decided.

Cross-sell is not free. Every additional option above the fold is a decision you've asked someone to make instead of buying. In November, when they arrived from an ad, on a phone, with fourteen other tabs open, it's an expensive one.

I've written about this at length in [Your Shopify Product Page Is Doing Three Jobs](https://rohankewal.dev/blog/shopify-product-page-above-the-fold). If you only fix one thing on this list, fix that one.

## 2. Everything lives in one collection

A surprising number of stores have exactly one real collection, called something like "All Products" or "Shop", holding ninety items in the order they were added.

That's not a catalogue. That's a warehouse with the doors open.

Collections are a merchandising decision, not a settings screen. The questions to answer are:

- **What are people actually shopping for?** Not your internal product categories — the words a customer would use. "Gifts under $50" is a collection. "SKU Group B" is not.
- **What's the gift collection?** In Q4, a meaningful share of your traffic is buying for someone else, and they don't know your range. Build them a landing spot.
- **Do your filters work on a phone?** Size, colour, price. If a customer has to scroll ninety products to find theirs, they don't. They leave, and you never see it in the data as anything other than a bounce.

This is an afternoon's work and it's the highest-leverage afternoon on the list, because collection pages are where paid traffic lands.

## 3. Every app is loading on every page

Reviews, upsells, a popup, a currency switcher, a chat widget, a wishlist, a size guide, a back-in-stock notifier. Each one adds its own JavaScript, its own stylesheet, sometimes its own font — and by default, most of them load on every template whether or not the feature appears on that page.

The reviews app needs to be on the product page. It does not need to be on the cart. The popup does not need to be on checkout. The size guide does not need to be on your blog.

Two things to do:

- **Open your app list and delete the dead ones.** Not disable — delete. Nearly every store I look at is carrying at least two apps nobody has opened the dashboard for in a year, still loading their assets on every page view.
- **Restrict the survivors to the templates that use them.** Most modern apps support this through app embeds or theme app extensions. The ones that don't are worth reconsidering.

The test isn't your desktop on office wifi. It's a phone on hotel wifi in November, which is the actual condition under which your Black Friday traffic will decide whether to wait.

## 4. Two of your three email flows don't exist

Almost every store I open has abandoned cart switched on. Very few have the other two.

- **Abandoned cart** — you have this. Check the timing and check it renders on mobile. That's usually enough.
- **Browse abandonment** — someone looked at a product three times and didn't add it to cart. In Q4 that's a person deciding on a gift, and a single email at the right moment converts a meaningful share of them. Most stores don't have this at all.
- **Post-purchase** — the highest-intent audience you will ever have is someone who just bought from you eleven seconds ago. In December they are actively looking for more gifts. If your post-purchase sequence is a shipping confirmation and nothing else, you're leaving the easiest revenue of the quarter on the table.

None of these are hard. They're an afternoon each in whatever email tool you already pay for. They're skipped because they're invisible — nobody looks at their store and thinks "the flows look wrong."

## 5. Nobody has looked at the reporting

This is the one that gets left until November, and it's the one that decides the other four.

You are, in about twelve weeks, going to discount something. Do you know which collection actually carries margin? Which products get bought together? Which channel brought you last year's best customers, as opposed to the most customers?

If the answer to any of those is a shrug, then your Black Friday strategy is "20% off sitewide and hope", which is how stores end up having their busiest ever week and their worst ever margin.

Shopify's built-in analytics will answer more of this than people expect. Where they won't, a purpose-built reporting dashboard is not a big project — it's a few days of connecting the data you already have into something you can actually read on the morning of the 27th.

Do this first, in September. It tells you which products deserve the work in items 1 and 2, and it stops you discounting the thing that was already selling.

## What twelve weeks actually looks like

- **September:** reporting first, then collections and filters. These are the decisions everything else depends on.
- **October:** product page cleanup, app audit, speed pass. Then let it run on normal traffic for a few weeks so problems surface while they're cheap.
- **Early November:** email flows, final mobile testing, and then stop. Nothing structural after the second week.
- **Late November:** watch. Don't build.

## The part nobody says out loud

The reason stores aren't ready in November isn't that the owners didn't care. It's that all five of these are invisible. None of them look like anything. You can't screenshot a properly restricted app load or a working browse-abandonment flow, and none of them scratch the itch that a new theme scratches.

Meanwhile the thing that *does* look like progress — a redesign — is the one thing you genuinely should not be doing twelve weeks out.

The stores that do well in Q4 mostly did boring things in September.

---

**I do pre-Q4 passes on Shopify stores** — product and collection setup, app and speed audits, subscriptions, email flows, and reporting dashboards that tell you something before you set the discount rather than after.

I have capacity in September, which is the month this work belongs in. [Get in touch](https://rohankewal.dev/contact) and tell me your store URL — I'll tell you which of the five is costing you the most.
