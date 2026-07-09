<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import MouseGlow from '$lib/components/MouseGlow.svelte';
	import BackgroundDecor from '$lib/components/BackgroundDecor.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { personSchema } from '$lib/seo';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
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
