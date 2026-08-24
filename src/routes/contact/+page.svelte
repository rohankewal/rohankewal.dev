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

<Section class="animate-fade-up pt-10 pb-[110px]">
	<PageHeader
		eyebrow="Get in touch"
		title="Let's build"
		accent="something."
		lead="Tell me what you are building, roughly when you need it, and a budget range if you have one. That is enough for me to come back with something useful rather than more questions."
		size="lg"
	/>

	<div class="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_320px]">
		<div class="max-w-[620px]">
			<ContactForm />
		</div>

		<div class="lg:pt-2">
			<span class="text-[13px] tracking-[0.06em] text-faint uppercase">Rather just email?</span>

			<a
				href="mailto:{email}"
				class="mt-3 block border-b-2 border-accent pb-1.5 font-serif text-[clamp(22px,2.6vw,28px)] break-all text-ink! italic"
			>
				{email}
			</a>

			<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
				{#each socialLinks as link (link.url)}
					<ContactCard label={link.label} value={link.handle} href={link.url} />
				{/each}
			</div>
		</div>
	</div>
</Section>
