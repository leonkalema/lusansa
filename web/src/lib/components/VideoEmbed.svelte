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
		<div class="aspect-video overflow-hidden rounded border border-brown-700/20">
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
	<!-- Direct video files (or any non-YouTube host) play natively in the same
	     16:9 tile so the media grid keeps its shape -->
	<figure>
		<div class="aspect-video overflow-hidden rounded border border-brown-700/20 bg-ink">
			<!-- svelte-ignore a11y_media_has_caption -->
			<video src={url} controls preload="metadata" class="h-full w-full"></video>
		</div>
		{#if title}
			<figcaption class="mt-2 text-[14px] text-ink-soft">{title}</figcaption>
		{/if}
	</figure>
{/if}
