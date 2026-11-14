<script lang="ts">
	import type { ProcessStep } from '$lib/data';

	// Not a card. The four steps are a sequence, so they read better as columns
	// under a shared rule than as four boxes.
	let { step }: { step: ProcessStep } = $props();
</script>

<div class="border-t border-line pt-5">
	<span class="label">{step.n}</span>
	<h3 class="mt-3 text-[15.5px] font-medium tracking-heading text-ink">{step.title}</h3>
	<p class="mt-2 text-[14px] leading-[1.6] text-muted">{step.desc}</p>
</div>
