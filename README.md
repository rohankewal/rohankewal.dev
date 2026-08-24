# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.16.2 create --template minimal --types ts --install npm .
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Contact form

Every page is prerendered, so the one piece of server code is `worker/index.ts`:
it handles `POST /api/contact` and passes everything else through to the static
files in `build/`. Submissions are mailed on with the `send_email` binding
configured in `wrangler.jsonc`.

Two things have to be true on the Cloudflare account or sending fails. Both live
under **Compute > Email Service > Email Routing** in the dashboard, and both are
free:

1. `rohankewal.dev` is onboarded to Email Routing, which adds the MX, SPF and
   DKIM records and is what makes `form@rohankewal.dev` a valid sender.
2. `rkewalramani4@gmail.com` is verified under **Destination Addresses**.

The `destination_address` on the binding pins every send to that one verified
address. That is not only a safety measure against the endpoint being used to
mail anyone else: sending to a verified destination in your own account is free
on every plan, while sending to arbitrary recipients is what would need Workers
Paid. Widening the binding therefore has a bill attached.

Skip the **Email Sending** section of the dashboard. That is the paid product
for sending to arbitrary recipients and this form does not use it.

No routing rule is needed either. Rules are for receiving mail on the domain,
and this Worker only sends.

### Spam handling

Three layers, in the order the Worker checks them:

1. A honeypot field. Hidden from people, filled in by naive bots, and answered
   with a fake success so the bot has nothing to tune against.
2. A rate limit of five attempts per IP per ten minutes. An isolate only sees a
   slice of the traffic, so treat this as a speed bump, not a guarantee.
3. Cloudflare Turnstile, if it is configured.

Turnstile ships switched off and needs both halves of a key pair to come on:

1. Create a widget under **Turnstile** in the dashboard, in Managed mode, with
   `rohankewal.dev` as the hostname. Managed is free and unlimited.
2. Put the site key in `turnstileSiteKey` in `src/lib/site.ts`. Site keys are
   public, so it belongs in the repo.
3. `npx wrangler secret put TURNSTILE_SECRET` and paste the secret key.

Set only one half and the form breaks quietly: an empty site key means no widget
and therefore no token, while a set `TURNSTILE_SECRET` means the Worker rejects
every submission that arrives without one.

For local testing, Cloudflare's dummy keys work on any host. Put the secret in
`.dev.vars` (gitignored) and use the matching site key:

```
sitekey 1x00000000000000000000AA   always passes
sitekey 2x00000000000000000000AB   always fails
secret  1x0000000000000000000000000000000AA   always passes
```

Turnstile needs JavaScript, so switching it on ends the no-JS fallback. The
email address next to the form covers that case.

`vite dev` does not run the Worker, so `/api/contact` is a 404 under `npm run
dev` and the form reports `(404)`. Nothing in the Cloudflare dashboard changes
that: destination addresses are inboxes, not origins, and none of this depends
on where the form is served from. Testing it needs a real build instead:

```sh
npm run dev:worker       # Worker runs, email is stubbed to .wrangler/tmp/email/
npm run dev:worker:live  # runs on Cloudflare with the real binding, actually sends
```

Without JavaScript the form does a normal browser POST to the same endpoint and
gets a plain HTML confirmation back, so it still works.
