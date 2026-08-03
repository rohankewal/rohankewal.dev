<script lang="ts">
	import { skillGroups, processSteps } from '$lib/data';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ProcessStepCard from '$lib/components/ProcessStepCard.svelte';
	import Section from '$lib/components/Section.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import SkillCard from '$lib/components/SkillCard.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Freelance WordPress, Shopify & Full-Stack Development Services | Rohan Kewalramani"
	description="Freelance WordPress development, Shopify and Squarespace builds, full-stack Svelte/Node apps, AI-assisted workflows, design, and SEO — services offered by Rohan Kewalramani."
	path="/expertise"
/>

<Section class="animate-fade-up pt-5 pb-[100px]">
	<PageHeader
		eyebrow="Expertise"
		title="What I"
		accent="do"
		lead="From platform builds to full‑stack apps — end to end, with the design and SEO chops to make it perform."
	/>

	<div class="mb-[70px] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
		{#each skillGroups as group (group.title)}
			<SkillCard {group} />
		{/each}
	</div>

	<SectionHeading title="How a project" accent="runs" size="sm" class="mb-8" />

	<div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
		{#each processSteps as step (step.n)}
			<ProcessStepCard {step} />
		{/each}
	</div>

	<div class="mt-[70px]">
		<CtaBand heading="Need one of these, built right?" />
	</div>
</Section>
