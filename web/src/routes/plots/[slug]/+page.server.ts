import { error } from '@sveltejs/kit';
import { plotQuery as query, type Plot } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	const { loadQuery } = locals.sanity;
	const { slug } = params;
	const initial = await loadQuery<Plot>(query, { slug });
	if (!initial.data) {
		error(404, 'This plot is no longer listed');
	}
	return { query, params: { slug }, options: { initial } };
};
