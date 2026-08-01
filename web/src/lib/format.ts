export function ugx(n?: number): string {
	if (n == null) return '';
	return `UGX ${new Intl.NumberFormat('en-UG').format(n)}`;
}

/** Compact form for cards: "UGX 25M" (§12) */
export function ugxCompact(n?: number): string {
	if (n == null) return '';
	if (n >= 1_000_000) {
		const m = n / 1_000_000;
		return `UGX ${Number.isInteger(m) ? m : m.toFixed(1)}M`;
	}
	return ugx(n);
}

export function coords(c?: { lat: number; lng: number }): string {
	return c ? `${c.lat.toFixed(5)}, ${c.lng.toFixed(5)}` : '';
}

/** "24 July 2026" — for guide publish dates */
export function longDate(iso?: string): string {
	if (!iso) return '';
	return new Date(iso).toLocaleDateString('en-UG', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
}
