<script lang="ts">
	import { formatDate, type PostSummary } from '$lib/blog';

	// One card in the blog index grid. Text only by design — the grid is meant to
	// be scanned, and posts get their own headline treatment on the post page.
	let { post }: { post: PostSummary } = $props();
</script>

<a
	href="/blog/{post.slug}"
	class="group flex h-full flex-col rounded-[20px] border border-white/10 bg-card p-8 transition-colors duration-250 hover:border-accent/55"
>
	<div class="flex flex-wrap items-center gap-3 text-[13px] tracking-[0.06em] uppercase">
		<time datetime={post.date} class="text-accent">{formatDate(post.date)}</time>
		<span class="text-faint">{post.readingMinutes} min read</span>
	</div>

	<h2
		class="mt-2.5 font-serif text-[28px] leading-[1.2] font-normal text-ink transition-colors duration-250 group-hover:text-accent"
	>
		{post.title}
	</h2>

	{#if post.description}
		<p class="mt-3 text-[16px] leading-[1.6] text-muted">{post.description}</p>
	{/if}

	{#if post.tags.length}
		<div class="mt-4 flex flex-wrap gap-2">
			{#each post.tags as tag (tag)}
				<span
					class="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[12px] tracking-wide text-dim"
				>
					{tag}
				</span>
			{/each}
		</div>
	{/if}

	<span class="mt-auto pt-6 text-sm text-ink">Read the post →</span>
</a>
