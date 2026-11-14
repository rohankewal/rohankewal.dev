<script lang="ts">
	import ContactCard from '$lib/components/ContactCard.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
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

<Section class="animate-fade-up pt-[clamp(48px,7vh,80px)] pb-[clamp(72px,9vw,112px)]">
	<PageHeader
		eyebrow="Get in touch"
		title="Let's build something"
		lead="Tell me what you are building, roughly when you need it, and a budget range if you have one. That is enough for me to come back with something useful rather than more questions."
		size="lg"
		class="mb-14"
	/>

	<div class="grid gap-x-16 gap-y-14 lg:grid-cols-[minmax(0,1fr)_300px]">
		<div class="max-w-[620px]">
			<ContactForm />
		</div>

		<div>
			<span class="label">Rather just email?</span>

			<a
				href="mailto:{email}"
				class="link-underline mt-3 block text-[clamp(16px,1.8vw,19px)] font-medium break-all text-ink hover:text-accent"
			>
				{email}
			</a>

			<span class="label mt-10 block">Elsewhere</span>

			<div class="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
				{#each socialLinks as link (link.url)}
					<ContactCard label={link.label} value={link.handle} href={link.url} />
				{/each}
			</div>
		</div>
	</div>
</Section>
