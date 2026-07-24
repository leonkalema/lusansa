<script lang="ts">
	import { useQuery } from '@sanity/sveltekit';
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/sanity/image';
	import type { Project, ProjectStatus } from '$lib/sanity/queries';
	import type { PageProps } from './$types';
	import PlotCard from '$lib/components/PlotCard.svelte';
	import VideoEmbed from '$lib/components/VideoEmbed.svelte';
	import SurveyMap from '$lib/components/SurveyMap.svelte';
	import type { MapPlot } from '$lib/components/SurveyMap.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import { projectMessage } from '$lib/whatsapp';
	import { coords } from '$lib/format';

	const { data }: PageProps = $props();
	const query = $derived(useQuery<Project>(data));
	const project = $derived($query.data);

	const statusLabels: Record<ProjectStatus, string> = {
		selling: 'Selling now',
		'coming-soon': 'Coming soon',
		'sold-out': 'Sold out'
	};
	const statusStyles: Record<ProjectStatus, string> = {
		selling: 'text-green-800 bg-green-700/10',
		'coming-soon': 'text-status-reserved bg-status-reserved/10',
		'sold-out': 'text-status-sold bg-status-sold/10'
	};

	const photos = $derived(
		[...(project?.coverPhoto?.asset ? [project.coverPhoto] : []), ...(project?.gallery ?? [])]
	);

	const mapPlots: MapPlot[] = $derived(
		(project?.plots ?? [])
			.filter((p) => p.coordinates)
			.map((p) => ({
				slug: p.slug.current,
				title: p.title,
				status: p.status,
				lat: p.coordinates!.lat,
				lng: p.coordinates!.lng,
				sizeSqm: p.sizeSqm,
				priceUGX: p.priceUGX,
				boundary: p.boundary
			}))
	);
	const hasSurveyedBoundaries = $derived(mapPlots.some((p) => p.boundary && p.boundary.length >= 3));
</script>

<svelte:head>
	<title>{project?.title ?? 'Project'}, {project?.district ?? ''} | Our projects | Lusansa</title>
	{#if project?.summary}
		<meta name="description" content={project.summary} />
	{/if}
</svelte:head>

{#if project}
	<main class="mx-auto max-w-6xl px-5 py-10 lg:py-14">
		<nav class="mb-6 text-[14px] text-ink-soft">
			<a href="/projects" class="hover:text-green-800 hover:underline">Projects</a>
			<span class="mx-1.5">/</span>
			<span>{project.title}</span>
		</nav>

		<div class="flex flex-wrap items-center gap-3">
			{#if project.status}
				<span
					class={`inline-block rounded px-2 py-0.5 text-[13px] font-semibold tracking-[0.06em] uppercase ${statusStyles[project.status]}`}
				>
					{statusLabels[project.status]}
				</span>
			{/if}
			{#if project.totalPlots}
				<span class="tabular text-[15px] text-ink-soft">
					{project.availablePlots} of {project.totalPlots}
					{project.totalPlots === 1 ? 'plot' : 'plots'} available
				</span>
			{/if}
		</div>
		<h1 class="mt-3 text-3xl md:text-4xl">{project.title}</h1>
		<p class="mt-2 text-ink-soft">
			{project.district}{project.locationText ? ` · ${project.locationText}` : ''}
		</p>
		{#if project.coordinates}
			<p class="mt-2">
				<a
					href={`https://maps.google.com/?q=${project.coordinates.lat},${project.coordinates.lng}`}
					rel="noopener"
					class="tabular inline-flex items-center gap-1 font-medium text-green-800 hover:underline"
				>
					<svg viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
						<path d="M8 14s4.5-4 4.5-7.5a4.5 4.5 0 1 0-9 0C3.5 10 8 14 8 14Z" />
						<circle cx="8" cy="6.5" r="1.6" />
					</svg>
					{coords(project.coordinates)} · open the map
				</a>
			</p>
		{/if}

		{#if project.summary}
			<p class="mt-5 max-w-[58ch] text-lg leading-relaxed text-ink-soft">{project.summary}</p>
		{/if}

		{#if mapPlots.length || project.coordinates}
			<div class="mt-8">
				<SurveyMap
					plots={mapPlots.length
						? mapPlots
						: [{ lat: project.coordinates!.lat, lng: project.coordinates!.lng }]}
					label={`Survey map of ${project.title}`}
					note={hasSurveyedBoundaries
						? 'Tap a plot to open it.'
						: 'Plot outlines are approximate until the survey plan is added. Tap a plot to open it.'}
				/>
			</div>
		{/if}

		<!-- Photos and videos share one grid so lone items never leave a ragged
		     half-empty row; an odd count promotes the first item to full width -->
		{#if photos.length || project.videos?.length}
			{@const mediaCount = photos.length + (project.videos?.length ?? 0)}
			{@const hasLead = mediaCount % 2 === 1}
			<section class="mt-10">
				<p class="eyebrow mb-4">From the site</p>
				<div class="grid gap-6 sm:grid-cols-2">
					{#each photos as photo, i (i)}
						{@const isLead = hasLead && i === 0}
						<figure class={isLead ? 'sm:col-span-2' : ''}>
							<img
								src={urlFor(photo).width(isLead ? 1400 : 900).url()}
								alt={photo.caption ?? ''}
								loading={i === 0 ? 'eager' : 'lazy'}
								class={`w-full rounded border border-brown-700/20 ${isLead ? '' : 'aspect-[16/9] object-cover'}`}
							/>
							{#if photo.caption}
								<figcaption class="mt-2 text-[14px] text-ink-soft">
									{photo.caption}{photo.date ? `, photographed ${photo.date}` : ''}
								</figcaption>
							{/if}
						</figure>
					{/each}
					{#each project.videos ?? [] as video, i (video.url)}
						<div class={hasLead && photos.length === 0 && i === 0 ? 'sm:col-span-2' : ''}>
							<VideoEmbed url={video.url} title={video.title} />
						</div>
					{/each}
				</div>
			</section>
		{/if}

		<div class="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
			{#if project.description}
				<div class="prose prose-neutral max-w-[65ch] text-ink">
					<PortableText value={project.description} />
				</div>
			{:else}
				<div></div>
			{/if}

			{#if project.features?.length}
				<aside>
					<p class="eyebrow mb-3">In place</p>
					<ul class="space-y-2 text-[15px]">
						{#each project.features as feature (feature)}
							<li class="flex items-start gap-2.5">
								<span class="mt-[7px] h-1.5 w-1.5 shrink-0 bg-green-700"></span>
								{feature}
							</li>
						{/each}
					</ul>
				</aside>
			{/if}
		</div>

		<section class="mt-14 border-t border-brown-700/10 pt-10">
			<div class="mb-7 flex flex-wrap items-baseline justify-between gap-3">
				<h2 class="text-3xl">Plots in this project</h2>
				<WhatsAppCta
					message={projectMessage(project.title, project.district)}
					label="Ask about this project"
					quiet
				/>
			</div>
			{#if project.plots?.length}
				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each project.plots as plot (plot._id)}
						<PlotCard {plot} />
					{/each}
				</div>
			{:else}
				<p class="text-ink-soft">
					Plots for this project are not listed yet. Ask us on WhatsApp for the layout and prices.
				</p>
			{/if}
		</section>
	</main>
{:else}
	<main class="mx-auto max-w-6xl px-5 py-14">
		<p class="text-ink-soft">Project not found.</p>
	</main>
{/if}
