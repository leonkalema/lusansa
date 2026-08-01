<!-- Renders inline images inside a guide's Portable Text body -->
<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import { urlFor } from '$lib/sanity/image';

	const { portableText }: { portableText: CustomBlockComponentProps } = $props();
	const value = $derived(portableText.value as { asset?: unknown; alt?: string });
</script>

{#if value?.asset}
	<figure class="my-8">
		<img
			src={urlFor(value).width(1200).url()}
			alt={value.alt ?? ''}
			loading="lazy"
			class="w-full rounded border border-brown-700/20"
		/>
		{#if value.alt}
			<figcaption class="mt-2 text-[14px] text-ink-soft">{value.alt}</figcaption>
		{/if}
	</figure>
{/if}
