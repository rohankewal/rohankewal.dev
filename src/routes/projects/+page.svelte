<script lang="ts">
	import { projects } from '$lib/data';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Freelance WordPress & Full-Stack Projects | Rohan Kewalramani"
	description="Case studies of freelance WordPress development and full-stack Svelte/Node builds, including GP Automate (medtech WordPress site) and Runway (a SaaS product built solo)."
	path="/projects"
/>

<section class="animate-fade-up mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] pt-5 pb-[100px]">
	<span class="text-sm tracking-[0.08em] text-accent uppercase">Freelance work</span>
	<h1 class="mt-2 mb-5 font-serif text-[clamp(40px,6vw,72px)] font-normal text-ink">
		Selected <span class="text-accent italic">projects</span>
	</h1>
	<p class="mb-14 max-w-[640px] text-lg leading-[1.6] text-muted">
		A mix of client platforms and full‑stack builds — from freelance WordPress work to a SaaS
		product I built solo end to end.
	</p>

	<div class="flex flex-col gap-7">
		{#each projects as project (project.slug)}
			<div class="overflow-hidden rounded-[22px] border border-white/10 bg-card">
				<div class="relative flex h-[340px] items-center justify-center overflow-hidden {project.image ? '' : 'stripe-bg-lg'}">
					{#if project.image}
						<img
							src={project.image}
							alt={`${project.name} website screenshot`}
							class="h-full w-full object-cover object-top"
						/>
					{:else}
						<span
							class="rounded-full border border-white/10 bg-bg px-4 py-2 font-mono text-sm tracking-wide text-faint"
						>
							{project.placeholderLg}
						</span>
					{/if}
				</div>
				<div class="flex flex-col gap-6 p-[clamp(28px,5vw,52px)]">
					<div class="flex flex-wrap items-start justify-between gap-4">
						<div>
							<h2 class="mb-2 font-serif text-4xl font-normal text-ink">{project.name}</h2>
							<span class="text-[15px] text-muted">{project.location}</span>
						</div>
						<a
							href={project.url}
							target="_blank"
							rel="noreferrer"
							class="rounded-full bg-accent px-[22px] py-3 text-sm font-semibold text-bg!"
						>
							Visit site ↗
						</a>
					</div>
					<p class="max-w-[760px] text-[17px] leading-[1.7] text-[#c9c9c4]">
						{project.description}
					</p>
					<div class="flex flex-wrap gap-10 border-t border-white/8 pt-2">
						<div>
							<div class="mb-1.5 text-xs tracking-[0.08em] text-faint uppercase">Role</div>
							<div class="text-[15px] text-ink">{project.role}</div>
						</div>
						<div>
							<div class="mb-1.5 text-xs tracking-[0.08em] text-faint uppercase">Stack</div>
							<div class="text-[15px] text-ink">{project.stack}</div>
						</div>
						<div>
							<div class="mb-1.5 text-xs tracking-[0.08em] text-faint uppercase">Industry</div>
							<div class="text-[15px] text-ink">{project.industry}</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-[70px]">
		<CtaBand heading="Want to be the next one?" buttonLabel="Start a project →" />
	</div>
</section>
