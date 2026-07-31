<script lang="ts">
	import '../app.css';
	import MouseGlow from '$lib/components/MouseGlow.svelte';
	import BackgroundDecor from '$lib/components/BackgroundDecor.svelte';
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

<MouseGlow />

<div class="relative min-h-screen overflow-x-hidden bg-bg font-sans">
	<BackgroundDecor />

	<Nav />

	<main class="relative z-1 pt-24">
		{@render children()}
	</main>

	<Footer />
</div>
