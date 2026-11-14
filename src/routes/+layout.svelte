<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { personSchema } from '$lib/seo';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
	<link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	{@html `<script type="application/ld+json">${JSON.stringify(personSchema)}<\/script>`}
</svelte:head>

<!-- Keyboard and screen-reader users land here first, so the nav is skippable. -->
<a
	href="#main"
	class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:rounded-field focus:bg-ink focus:px-4 focus:py-2 focus:text-[14px] focus:font-medium focus:text-bg"
>
	Skip to content
</a>

<!-- Column layout so `main` absorbs the leftover height and the footer stays on
     the bottom edge of short pages. Nav is fixed, hence the top padding. -->
<div class="flex min-h-screen flex-col overflow-x-hidden">
	<Nav />

	<main id="main" class="flex-1 pt-15">
		{@render children()}
	</main>

	<Footer />
</div>
