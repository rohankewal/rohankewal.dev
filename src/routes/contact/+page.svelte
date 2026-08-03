<script lang="ts">
	import ContactCard from '$lib/components/ContactCard.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Section from '$lib/components/Section.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { email, socialLinks } from '$lib/site';
</script>

<Seo
	title="Contact | Hire a Freelance WordPress & Full-Stack Developer"
	description="Get in touch with Rohan Kewalramani about freelance WordPress development, Shopify or Squarespace builds, or a full-stack Svelte/Node project."
	path="/contact"
/>

<Section class="animate-fade-up flex min-h-[70vh] flex-col justify-center pt-10 pb-[110px]">
	<PageHeader
		eyebrow="Get in touch"
		title="Let's build"
		accent="something."
		lead="Freelance projects, one-off builds, or ongoing dev support — my inbox is open."
		size="lg"
	/>

	<a
		href="mailto:{email}"
		class="mb-14 inline-block w-fit border-b-2 border-accent pb-1.5 font-serif text-[clamp(28px,4.5vw,42px)] text-ink! italic"
	>
		{email}
	</a>

	<div class="grid max-w-[760px] grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
		{#each socialLinks as link (link.url)}
			<ContactCard label={link.label} value={link.handle} href={link.url} />
		{/each}
	</div>
</Section>
