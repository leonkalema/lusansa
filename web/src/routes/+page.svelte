<script lang="ts">
	import { useQuery } from '@sanity/sveltekit';
	import type { Plot, Project, Service } from '$lib/sanity/queries';
	import type { PageProps } from './$types';
	import SurveyPlan from '$lib/components/SurveyPlan.svelte';
	import PlotCard from '$lib/components/PlotCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import { verificationMessage } from '$lib/whatsapp';
	import { site } from '$lib/content/site';
	import { reveal } from '$lib/actions/reveal';
	import logo from '$lib/assets/logo.jpeg';

	const { data }: PageProps = $props();
	const plotsQuery = $derived(useQuery<Plot[]>(data.plots));
	const plots = $derived($plotsQuery.data);
	const projectsQuery = $derived(useQuery<Project[]>(data.projects));
	const projects = $derived($projectsQuery.data);
	const servicesQuery = $derived(useQuery<Service[]>(data.services));
	const services = $derived($servicesQuery.data ?? []);

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
	<!-- 1 · Hero — intentionally asymmetric: text column wider than the plan -->
	<section
		class="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-20"
	>
		<div use:reveal>
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
				<a href="/plots" class="btn-primary">See available plots <span class="arrow">&rarr;</span></a>
				<a href="#verification" class="btn-quiet">How verification works <span class="arrow">&darr;</span></a>
			</div>
		</div>
		<div class="overflow-hidden rounded border border-brown-700/20 lg:mt-8" use:reveal={{ delay: 120 }}>
			<SurveyPlan />
		</div>
	</section>

	<!-- 2 · Our projects -->
	{#if projects?.length}
		<section class="mx-auto max-w-6xl px-5 py-14">
			<div class="mb-7 flex items-baseline justify-between">
				<h2 class="text-3xl">Our projects</h2>
				<a href="/projects" class="btn-quiet">All projects <span class="arrow">&rarr;</span></a>
			</div>
			<div class="grid gap-6 sm:grid-cols-2" use:reveal>
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
			<a href="/plots" class="btn-quiet">All plots <span class="arrow">&rarr;</span></a>
		</div>
		{#if plots?.length}
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" use:reveal>
				{#each plots as plot (plot._id)}
					<PlotCard {plot} />
				{/each}
			</div>
		{:else}
			<p class="text-ink-soft">New plots are being prepared. Ask us on WhatsApp what is coming.</p>
		{/if}
	</section>

	<!-- 3 · Verification — staggered timeline, each step a concierge move -->
	<section id="verification" class="texture-topo bg-paper-dark">
		<div class="mx-auto max-w-6xl px-5 py-16 lg:py-24">
			<p class="eyebrow mb-3">Verification</p>
			<h2 class="max-w-[24ch] text-3xl md:text-[2.75rem] md:leading-[1.12]">
				See the land before you pay for it.
			</h2>
			<p class="mt-4 max-w-[52ch] text-ink-soft">
				The biggest risk in buying land in Uganda is buying blind. We remove that risk, for our
				plots and for anyone else&rsquo;s.
			</p>

			<ol class="mt-12 md:grid md:grid-cols-2 md:gap-x-24" use:reveal>
				{#each steps as step, i (step.title)}
					<li
						class={`relative border-l border-brown-700/20 pb-10 pl-7 last:pb-0 md:border-l-0 md:pb-14 md:pl-0 ${
							i % 2 === 1 ? 'md:col-start-2 md:mt-24' : 'md:col-start-1 md:mt-0'
						}`}
					>
						<!-- boundary peg marker, like on a survey plan -->
						<span
							aria-hidden="true"
							class="absolute top-2 left-[-4px] h-[7px] w-[7px] bg-green-700 md:static md:mb-4 md:block"
						></span>
						<p class="tabular font-display text-5xl font-light text-gold-600 md:text-6xl">
							0{i + 1}
						</p>
						<p class="mt-3 text-[13px] font-semibold tracking-[0.08em] text-brown-800 uppercase">
							{step.title}
						</p>
						<p class="mt-2 max-w-[44ch] text-[15px] leading-relaxed text-ink-soft">{step.text}</p>
					</li>
				{/each}
			</ol>

			<!-- The invitation -->
			<div
				class="texture-grid mt-14 rounded border border-gold-500/30 bg-green-700 px-6 py-10 md:px-12"
				use:reveal
			>
				<div class="flex flex-wrap items-end justify-between gap-8">
					<div>
						<p class="text-[13px] font-semibold tracking-[0.08em] text-gold-500 uppercase">
							An open invitation
						</p>
						<p class="mt-3 max-w-[24ch] font-display text-3xl text-paper md:text-4xl">
							Ask us to walk any plot in Uganda.
						</p>
						<p class="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-paper/80">
							Buying from abroad? This service exists for you.
						</p>
					</div>
					<WhatsAppCta
						message={verificationMessage}
						label="Request a verification"
						class="!bg-paper !text-green-800 hover:!bg-white"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- 4 · The weaver manifesto — full-width, the proverb treated as art -->
	<section class="texture-topo border-t border-brown-700/10 bg-paper">
		<div
			class="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_320px] lg:py-28"
		>
			<div use:reveal>
				<p class="eyebrow mb-4">The weaver bird</p>
				<h2 class="text-4xl md:text-5xl">Built to be inspected.</h2>
				<div class="mt-6 max-w-[58ch] space-y-4 leading-relaxed text-ink-soft">
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
				<p
					class="mt-10 max-w-[20ch] font-display text-3xl leading-snug italic text-gold-600 md:text-[2.6rem]"
				>
					&ldquo;{site.tagline}&rdquo;
				</p>
				<p class="mt-4 text-[13px] font-semibold tracking-[0.08em] text-brown-700 uppercase">
					A Luganda proverb
				</p>
			</div>
			<div class="justify-self-center lg:justify-self-end" use:reveal={{ delay: 120 }}>
				<div class="w-64 border border-brown-700/15 bg-white p-3 lg:w-72">
					<img
						src={logo}
						alt="Lusansa Property Services logo, a weaver bird building its nest"
						width="1080"
						height="1080"
						class="h-auto w-full"
					/>
				</div>
			</div>
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
				<a href="/services" class="btn-quiet">All services <span class="arrow">&rarr;</span></a>
			</div>
			<dl class="mt-9 grid gap-x-14 gap-y-7 sm:grid-cols-2" use:reveal>
				{#each services as service (service._id)}
					<div>
						<dt>
							<a href={`/services#${service.slug.current}`} class="font-medium text-brown-800 underline-offset-4 hover:text-green-800 hover:underline">
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
