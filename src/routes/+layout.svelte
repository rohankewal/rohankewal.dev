<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import MouseGlow from '$lib/components/MouseGlow.svelte';
	import BackgroundDecor from '$lib/components/BackgroundDecor.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Rohan Kewalramani — Freelance Web Developer</title>
	<meta
		name="description"
		content="Freelance web developer building fast, playful, custom sites and full-stack apps."
	/>
	<link rel="icon" href={favicon} />
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
