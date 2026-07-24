<script lang="ts">
	import { useQuery } from '@sanity/sveltekit';
	import type { Service } from '$lib/sanity/queries';
	import type { PageProps } from './$types';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import { serviceMessage } from '$lib/whatsapp';
	import { onMount } from 'svelte';
	import { projectId, dataset, apiVersion } from '$lib/sanity/api';

	const { data }: PageProps = $props();
	const query = $derived(useQuery<Service[]>(data));
	const services = $derived($query.data ?? []);

	onMount(async () => {
		try {
			console.log('services count (derived):', services?.length);
			const groq = '*[_type == "service" && defined(slug.current)] | order(order asc){_id,name,slug}';
			const url = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(groq)}`;
			const res = await fetch(url);
			const json = await res.json();
			console.log('direct Sanity fetch result:', json);
		} catch (err) {
			console.error('services page debug error', err);
		}
	});
</script>

<svelte:head>
	<title>Services | Lusansa Property Services</title>
	<meta
		name="description"
		content="Land development, plot sales, verification, monitoring, maintenance, advisory, construction support and land preparation in Uganda."
	/>
</svelte:head>

<main class="mx-auto max-w-6xl px-5 py-12 lg:py-16">
	<p class="eyebrow mb-3">Services</p>
	<h1 class="text-4xl">What we do</h1>
	<p class="mt-3 max-w-[52ch] text-ink-soft">
		We sell planned plots, and we support everything around them. These are our services and what
		each one includes.
	</p>

	<nav class="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[15px]" aria-label="Services">
		{#each services as service (service._id)}
			<a href={`#${service.slug.current}`} class="text-green-800 underline-offset-4 hover:underline">
				{service.name}
			</a>
		{/each}
	</nav>

	<div class="mt-12 space-y-14">
		{#each services as service (service._id)}
			<section id={service.slug.current} class="scroll-mt-6 border-t border-brown-700/10 pt-10">
				<div class="grid gap-8 lg:grid-cols-[1fr_320px]">
					<div>
						<h2 class="text-2xl md:text-3xl">{service.name}</h2>
						{#each service.detail as paragraph (paragraph)}
							<p class="mt-4 max-w-[58ch] leading-relaxed text-ink-soft">{paragraph}</p>
						{/each}
						<div class="mt-6">
							<WhatsAppCta message={serviceMessage(service.name)} label="Ask about this service" quiet />
						</div>
					</div>
					<aside>
						<p class="eyebrow mb-3">Included</p>
						<ul class="space-y-2 text-[15px]">
							{#each service.included as item (item)}
								<li class="flex items-start gap-2.5">
									<span class="mt-[7px] h-1.5 w-1.5 shrink-0 bg-green-700"></span>
									{item}
								</li>
							{/each}
						</ul>
					</aside>
				</div>
			</section>
		{/each}
	</div>
</main>
