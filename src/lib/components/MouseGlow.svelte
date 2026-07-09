<script lang="ts">
	let el: HTMLDivElement;

	function onMove(e: MouseEvent) {
		if (!el) return;
		el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
		el.style.opacity = '1';
	}

	function onLeave() {
		if (el) el.style.opacity = '0';
	}
</script>

<svelte:window onmousemove={onMove} onmouseleave={onLeave} />

<div
	bind:this={el}
	class="pointer-events-none fixed top-0 left-0 z-[2] -ml-[110px] -mt-[110px] h-[220px] w-[220px] rounded-full opacity-0 transition-opacity duration-300"
	style="background: radial-gradient(circle, rgba(255,210,63,0.16) 0%, rgba(255,210,63,0) 70%);"
></div>
