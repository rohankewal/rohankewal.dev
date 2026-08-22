<script lang="ts">
  // Top-of-page heading: eyebrow, an <h1> whose last words are accented, and a lead paragraph.
  // `size` picks the display scale — 'md' for inner pages, 'lg' for the contact page.
  let {
    eyebrow,
    title,
    accent,
    lead,
    size = "md",
  }: {
    eyebrow: string;
    title: string;
    accent: string;
    lead?: string;
    size?: "md" | "lg";
  } = $props();

  const titleSizes = {
    md: "mt-2 mb-5 text-[clamp(40px,6vw,72px)]",
    lg: "mt-2 mb-6 text-[clamp(40px,7vw,88px)] leading-[1.02]",
  };

  const leadSizes = {
    md: "mb-14 max-w-[640px]",
    lg: "mb-11 max-w-[560px]",
  };
</script>

<span class="text-sm tracking-[0.08em] text-accent uppercase">{eyebrow}</span>

<h1 class="font-serif font-normal text-ink {titleSizes[size]}">
  {title}
  <span class="text-accent italic">{accent}</span>
</h1>

{#if lead}
  <p class="text-lg leading-[1.6] text-muted {leadSizes[size]}">{lead}</p>
{/if}
