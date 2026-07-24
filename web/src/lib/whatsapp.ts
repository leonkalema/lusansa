import { site } from '$lib/content/site';
import { ugxCompact } from '$lib/format';
import type { Plot } from '$lib/sanity/queries';

/** wa.me link, or the contact anchor while the number is not yet set */
export function waLink(message: string): string {
	if (!site.whatsappNumber) return '#contact';
	return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function plotMessage(plot: Plot): string {
	return `Hello Lusansa, I'm interested in ${plot.title} (${plot.sizeText}, ${ugxCompact(plot.priceUGX)}). Is it still available?`;
}

export function projectMessage(title?: string, district?: string): string {
	return `Hello Lusansa, I'm interested in ${title ?? 'one of your projects'}${district ? ` in ${district}` : ''}. Can you share more details?`;
}

export function serviceMessage(service: string): string {
	return `Hello Lusansa, I need help with ${service.toLowerCase()}.`;
}

export const verificationMessage =
	"Hello Lusansa, I'd like to verify a piece of land before buying.";

export const generalMessage = 'Hello Lusansa, I found your website and have a question.';
