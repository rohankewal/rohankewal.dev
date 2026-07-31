<script lang="ts">
	import { openSourceProjects, projects } from '$lib/data';
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
						<div class="flex flex-wrap items-center gap-3">
							{#if project.slug === 'runway'}
								<a
									href="https://www.producthunt.com/products/runway-6?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-runway-15"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1198244&theme=light&t=1784235413669"
										alt="Runway - Know exactly how long your freelance income will last | Product Hunt"
										width="250"
										height="54"
										class="h-[38px] w-auto"
									/>
								</a>
							{/if}
							<a
								href={project.url}
								target="_blank"
								rel="noreferrer"
								class="rounded-full bg-accent px-[22px] py-3 text-sm font-semibold text-bg!"
							>
								Visit site ↗
							</a>
						</div>
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
		<span class="text-sm tracking-[0.08em] text-accent uppercase">Open source</span>
		<h2 class="mt-2 mb-4 font-serif text-[clamp(28px,4vw,40px)] font-normal text-ink">
			Things I build for <span class="text-accent italic">myself</span>
		</h2>
		<p class="mb-8 max-w-[640px] text-[17px] leading-[1.6] text-muted">
			Smaller tools I've written to scratch my own itch, and released for anyone else who has it too.
		</p>

		<div class="grid gap-6 sm:grid-cols-2">
			{#each openSourceProjects as project (project.slug)}
				<a
					href={project.url}
					target="_blank"
					rel="noreferrer"
					class="group flex flex-col overflow-hidden rounded-[18px] border border-white/10 bg-card transition-colors hover:border-white/25"
				>
					<div class="flex items-center border-b border-white/8 bg-bg px-4 py-5">
						<img
							src={project.image}
							alt={`${project.name} terminal tab bar showing Nerd Font icons`}
							class="w-full rounded-md"
						/>
					</div>
					<div class="flex flex-1 flex-col gap-3 p-6">
						<div class="flex flex-wrap items-center justify-between gap-3">
							<h3 class="font-mono text-[15px] break-all text-ink">{project.name}</h3>
							<div class="flex shrink-0 items-center gap-1.5 text-[13px] text-faint">
								<span class="size-2 rounded-full bg-accent"></span>
								{project.language}
							</div>
						</div>
						<p class="flex-1 text-[15px] leading-[1.65] text-[#c9c9c4]">{project.summary}</p>
						<span class="text-[15px] text-accent">View on GitHub ↗</span>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<div class="mt-[70px]">
		<CtaBand heading="Want to be the next one?" buttonLabel="Start a project →" />
	</div>
</section>
