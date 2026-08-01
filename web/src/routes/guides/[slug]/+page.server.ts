import { error } from '@sveltejs/kit';
import { guideQuery as query, type Guide } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	const { loadQuery } = locals.sanity;
	const { slug } = params;
	const initial = await loadQuery<Guide>(query, { slug });
	if (!initial.data) {
		error(404, 'This guide does not exist');
	}
	return { query, params: { slug }, options: { initial } };
};
