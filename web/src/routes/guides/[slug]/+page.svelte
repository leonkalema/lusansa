<script lang="ts">
	import { useQuery } from '@sanity/sveltekit';
	import { PortableText } from '@portabletext/svelte';
	import type { Guide } from '$lib/sanity/queries';
	import type { PageProps } from './$types';
	import GuideBodyImage from '$lib/components/GuideBodyImage.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import { guideMessage } from '$lib/whatsapp';
	import { longDate } from '$lib/format';
	import { urlFor } from '$lib/sanity/image';

	const { data }: PageProps = $props();
	const query = $derived(useQuery<Guide>(data));
	const guide = $derived($query.data);
</script>

<svelte:head>
	<title>{guide?.title ?? 'Guide'} | Guides | Lusansa</title>
	{#if guide?.excerpt}
		<meta name="description" content={guide.excerpt} />
	{/if}
</svelte:head>

{#if guide}
	<main class="mx-auto max-w-6xl px-5 py-10 pb-24 lg:py-14">
		<nav class="mb-8 text-[14px] text-ink-soft">
			<a href="/guides" class="hover:text-green-800 hover:underline">Guides</a>
			<span class="mx-1.5">/</span>
			<span>{guide.title}</span>
		</nav>

		<article class="mx-auto max-w-[72ch]">
			{#if guide.publishedAt}
				<p class="eyebrow tabular mb-4">{longDate(guide.publishedAt)}</p>
			{/if}
			<h1 class="text-4xl leading-[1.12] md:text-[3rem]">{guide.title}</h1>
			{#if guide.excerpt}
				<p class="mt-5 text-lg leading-relaxed text-ink-soft">{guide.excerpt}</p>
			{/if}

			{#if guide.mainImage?.asset}
				<img
					src={urlFor(guide.mainImage).width(1400).url()}
					alt={guide.mainImage.alt ?? ''}
					class="mt-8 w-full rounded border border-brown-700/20"
				/>
			{/if}

			{#if guide.body}
				<div class="prose prose-neutral mt-8 max-w-none text-ink prose-a:text-green-800">
					<PortableText value={guide.body} components={{ types: { image: GuideBodyImage } }} />
				</div>
			{/if}
		</article>
	</main>

	<!-- Floating WhatsApp — WEBSITE_GUIDE §16: one floating button, guides only -->
	<div class="fixed right-5 bottom-5 z-20">
		<WhatsAppCta message={guideMessage(guide.title)} label="Ask us" class="!rounded-full !px-5" />
	</div>
{:else}
	<main class="mx-auto max-w-6xl px-5 py-14">
		<p class="text-ink-soft">Guide not found.</p>
	</main>
{/if}
