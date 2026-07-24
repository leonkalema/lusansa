import { plotsQuery as query, type Plot } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { loadQuery } = locals.sanity;
	const initial = await loadQuery<Plot[]>(query);
	return { query, options: { initial } };
};
