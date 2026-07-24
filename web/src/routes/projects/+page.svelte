<script lang="ts">
	import { useQuery } from '@sanity/sveltekit';
	import type { Project } from '$lib/sanity/queries';
	import type { PageProps } from './$types';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import { generalMessage } from '$lib/whatsapp';

	const { data }: PageProps = $props();
	const query = $derived(useQuery<Project[]>(data));
	const projects = $derived($query.data);
</script>

<svelte:head>
	<title>Our projects | Lusansa Property Services</title>
	<meta
		name="description"
		content="Planned land developments in Wakiso and Mukono. Each project lists its location, GPS coordinates, photos and available plots."
	/>
</svelte:head>

<main class="mx-auto max-w-6xl px-5 py-12 lg:py-16">
	<p class="eyebrow mb-3">Projects</p>
	<h1 class="text-4xl">Our projects</h1>
	<p class="mt-3 max-w-[52ch] text-ink-soft">
		Each project is a planned development with surveyed plots. Open one to see its location, map,
		photos and the plots on offer.
	</p>

	{#if projects?.length}
		<div class="mt-10 grid gap-6 sm:grid-cols-2">
			{#each projects as project (project._id)}
				<ProjectCard {project} />
			{/each}
		</div>
	{:else}
		<div class="mt-10 rounded-lg border border-brown-700/15 bg-white p-8">
			<p class="text-ink-soft">No projects are published right now. New ones are being prepared.</p>
			<div class="mt-4">
				<WhatsAppCta message={generalMessage} label="Ask what is coming" />
			</div>
		</div>
	{/if}
</main>
