import type { Action } from 'svelte/action';

interface RevealOptions {
	readonly delay?: number;
	readonly threshold?: number;
}

const PREFERS_REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

/**
 * Reveals an element on scroll with a subtle rise + fade.
 * Honors prefers-reduced-motion by showing content immediately.
 * Usage: <div use:reveal={{ delay: 80 }}>
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	const delay = options?.delay ?? 0;
	const threshold = options?.threshold ?? 0.15;

	if (typeof window === 'undefined' || window.matchMedia(PREFERS_REDUCED_MOTION).matches) {
		node.style.opacity = '1';
		return;
	}

	node.style.opacity = '0';
	node.style.transform = 'translateY(14px)';
	node.style.transition = `opacity 600ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 600ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;
	node.style.willChange = 'opacity, transform';

	const observer = new IntersectionObserver(
		(entries, obs) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				node.style.opacity = '1';
				node.style.transform = 'translateY(0)';
				obs.unobserve(node);
			}
		},
		{ threshold, rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);

	return {
		destroy(): void {
			observer.disconnect();
		}
	};
};
