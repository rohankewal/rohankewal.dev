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

<Section class="animate-fade-up pt-[clamp(48px,7vh,80px)] pb-[clamp(64px,8vw,96px)]">
	<PageHeader
		eyebrow="Expertise"
		title="What I do"
		lead="From platform builds to full-stack apps — end to end, with the design and SEO chops to make it perform."
		class="mb-12"
	/>

	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each skillGroups as group (group.title)}
			<SkillCard {group} />
		{/each}
	</div>
</Section>

<section class="band">
	<Section element="div" class="py-[clamp(64px,8vw,104px)]">
		<SectionHeading
			eyebrow="Process"
			title="How a project runs"
			lead="The same four steps on every build, whether it's a landing page or a product."
			class="mb-11"
		/>

		<div class="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
			{#each processSteps as step (step.n)}
				<ProcessStepCard {step} />
			{/each}
		</div>
	</Section>
</section>

<Section class="py-[clamp(64px,8vw,104px)]">
	<CtaBand heading="Need one of these, built right?" />
</Section>
