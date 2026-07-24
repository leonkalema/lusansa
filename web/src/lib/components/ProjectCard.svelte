<script lang="ts">
	import type { Project, ProjectStatus } from '$lib/sanity/queries';
	import { urlFor } from '$lib/sanity/image';
	import { coords } from '$lib/format';

	const { project }: { project: Project } = $props();

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
</script>

<a
	href={`/projects/${project.slug.current}`}
	class="group block overflow-hidden rounded-lg border border-brown-700/15 bg-white transition-colors hover:border-green-700/45"
>
	{#if project.coverPhoto?.asset}
		<img
			src={urlFor(project.coverPhoto).width(880).height(480).url()}
			alt={project.coverPhoto.caption ?? project.title ?? ''}
			width="880"
			height="480"
			loading="lazy"
			class="aspect-[11/6] w-full object-cover"
		/>
	{:else}
		<div class="flex aspect-[11/6] w-full flex-col justify-between bg-paper-dark p-4">
			<svg viewBox="0 0 120 50" class="h-12 w-auto self-end" fill="none" aria-hidden="true">
				<path d="M-4,42 C30,34 50,28 74,14 S104,2 126,-2" stroke="#503018" stroke-opacity="0.35" stroke-width="7" />
				<path d="M18,34 l22,-13 10,15 -22,13 z" stroke="#221e1a" stroke-opacity="0.4" stroke-width="1" />
				<path d="M40,21 l22,-13 10,15 -22,13 z" stroke="#107800" stroke-opacity="0.8" stroke-width="1.3" fill="#107800" fill-opacity="0.08" />
				<path d="M62,8 l22,-13 10,15 -22,13 z" stroke="#221e1a" stroke-opacity="0.4" stroke-width="1" />
			</svg>
			{#if project.coordinates}
				<span class="tabular flex items-center gap-1 text-[13px] text-brown-700">
					<svg viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
						<path d="M8 14s4.5-4 4.5-7.5a4.5 4.5 0 1 0-9 0C3.5 10 8 14 8 14Z" />
						<circle cx="8" cy="6.5" r="1.6" />
					</svg>
					{coords(project.coordinates)}
				</span>
			{/if}
		</div>
	{/if}

	<div class="p-5">
		{#if project.status}
			<span
				class={`inline-block rounded px-2 py-0.5 text-[13px] font-semibold tracking-[0.06em] uppercase ${statusStyles[project.status]}`}
			>
				{statusLabels[project.status]}
			</span>
		{/if}
		<h3 class="mt-2 text-xl text-ink group-hover:text-green-800">{project.title}</h3>
		<p class="mt-1 text-[15px] text-ink-soft">
			{project.district}{project.locationText ? ` · ${project.locationText}` : ''}
		</p>
		{#if project.totalPlots}
			<p class="tabular mt-3 text-[15px] font-medium text-ink">
				{project.availablePlots} of {project.totalPlots}
				{project.totalPlots === 1 ? 'plot' : 'plots'} available
			</p>
		{/if}
	</div>
</a>
