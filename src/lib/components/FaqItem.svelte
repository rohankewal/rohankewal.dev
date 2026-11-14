<script lang="ts">
	import type { Faq } from '$lib/data';

	// Built on native <details> rather than a JS accordion: it opens before
	// hydration, keyboard and screen reader behaviour comes for free, and the
	// answers stay in the DOM for search engines whether or not they are open.
	let { faq }: { faq: Faq } = $props();
</script>

<details class="group border-b border-line">
	<summary
		class="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden"
	>
		<h3
			class="text-[16px] font-medium tracking-heading text-ink transition-colors duration-150 group-hover:text-accent"
		>
			{faq.q}
		</h3>

		<span
			class="flex size-7 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-transform duration-200 group-open:rotate-180"
		>
			<svg
				class="size-[14px]"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<path d="M6 9.5 12 15.5 18 9.5" />
			</svg>
		</span>
	</summary>

	<p class="max-w-[680px] pr-12 pb-6 text-[15.5px] leading-[1.7] text-muted">
		{faq.a}
	</p>
</details>
