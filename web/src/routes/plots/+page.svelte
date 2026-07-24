<script lang="ts">
	import { useQuery } from '@sanity/sveltekit';
	import type { Plot } from '$lib/sanity/queries';
	import type { PageProps } from './$types';
	import PlotCard from '$lib/components/PlotCard.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import { generalMessage } from '$lib/whatsapp';

	const { data }: PageProps = $props();
	const query = $derived(useQuery<Plot[]>(data));
	const plots = $derived($query.data);
</script>

<svelte:head>
	<title>Plots for sale | Lusansa Property Services</title>
	<meta
		name="description"
		content="Surveyed plots for sale in Wakiso and Mukono. Published prices, sizes and GPS coordinates for every plot."
	/>
</svelte:head>

<main class="mx-auto max-w-6xl px-5 py-12 lg:py-16">
	<p class="eyebrow mb-3">Plots</p>
	<h1 class="text-4xl">Plots for sale</h1>
	<p class="mt-3 max-w-[52ch] text-ink-soft">
		Every plot is listed with its price, size and GPS coordinates. Check the location yourself
		before you talk to us.
	</p>

	{#if plots?.length}
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each plots as plot (plot._id)}
				<PlotCard {plot} />
			{/each}
		</div>
	{:else}
		<div class="mt-10 rounded border border-brown-700/20 bg-white p-8">
			<p class="text-ink-soft">
				No plots are published right now. New developments are being prepared.
			</p>
			<div class="mt-4">
				<WhatsAppCta message={generalMessage} label="Ask what is coming" />
			</div>
		</div>
	{/if}
</main>
