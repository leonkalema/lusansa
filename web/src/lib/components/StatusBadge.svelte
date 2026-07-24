<script lang="ts">
	import type { PlotStatus } from '$lib/sanity/queries';

	const { status }: { status?: PlotStatus } = $props();

	const styles: Record<PlotStatus, string> = {
		available: 'text-green-800 bg-green-700/10',
		reserved: 'text-status-reserved bg-status-reserved/10',
		sold: 'text-status-sold bg-status-sold/10'
	};
</script>

{#if status}
	<span
		class={`inline-block rounded px-2 py-0.5 text-[13px] font-semibold tracking-[0.06em] uppercase ${styles[status]}`}
	>
		{status}
	</span>
{/if}
