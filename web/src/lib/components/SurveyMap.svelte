<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { coords } from '$lib/format';
	import { ugxCompact } from '$lib/format';
	import type { PlotStatus } from '$lib/sanity/queries';
	import 'leaflet/dist/leaflet.css';

	export interface MapPlot {
		slug?: string;
		title?: string;
		status?: PlotStatus;
		lat: number;
		lng: number;
		sizeSqm?: number;
		priceUGX?: number;
		boundary?: { lat: number; lng: number }[];
	}

	const {
		plots,
		label,
		note,
		currentSlug
	}: { plots: MapPlot[]; label?: string; note?: string; currentSlug?: string } = $props();

	let mapEl: HTMLDivElement;

	const center = $derived({
		lat: plots.reduce((s, p) => s + p.lat, 0) / plots.length,
		lng: plots.reduce((s, p) => s + p.lng, 0) / plots.length
	});

	const statusColor: Record<PlotStatus, string> = {
		available: '#107800',
		reserved: '#b07b10',
		sold: '#8c4a32'
	};

	function toDMS(v: number, axis: 'lat' | 'lng'): string {
		const dir = axis === 'lat' ? (v >= 0 ? 'N' : 'S') : (v >= 0 ? 'E' : 'W');
		const a = Math.abs(v);
		const d = Math.floor(a);
		const mFull = (a - d) * 60;
		const m = Math.floor(mFull);
		const s = Math.round((mFull - m) * 60);
		return `${d}°${String(m).padStart(2, '0')}′${String(s).padStart(2, '0')}″${dir}`;
	}

	/** Approximate plot rectangle from its size, 1:2 side ratio, centered on the point */
	function rectFor(p: MapPlot): [number, number][] {
		const size = p.sizeSqm ?? 464;
		const w = Math.sqrt(size / 2);
		const h = w * 2;
		const dLat = h / 2 / 111320;
		const dLng = w / 2 / (111320 * Math.cos((p.lat * Math.PI) / 180));
		return [
			[p.lat - dLat, p.lng - dLng],
			[p.lat - dLat, p.lng + dLng],
			[p.lat + dLat, p.lng + dLng],
			[p.lat + dLat, p.lng - dLng]
		];
	}

	function plotNumber(title?: string): string {
		const m = title?.match(/(\d+)\s*$/);
		return m ? m[1] : '';
	}

	onMount(() => {
		let map: import('leaflet').Map | undefined;
		let cancelled = false;

		import('leaflet').then((mod) => {
			if (cancelled) return;
			const L = mod.default;
			map = L.map(mapEl, {
				center: [center.lat, center.lng],
				zoom: 17,
				scrollWheelZoom: false,
				zoomControl: true
			});
			L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 19,
				className: 'brand-tiles',
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			}).addTo(map);
			L.control.scale({ imperial: false, position: 'bottomleft' }).addTo(map);

			const allBounds = L.latLngBounds([]);

			for (const p of plots) {
				const ring: [number, number][] =
					p.boundary && p.boundary.length >= 3
						? p.boundary.map((c) => [c.lat, c.lng])
						: rectFor(p);
				const color = statusColor[p.status ?? 'available'];
				const isCurrent = !!currentSlug && p.slug === currentSlug;

				const polygon = L.polygon(ring, {
					color,
					weight: isCurrent ? 2 : 1.4,
					fillColor: color,
					fillOpacity: p.status === 'available' || isCurrent ? 0.14 : 0.07,
					dashArray: p.status === 'sold' ? '4 4' : undefined
				}).addTo(map);
				ring.forEach((c) => allBounds.extend(c));

				const num = plotNumber(p.title);
				if (num) {
					L.marker(polygon.getBounds().getCenter(), {
						interactive: false,
						icon: L.divIcon({
							html: `<span style="color:${color}">${num}</span>`,
							className: 'plot-num',
							iconSize: [28, 16],
							iconAnchor: [14, 8]
						})
					}).addTo(map);
				}

				if (isCurrent) {
					for (const c of ring) {
						L.marker(c, {
							interactive: false,
							icon: L.divIcon({
								html: '<div class="plot-peg"></div>',
								className: 'plot-peg-wrap',
								iconSize: [7, 7],
								iconAnchor: [4, 4]
							})
						}).addTo(map);
					}
				}

				if (p.slug && !isCurrent) {
					polygon.bindTooltip(
						`${p.title ?? 'Plot'}${p.priceUGX ? ` · ${ugxCompact(p.priceUGX)}` : ''}`,
						{ sticky: true, className: 'plot-tip' }
					);
					polygon.on('click', () => goto(`/plots/${p.slug}`));
					polygon.on('mouseover', () => polygon.setStyle({ weight: 2.4 }));
					polygon.on('mouseout', () => polygon.setStyle({ weight: 1.4 }));
				}
			}

			if (allBounds.isValid()) {
				map.fitBounds(allBounds.pad(0.6), { maxZoom: 18 });
			}
		});

		return () => {
			cancelled = true;
			map?.remove();
		};
	});
</script>

<figure>
	<div class="relative isolate z-0 overflow-hidden rounded-lg border border-brown-700/15">
		<div
			bind:this={mapEl}
			role="img"
			aria-label={label ?? 'Survey map of the location'}
			class="aspect-[16/9] w-full bg-paper-dark sm:aspect-[16/7]"
		></div>
		<!-- survey-plan chrome -->
		<div class="survey-grid pointer-events-none absolute inset-0 z-[350]"></div>
		<span class="tabular pointer-events-none absolute top-2.5 left-3 z-[1000] text-[10.5px] text-gold-700/90">
			{toDMS(center.lat, 'lat')}
		</span>
		<span class="tabular pointer-events-none absolute right-3 bottom-2.5 z-[1000] text-[10.5px] text-gold-700/90">
			{toDMS(center.lng, 'lng')}
		</span>
		<svg viewBox="0 0 44 56" class="pointer-events-none absolute top-2.5 right-2.5 z-[1000] h-12 w-auto" aria-hidden="true">
			<circle cx="22" cy="20" r="15" fill="rgba(250,248,242,0.55)" stroke="#584838" stroke-opacity="0.5" stroke-width="1" />
			<path d="M22 10 L26.5 26 L22 23 L17.5 26 Z" fill="#584838" fill-opacity="0.65" />
			<text x="22" y="50" font-size="10" fill="#584838" fill-opacity="0.7" text-anchor="middle">N</text>
		</svg>
	</div>
	<figcaption class="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-ink-soft">
		<span class="tabular flex items-center gap-1">
			<svg viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
				<path d="M8 14s4.5-4 4.5-7.5a4.5 4.5 0 1 0-9 0C3.5 10 8 14 8 14Z" />
				<circle cx="8" cy="6.5" r="1.6" />
			</svg>
			{coords(center)}
		</span>
		<a
			href={`https://maps.google.com/?q=${center.lat},${center.lng}`}
			rel="noopener"
			class="font-medium text-green-800 underline-offset-4 hover:underline"
		>
			Open in Google Maps
		</a>
		{#if note}
			<span>{note}</span>
		{/if}
	</figcaption>
</figure>

<style>
	:global(.brand-tiles) {
		filter: grayscale(0.9) sepia(0.22) brightness(1.04) contrast(0.88) saturate(1.1);
	}
	.survey-grid {
		background-image:
			repeating-linear-gradient(to right, rgba(88, 72, 56, 0.07) 0 1px, transparent 1px 45px),
			repeating-linear-gradient(to bottom, rgba(88, 72, 56, 0.07) 0 1px, transparent 1px 45px);
	}
	:global(.plot-num) {
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 13px;
		font-variant-numeric: tabular-nums;
		text-shadow: 0 0 3px rgba(250, 248, 242, 0.9);
	}
	:global(.plot-peg) {
		width: 7px;
		height: 7px;
		background: #107800;
	}
	:global(.plot-tip) {
		background: #faf8f2;
		border: 1px solid rgba(88, 72, 56, 0.3);
		border-radius: 4px;
		color: #221e1a;
		font-size: 13px;
		box-shadow: none;
	}
	:global(.leaflet-container) {
		background: #f1ede2;
		font-family: inherit;
	}
	:global(.leaflet-control-zoom a) {
		color: #221e1a;
	}
	:global(.leaflet-control-scale-line) {
		background: transparent;
		border-color: rgba(88, 72, 56, 0.6);
		color: #584838;
		font-size: 10px;
	}
	:global(.leaflet-control-attribution) {
		background: rgba(250, 248, 242, 0.8);
		color: #5c554c;
		font-size: 10px;
	}
	:global(.leaflet-control-attribution a) {
		color: #5c554c;
	}
</style>
