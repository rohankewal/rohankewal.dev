<script lang="ts">
	import { formatDate, type PostSummary } from '$lib/blog';

	// One row in the blog index. Text only by design — the list is meant to be
	// skimmed, and posts get their own headline treatment on the post page.
	let { post }: { post: PostSummary } = $props();
</script>

<a
	href="/blog/{post.slug}"
	class="group block border-b border-white/8 py-8 transition-colors duration-250 first:pt-0 hover:border-accent/40"
>
	<div class="flex flex-wrap items-center gap-3 text-[13px] tracking-[0.06em] uppercase">
		<time datetime={post.date} class="text-accent">{formatDate(post.date)}</time>
		<span class="text-faint">{post.readingMinutes} min read</span>
	</div>

	<h2
		class="mt-2.5 font-serif text-[clamp(26px,3.4vw,36px)] leading-[1.2] font-normal text-ink transition-colors duration-250 group-hover:text-accent"
	>
		{post.title}
	</h2>

	{#if post.description}
		<p class="mt-3 max-w-[680px] text-[17px] leading-[1.6] text-muted">{post.description}</p>
	{/if}

	{#if post.tags.length}
		<div class="mt-4 flex flex-wrap gap-2">
			{#each post.tags as tag (tag)}
				<span
					class="rounded-full border border-white/10 bg-card px-3 py-1 text-[12px] tracking-wide text-dim"
				>
					{tag}
				</span>
			{/each}
		</div>
	{/if}
</a>
