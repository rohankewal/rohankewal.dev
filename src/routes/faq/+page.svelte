<script lang="ts">
	import { faqs } from '$lib/data';
	import { email } from '$lib/site';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import FaqItem from '$lib/components/FaqItem.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Section from '$lib/components/Section.svelte';
	import Seo from '$lib/components/Seo.svelte';

	// FAQPage markup. Worth having so the answers are machine readable, but note
	// that Google restricted FAQ rich results to a handful of government and
	// health sites in 2023, so this is not going to show up as a rich snippet.
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.q,
			acceptedAnswer: { '@type': 'Answer', text: faq.a }
		}))
	};
</script>

<Seo
	title="FAQ | Working with a Freelance Web Developer | Rohan Kewalramani"
	description="Answers to the common questions about working with me: what a project costs, how long it takes, how payment works, who owns the site, hosting, and what happens after launch."
	path="/faq"
/>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
</svelte:head>

<Section class="animate-fade-up pt-[clamp(48px,7vh,80px)] pb-[clamp(64px,8vw,96px)]">
	<PageHeader
		eyebrow="FAQ"
		title="Questions worth asking first"
		lead="The things people usually want to know before they email me. If yours is not here, ask it directly and I will answer honestly."
		class="mb-12"
	/>

	<div class="max-w-[820px] border-t border-line">
		{#each faqs as faq (faq.q)}
			<FaqItem {faq} />
		{/each}
	</div>

	<p class="mt-10 max-w-[620px] text-[15px] leading-[1.7] text-muted">
		Still unsure about something? Email me at
		<a href="mailto:{email}" class="link-underline font-medium text-ink hover:text-accent">
			{email}
		</a>
		and I will give you a straight answer, even if it is that I am not the right person for the job.
	</p>
</Section>

<Section class="pb-[clamp(72px,9vw,120px)]">
	<CtaBand heading="Ready to talk about your project?" buttonLabel="Start a project" />
</Section>
