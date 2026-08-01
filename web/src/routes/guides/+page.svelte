<script lang="ts">
	import { useQuery } from '@sanity/sveltekit';
	import type { Guide } from '$lib/sanity/queries';
	import type { PageProps } from './$types';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import { generalMessage } from '$lib/whatsapp';
	import { longDate } from '$lib/format';

	const { data }: PageProps = $props();
	const query = $derived(useQuery<Guide[]>(data));
	const guides = $derived($query.data);
</script>

<svelte:head>
	<title>Land buying guides | Lusansa Property Services</title>
	<meta
		name="description"
		content="Plain guides on buying land safely in Uganda: titles, verification, boundaries and paying from abroad."
	/>
</svelte:head>

<main class="mx-auto max-w-6xl px-5 py-12 lg:py-16">
	<p class="eyebrow mb-3">Guides</p>
	<h1 class="text-4xl">Learn before you buy</h1>
	<p class="mt-3 max-w-[52ch] text-ink-soft">
		Plain answers to the questions land buyers ask us. Read them before you spend a shilling.
	</p>

	{#if guides?.length}
		<!-- Editorial index: dated rows, not cards -->
		<div class="mt-10">
			{#each guides as guide (guide._id)}
				<a
					href={`/guides/${guide.slug.current}`}
					class="group grid gap-x-10 gap-y-2 border-t border-brown-700/15 py-8 md:grid-cols-[150px_1fr_auto] md:items-baseline"
				>
					<p class="tabular text-[13px] font-semibold tracking-[0.06em] text-gold-700 uppercase">
						{longDate(guide.publishedAt)}
					</p>
					<div>
						<h2 class="text-2xl transition-colors group-hover:text-green-800 md:text-3xl">
							{guide.title}
						</h2>
						{#if guide.excerpt}
							<p class="mt-2 max-w-[58ch] text-[15px] leading-relaxed text-ink-soft">
								{guide.excerpt}
							</p>
						{/if}
					</div>
					<span
						aria-hidden="true"
						class="hidden text-green-800 transition-transform duration-300 ease-out group-hover:translate-x-1 md:inline"
						>&rarr;</span
					>
				</a>
			{/each}
		</div>
	{:else}
		<div class="mt-10 rounded border border-brown-700/20 bg-white p-8">
			<p class="text-ink-soft">
				Guides are being written. Ask us your question directly on WhatsApp.
			</p>
			<div class="mt-4">
				<WhatsAppCta message={generalMessage} label="Ask us on WhatsApp" />
			</div>
		</div>
	{/if}
</main>
