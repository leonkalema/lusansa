<script lang="ts">
	const { url, title }: { url?: string; title?: string } = $props();

	function youtubeId(u?: string): string | null {
		if (!u) return null;
		const m = u.match(
			/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,20})/
		);
		return m ? m[1] : null;
	}

	const id = $derived(youtubeId(url));
</script>

{#if id}
	<figure>
		<div class="aspect-video overflow-hidden rounded-lg border border-brown-700/15">
			<iframe
				src={`https://www.youtube-nocookie.com/embed/${id}`}
				title={title ?? 'Project video'}
				loading="lazy"
				allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				class="h-full w-full"
			></iframe>
		</div>
		{#if title}
			<figcaption class="mt-2 text-[14px] text-ink-soft">{title}</figcaption>
		{/if}
	</figure>
{:else if url}
	<p class="text-[15px]">
		<a href={url} rel="noopener" class="btn-quiet">Watch the video</a>
	</p>
{/if}
