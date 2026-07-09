<script lang="ts">
	let {
		heading,
		buttonLabel = "Let's talk →",
		large = false
	}: { heading: string; buttonLabel?: string; large?: boolean } = $props();
</script>

<div
	class="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-accent/18 bg-gradient-to-br from-[#17140b] to-[#0f0f0d] {large
		? 'p-[clamp(40px,6vw,72px)]'
		: 'p-[clamp(36px,6vw,64px)]'}"
>
	<h2
		class="max-w-[560px] font-serif font-normal text-ink italic {large
			? 'text-[clamp(30px,4.5vw,50px)]'
			: 'text-[clamp(26px,4vw,42px)]'}"
	>
		{heading}
	</h2>
	<a
		href="/contact"
		class="rounded-full bg-accent px-8 py-4 text-[15px] font-semibold whitespace-nowrap text-bg! transition-transform duration-200 hover:scale-105"
	>
		{buttonLabel}
	</a>
</div>
