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
