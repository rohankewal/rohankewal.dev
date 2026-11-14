<script lang="ts">
	import { openSourceProjects, projects } from '$lib/data';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import OpenSourceCard from '$lib/components/OpenSourceCard.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ProjectCaseStudy from '$lib/components/ProjectCaseStudy.svelte';
	import Section from '$lib/components/Section.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Freelance WordPress & Full-Stack Projects | Rohan Kewalramani"
	description="Case studies of freelance WordPress development and full-stack Svelte/Node builds, including GP Automate (medtech WordPress site), Premier Medical Centre (NHS GP practice site) and Runway (a SaaS product built solo)."
	path="/projects"
/>

<Section class="animate-fade-up pt-[clamp(48px,7vh,80px)] pb-[clamp(64px,8vw,96px)]">
	<PageHeader
		eyebrow="Freelance work"
		title="Selected projects"
		lead="A mix of client platforms and full-stack builds — from freelance WordPress work to a SaaS product I built solo end to end."
		class="mb-12"
	/>

	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project (project.slug)}
			<ProjectCaseStudy {project} />
		{/each}
	</div>
</Section>

<section class="band">
	<Section element="div" class="py-[clamp(64px,8vw,104px)]">
		<SectionHeading
			eyebrow="Open source"
			title="Things I build for myself"
			lead="Smaller tools I've written to scratch my own itch, and released for anyone else who has it too."
			class="mb-11"
		/>

		<div class="grid gap-4 sm:grid-cols-2">
			{#each openSourceProjects as project (project.slug)}
				<OpenSourceCard {project} />
			{/each}
		</div>
	</Section>
</section>

<Section class="py-[clamp(64px,8vw,104px)]">
	<CtaBand heading="Want to be the next one?" buttonLabel="Start a project" />
</Section>
