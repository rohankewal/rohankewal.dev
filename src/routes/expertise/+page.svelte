<script lang="ts">
	import { skillGroups, processSteps } from '$lib/data';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Freelance WordPress, Shopify & Full-Stack Development Services | Rohan Kewalramani"
	description="Freelance WordPress development, Shopify and Squarespace builds, full-stack Svelte/Node apps, AI-assisted workflows, design, and SEO — services offered by Rohan Kewalramani."
	path="/expertise"
/>

<section class="animate-fade-up mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] pt-5 pb-[100px]">
	<span class="text-sm tracking-[0.08em] text-accent uppercase">Expertise</span>
	<h1 class="mt-2 mb-5 font-serif text-[clamp(40px,6vw,72px)] font-normal text-ink">
		What I <span class="text-accent italic">do</span>
	</h1>
	<p class="mb-14 max-w-[640px] text-lg leading-[1.6] text-muted">
		From platform builds to full‑stack apps — end to end, with the design and SEO chops to make
		it perform.
	</p>

	<div class="mb-[70px] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
		{#each skillGroups as group (group.title)}
			<div
				class="rounded-[20px] border border-white/10 bg-card p-8 transition-[transform,border-color] duration-250 hover:-translate-y-1 hover:border-accent/35"
			>
				<div
					class="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/12 font-serif text-[22px] text-accent italic"
				>
					{group.mark}
				</div>
				<h3 class="mb-2.5 font-serif text-2xl font-normal text-ink">{group.title}</h3>
				<p class="mb-4.5 text-[15px] leading-[1.6] text-muted">{group.desc}</p>
				<div class="flex flex-wrap gap-2">
					{#each group.tags as tag (tag)}
						<span
							class="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-[13px] text-[#c9c9c4]"
						>
							{tag}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<h2 class="mb-8 font-serif text-[clamp(26px,3.5vw,36px)] font-normal text-ink">
		How a project <span class="text-accent italic">runs</span>
	</h2>
	<div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
		{#each processSteps as step (step.n)}
			<div>
				<div class="mb-2.5 font-serif text-[44px] text-[#2a2a26] italic">{step.n}</div>
				<h3 class="mb-2 text-[17px] font-semibold text-ink">{step.title}</h3>
				<p class="text-sm leading-[1.6] text-muted">{step.desc}</p>
			</div>
		{/each}
	</div>

	<div class="mt-[70px]">
		<CtaBand heading="Need one of these, built right?" />
	</div>
</section>
