<script lang="ts">
	import type { Plot } from '$lib/sanity/queries';
	import { urlFor } from '$lib/sanity/image';
	import { ugxCompact, coords } from '$lib/format';
	import StatusBadge from './StatusBadge.svelte';

	const { plot }: { plot: Plot } = $props();
</script>

<a
	href={`/plots/${plot.slug.current}`}
	class="card-lift group block overflow-hidden rounded border border-brown-700/20 bg-white hover:border-green-700"
>
	<div class="overflow-hidden">
	{#if plot.photos?.[0]}
		<img
			src={urlFor(plot.photos[0]).width(720).height(440).url()}
			alt={plot.photos[0].caption ?? plot.title ?? ''}
			width="720"
			height="440"
			loading="lazy"
			class="aspect-[18/11] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
		/>
	{:else}
		<!-- No photo yet — show the surveyed facts instead of a stock image (§5) -->
		<div class="flex aspect-[18/11] w-full flex-col justify-between bg-paper-dark p-4">
			<svg viewBox="0 0 80 44" class="h-10 w-auto self-end" fill="none" aria-hidden="true">
				<path d="M6,34 l30,-18 14,20 -30,18 z" stroke="#0a3d20" stroke-opacity="0.7" stroke-width="1.5" fill="#0a3d20" fill-opacity="0.08" transform="translate(8,-6)" />
				<rect x="12" y="26" width="3" height="3" fill="#0a3d20" />
				<rect x="42" y="8" width="3" height="3" fill="#0a3d20" />
				<rect x="56" y="28" width="3" height="3" fill="#0a3d20" />
				<rect x="26" y="46" width="3" height="3" fill="#0a3d20" transform="translate(0,-8)" />
			</svg>
			{#if plot.coordinates}
				<span class="tabular flex items-center gap-1 text-[13px] text-brown-700">
					<svg viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
						<path d="M8 14s4.5-4 4.5-7.5a4.5 4.5 0 1 0-9 0C3.5 10 8 14 8 14Z" />
						<circle cx="8" cy="6.5" r="1.6" />
					</svg>
					{coords(plot.coordinates)}
				</span>
			{/if}
		</div>
	{/if}
	</div>

	<div class="p-5">
		<div class="mb-2"><StatusBadge status={plot.status} /></div>
		<h3 class="text-xl text-ink transition-colors group-hover:text-green-800">{plot.title}</h3>
		<p class="mt-1 text-[15px] text-ink-soft">
			{plot.sizeText} · {plot.district}{plot.nearestLandmark ? ` · ${plot.nearestLandmark}` : ''}
		</p>
		{#if plot.coordinates && plot.photos?.[0]}
			<p class="tabular mt-2 flex items-center gap-1.5 text-[13px] text-brown-700">
				<svg viewBox="0 0 16 16" class="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
					<path d="M8 14s4.5-4 4.5-7.5a4.5 4.5 0 1 0-9 0C3.5 10 8 14 8 14Z" />
					<circle cx="8" cy="6.5" r="1.6" />
				</svg>
				{coords(plot.coordinates)}
			</p>
		{/if}
		<p class="tabular mt-3 flex items-center gap-1.5 text-lg font-semibold text-ink">
			{ugxCompact(plot.priceUGX)}
			<span
				aria-hidden="true"
				class="translate-x-[-4px] text-green-700 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
				>&rarr;</span
			>
		</p>
	</div>
</a>
