import { guidesQuery as query, type Guide } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { loadQuery } = locals.sanity;
	const initial = await loadQuery<Guide[]>(query);
	return { query, options: { initial } };
};
