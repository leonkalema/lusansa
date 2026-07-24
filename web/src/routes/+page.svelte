<script lang="ts">
	import { useQuery } from '@sanity/sveltekit';
	import type { Plot, Project } from '$lib/sanity/queries';
	import type { PageProps } from './$types';
	import SurveyPlan from '$lib/components/SurveyPlan.svelte';
	import PlotCard from '$lib/components/PlotCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import { verificationMessage } from '$lib/whatsapp';
	import { site } from '$lib/content/site';
	import { services } from '$lib/content/services';
	import logo from '$lib/assets/logo.jpeg';

	const { data }: PageProps = $props();
	const plotsQuery = $derived(useQuery<Plot[]>(data.plots));
	const plots = $derived($plotsQuery.data);
	const projectsQuery = $derived(useQuery<Project[]>(data.projects));
	const projects = $derived($projectsQuery.data);

	const steps = [
		{
			title: 'Tell us the plot',
			text: 'Send us the plot you want on WhatsApp. It can be one of ours or land you found elsewhere.'
		},
		{
			title: 'We walk the land',
			text: 'Our team visits the site. We check the boundaries and photograph what is there.'
		},
		{
			title: 'You get the evidence',
			text: 'GPS coordinates, satellite view and a dated photo report, sent straight to your phone.'
		},
		{
			title: 'You decide',
			text: 'The report is yours. Buy with confidence or walk away. It does its job either way.'
		}
	];

</script>

<svelte:head>
	<title>Lusansa Property Services | Well-planned plots in Uganda</title>
	<meta
		name="description"
		content="Surveyed, well-planned plots in Wakiso and Mukono with published GPS coordinates. Land verification and monitoring for buyers in Uganda and abroad."
	/>
</svelte:head>

<main>
	<!-- 1 · Hero -->
	<section class="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
		<div>
			<p class="eyebrow mb-4">{site.areasServed.join(' · ')} · Uganda</p>
			<h1 class="text-4xl leading-[1.1] md:text-[3.4rem]">
				Land, planned before it&rsquo;s sold.
			</h1>
			<p class="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
				We survey and plan our plots before we sell them. Access roads, drainage and marked
				boundaries come first. Every plot is published with GPS coordinates. Check the location
				yourself, from Kampala or from abroad.
			</p>
			<div class="mt-8 flex flex-wrap items-center gap-5">
				<a href="/plots" class="btn-primary">See available plots</a>
				<a href="#verification" class="btn-quiet">How verification works &darr;</a>
			</div>
		</div>
		<div class="overflow-hidden rounded-lg border border-brown-700/15">
			<SurveyPlan />
		</div>
	</section>

	<!-- 2 · Our projects -->
	{#if projects?.length}
		<section class="mx-auto max-w-6xl px-5 py-14">
			<div class="mb-7 flex items-baseline justify-between">
				<h2 class="text-3xl">Our projects</h2>
				<a href="/projects" class="btn-quiet">All projects &rarr;</a>
			</div>
			<div class="grid gap-6 sm:grid-cols-2">
				{#each projects as project (project._id)}
					<ProjectCard {project} />
				{/each}
			</div>
		</section>
	{/if}

	<!-- 3 · Available plots -->
	<section class="mx-auto max-w-6xl px-5 py-14">
		<div class="mb-7 flex items-baseline justify-between">
			<h2 class="text-3xl">Available plots</h2>
			<a href="/plots" class="btn-quiet">All plots &rarr;</a>
		</div>
		{#if plots?.length}
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each plots as plot (plot._id)}
					<PlotCard {plot} />
				{/each}
			</div>
		{:else}
			<p class="text-ink-soft">New plots are being prepared. Ask us on WhatsApp what is coming.</p>
		{/if}
	</section>

	<!-- 3 · Verification -->
	<section id="verification" class="bg-paper-dark">
		<div class="mx-auto max-w-6xl px-5 py-16 lg:py-20">
			<p class="eyebrow mb-3">Verification</p>
			<h2 class="max-w-[24ch] text-3xl md:text-4xl">See the land before you pay for it.</h2>
			<p class="mt-4 max-w-[52ch] text-ink-soft">
				The biggest risk in buying land in Uganda is buying blind. We remove that risk, for our
				plots and for anyone else&rsquo;s.
			</p>

			<ol class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{#each steps as step, i (step.title)}
					<li>
						<p class="tabular font-display text-3xl text-gold-600">{i + 1}</p>
						<p class="mt-2 font-semibold text-brown-800">{step.title}</p>
						<p class="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{step.text}</p>
					</li>
				{/each}
			</ol>

			<div class="mt-10 flex flex-wrap items-center gap-5">
				<WhatsAppCta message={verificationMessage} label="Request a verification" />
				<p class="text-[15px] text-ink-soft">Buying from abroad? This service exists for you.</p>
			</div>
		</div>
	</section>

	<!-- 4 · The weaver story -->
	<section class="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[280px_1fr] lg:py-20">
		<div class="rounded-lg border border-brown-700/15 bg-white p-6">
			<img src={logo} alt="Lusansa Property Services logo, a weaver bird building its nest" width="1080" height="1080" class="h-auto w-full" />
		</div>
		<div>
			<h2 class="text-3xl md:text-4xl">Built to be inspected.</h2>
			<div class="mt-4 max-w-[58ch] space-y-4 leading-relaxed text-ink-soft">
				<p>
					Our logo is a weaver bird for a reason. The weaver builds its nest knot by knot. Then
					the nest is inspected, pulled at and tested before it is accepted. Weak work gets
					rejected, torn down and rebuilt.
				</p>
				<p>
					That is how we treat land. We plan it, mark it and document it to survive inspection.
					Yours, your family&rsquo;s, your surveyor&rsquo;s.
				</p>
			</div>
			<p class="mt-5 font-display text-lg italic text-gold-700">{site.tagline}</p>
		</div>
	</section>

	<!-- Services -->
	<section class="border-t border-brown-700/10">
		<div class="mx-auto max-w-6xl px-5 py-16">
			<div class="flex items-baseline justify-between">
				<div>
					<p class="eyebrow mb-3">Services</p>
					<h2 class="text-3xl">What we do</h2>
				</div>
				<a href="/services" class="btn-quiet">All services &rarr;</a>
			</div>
			<dl class="mt-9 grid gap-x-14 gap-y-7 sm:grid-cols-2">
				{#each services as service (service.slug)}
					<div>
						<dt>
							<a href={`/services#${service.slug}`} class="font-medium text-brown-800 underline-offset-4 hover:text-green-800 hover:underline">
								{service.name}
							</a>
						</dt>
						<dd class="mt-1 text-[15px] leading-relaxed text-ink-soft">{service.short}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</section>
</main>
