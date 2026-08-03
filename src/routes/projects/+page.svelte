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
	description="Case studies of freelance WordPress development and full-stack Svelte/Node builds, including GP Automate (medtech WordPress site) and Runway (a SaaS product built solo)."
	path="/projects"
/>

<Section class="animate-fade-up pt-5 pb-[100px]">
	<PageHeader
		eyebrow="Freelance work"
		title="Selected"
		accent="projects"
		lead="A mix of client platforms and full‑stack builds — from freelance WordPress work to a SaaS product I built solo end to end."
	/>

	<div class="flex flex-col gap-7">
		{#each projects as project (project.slug)}
			<ProjectCaseStudy {project} />
		{/each}
	</div>

	<div class="mt-[70px]">
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
	</div>

	<div class="mt-[70px]">
		<CtaBand heading="Want to be the next one?" buttonLabel="Start a project →" />
	</div>
</Section>
