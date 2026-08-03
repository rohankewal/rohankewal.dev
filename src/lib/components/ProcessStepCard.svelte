<script lang="ts">
	import type { ProcessStep } from '$lib/data';

	let { step }: { step: ProcessStep } = $props();
</script>

<div>
	<div class="mb-2.5 font-serif text-[44px] text-[#2a2a26] italic">{step.n}</div>
	<h3 class="mb-2 text-[17px] font-semibold text-ink">{step.title}</h3>
	<p class="text-sm leading-[1.6] text-muted">{step.desc}</p>
</div>
