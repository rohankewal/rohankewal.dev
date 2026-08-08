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

<!-- The case-study grid gets the wide container so three cards have room to
     breathe; everything below it stays on the site's standard width. -->
<Section width="wide" class="animate-fade-up pt-5">
	<PageHeader
		eyebrow="Freelance work"
		title="Selected"
		accent="projects"
		lead="A mix of client platforms and full‑stack builds — from freelance WordPress work to a SaaS product I built solo end to end."
	/>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project (project.slug)}
			<ProjectCaseStudy {project} />
		{/each}
	</div>
</Section>

<Section class="animate-fade-up pt-[70px] pb-[100px]">
	<SectionHeading
		eyebrow="Open source"
		title="Things I build for"
		accent="myself"
		lead="Smaller tools I've written to scratch my own itch, and released for anyone else who has it too."
		size="md"
		class="mb-8 max-w-[640px]"
	/>

	<div class="grid gap-6 sm:grid-cols-2">
		{#each openSourceProjects as project (project.slug)}
			<OpenSourceCard {project} />
		{/each}
	</div>

	<div class="mt-[70px]">
		<CtaBand heading="Want to be the next one?" buttonLabel="Start a project →" />
	</div>
</Section>
