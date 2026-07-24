<script lang="ts">
	import { useQuery } from '@sanity/sveltekit';
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/sanity/image';
	import type { Plot } from '$lib/sanity/queries';
	import type { PageProps } from './$types';
	import StatusBadge from '$lib/components/StatusBadge.svelte';
	import SurveyMap from '$lib/components/SurveyMap.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import { plotMessage } from '$lib/whatsapp';
	import { ugx, ugxCompact, coords } from '$lib/format';

	const { data }: PageProps = $props();
	const query = $derived(useQuery<Plot>(data));
	const plot = $derived($query.data);

	const titleTypeLabel: Record<string, string> = {
		mailo: 'Mailo',
		freehold: 'Freehold',
		leasehold: 'Leasehold'
	};
</script>

<svelte:head>
	<title>{plot?.title ?? 'Plot'}, {plot?.district ?? ''} | Plots for sale | Lusansa</title>
	{#if plot}
		<meta
			name="description"
			content={`${plot.sizeText} plot in ${plot.district} at ${ugxCompact(plot.priceUGX)}. ${plot.nearestLandmark ?? ''} GPS coordinates published.`}
		/>
	{/if}
</svelte:head>

{#if plot}
	<main class="mx-auto max-w-6xl px-5 py-10 pb-28 lg:py-14 lg:pb-14">
		<nav class="mb-6 text-[14px] text-ink-soft">
			<a href="/plots" class="hover:text-green-800 hover:underline">Plots</a>
			<span class="mx-1.5">/</span>
			<span>{plot.title}</span>
		</nav>

		<div class="grid gap-10 lg:grid-cols-[1fr_360px]">
			<!-- Photos + description -->
			<div>
				<h1 class="text-3xl md:text-4xl">{plot.title}</h1>
				<p class="mt-2 text-ink-soft">
					{#if plot.projectSlug}
						<a
							href={`/projects/${plot.projectSlug}`}
							class="text-green-800 underline-offset-4 hover:underline">{plot.development}</a
						>
					{:else}
						{plot.development}
					{/if}
					· {plot.district}{plot.nearestLandmark ? ` · ${plot.nearestLandmark}` : ''}
				</p>

				{#if plot.photos?.length}
					<div class="mt-7 space-y-7">
						{#each plot.photos as photo, i (i)}
							<figure>
								<img
									src={urlFor(photo).width(1200).url()}
									alt={photo.caption ?? ''}
									loading={i === 0 ? 'eager' : 'lazy'}
									class="w-full rounded border border-brown-700/20"
								/>
								{#if photo.caption}
									<figcaption class="mt-2 text-[14px] text-ink-soft">
										{photo.caption}{photo.date ? `, photographed ${photo.date}` : ''}
									</figcaption>
								{/if}
							</figure>
						{/each}
					</div>
				{/if}

				{#if plot.coordinates}
					<div class="mt-7">
						<SurveyMap
							plots={[
								{
									slug: plot.slug.current,
									title: plot.title,
									status: plot.status,
									lat: plot.coordinates.lat,
									lng: plot.coordinates.lng,
									sizeSqm: plot.sizeSqm,
									boundary: plot.boundary
								}
							]}
							currentSlug={plot.slug.current}
							label={`Survey map of ${plot.title}`}
							note={plot.boundary && plot.boundary.length >= 3
								? undefined
								: 'The outline is approximate until the survey plan is added. Confirm boundaries on site.'}
						/>
					</div>
				{/if}

				{#if plot.description}
					<div class="prose prose-neutral mt-8 max-w-[65ch] text-ink">
						<PortableText value={plot.description} />
					</div>
				{/if}
			</div>

			<!-- Facts card -->
			<aside>
				<div class="rounded border border-brown-700/20 bg-white p-6 lg:sticky lg:top-6">
					<StatusBadge status={plot.status} />
					<p class="tabular mt-3 text-3xl font-semibold text-ink">{ugx(plot.priceUGX)}</p>
					{#if plot.installments?.months}
						<p class="mt-1 text-[15px] text-ink-soft">
							Payable over {plot.installments.months} months{plot.installments.depositUGX
								? `, deposit ${ugxCompact(plot.installments.depositUGX)}`
								: ''}
						</p>
					{/if}

					<dl class="mt-6 space-y-3 border-t border-brown-700/10 pt-5 text-[15px]">
						<div class="flex justify-between gap-4">
							<dt class="text-ink-soft">Size</dt>
							<dd class="font-medium">{plot.sizeText}</dd>
						</div>
						{#if plot.titleType}
							<div class="flex justify-between gap-4">
								<dt class="text-ink-soft">Title</dt>
								<dd class="font-medium">{titleTypeLabel[plot.titleType] ?? plot.titleType}</dd>
							</div>
						{/if}
						<div class="flex justify-between gap-4">
							<dt class="text-ink-soft">District</dt>
							<dd class="font-medium">{plot.district}</dd>
						</div>
						{#if plot.coordinates}
							<div class="flex justify-between gap-4">
								<dt class="text-ink-soft">Location</dt>
								<dd>
									<a
										href={`https://maps.google.com/?q=${plot.coordinates.lat},${plot.coordinates.lng}`}
										rel="noopener"
										class="tabular flex items-center gap-1 font-medium text-green-800 hover:underline"
									>
										<svg viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
											<path d="M8 14s4.5-4 4.5-7.5a4.5 4.5 0 1 0-9 0C3.5 10 8 14 8 14Z" />
											<circle cx="8" cy="6.5" r="1.6" />
										</svg>
										{coords(plot.coordinates)}
									</a>
								</dd>
							</div>
						{/if}
					</dl>

					{#if plot.features?.length}
						<ul class="mt-5 space-y-2 border-t border-brown-700/10 pt-5 text-[15px]">
							{#each plot.features as feature (feature)}
								<li class="flex items-start gap-2.5">
									<span class="mt-[7px] h-1.5 w-1.5 shrink-0 bg-green-700"></span>
									{feature}
								</li>
							{/each}
						</ul>
					{/if}

					<div class="mt-6">
						<WhatsAppCta
							message={plotMessage(plot)}
							label="Ask about this plot on WhatsApp"
							class="w-full justify-center"
						/>
					</div>
				</div>
			</aside>
		</div>
	</main>

	<!-- Sticky mobile conversion bar (§6) -->
	<div
		class="fixed inset-x-0 bottom-0 z-10 flex items-center justify-between gap-3 border-t border-brown-700/15 bg-white px-5 py-3 lg:hidden"
	>
		<p class="tabular text-lg font-semibold">{ugxCompact(plot.priceUGX)}</p>
		<WhatsAppCta message={plotMessage(plot)} label="WhatsApp" class="!px-4 !py-2 text-[15px]" />
	</div>
{:else}
	<main class="mx-auto max-w-6xl px-5 py-14">
		<p class="text-ink-soft">Plot not found.</p>
	</main>
{/if}
