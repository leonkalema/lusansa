<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { PreviewMode, QueryLoader, VisualEditing } from '@sanity/sveltekit';
	import { client } from '$lib/sanity/client';
	import { site } from '$lib/content/site';
	import { generalMessage } from '$lib/whatsapp';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import type { LayoutProps } from './$types';

	const { children, data }: LayoutProps = $props();
	// svelte-ignore state_referenced_locally
	const { previewEnabled } = data;

	const year = new Date().getFullYear();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<PreviewMode enabled={previewEnabled}>
	<VisualEditing enabled={previewEnabled}>
		<QueryLoader enabled={previewEnabled} {client}>
			<header class="border-b border-brown-700/10 bg-paper">
				<div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
					<a href="/" class="flex items-center">
						<img
							src="/logo.png"
							alt="Lusansa Property Services"
							width="120"
							height="75"
							class="h-12 w-auto sm:h-14"
						/>
					</a>
					<nav class="flex items-center gap-4 sm:gap-5">
						<a href="/projects" class="btn-quiet text-[15px] sm:text-base">Projects</a>
						<a href="/plots" class="btn-quiet hidden text-[15px] sm:inline-flex sm:text-base">Plots</a>
						<a href="/services" class="btn-quiet text-[15px] sm:text-base">Services</a>
						<WhatsAppCta
							message={generalMessage}
							label="WhatsApp us"
							class="!px-4 !py-2 text-[15px]"
						/>
					</nav>
				</div>
			</header>

			<div class="min-h-[60vh]">
				{@render children()}
			</div>

			<footer id="contact" class="bg-green-900 text-paper">
				<div class="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
					<div>
						<p class="font-display text-2xl font-semibold">Lusansa</p>
						<p class="mt-1 text-[13px] tracking-[0.08em] text-paper/70 uppercase">
							Property Services Ltd
						</p>
						<p class="mt-4 font-display text-lg italic text-[#d9a83c]">{site.tagline}</p>
					</div>

					<div class="text-[15px] leading-7 text-paper/85">
						<p class="mb-3 text-[13px] font-semibold tracking-[0.06em] text-paper/60 uppercase">
							Talk to us
						</p>
						{#if site.whatsappNumber}
							<WhatsAppCta message={generalMessage} label="Chat on WhatsApp" class="mb-3" />
						{:else}
							<p>WhatsApp and phone lines are being set up. Check back shortly.</p>
						{/if}
						{#if site.phone}<p class="tabular">{site.phone}</p>{/if}
						{#if site.email}<p>{site.email}</p>{/if}
						{#if site.officeAddress}<p>{site.officeAddress}</p>{/if}
					</div>

					<div class="text-[15px] leading-7 text-paper/85">
						<p class="mb-3 text-[13px] font-semibold tracking-[0.06em] text-paper/60 uppercase">
							How we work
						</p>
						<p>Plots are surveyed and planned before sale.</p>
						<p>GPS coordinates published for every plot.</p>
						<p>Serving buyers in Uganda and abroad.</p>
					</div>
				</div>
				<div class="border-t border-paper/15">
					<div
						class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-5 text-[13px] text-paper/60"
					>
						<p>© {year} {site.name}</p>
						<p>{site.areasServed.join(' · ')}, Uganda</p>
					</div>
				</div>
			</footer>
		</QueryLoader>
	</VisualEditing>
</PreviewMode>
