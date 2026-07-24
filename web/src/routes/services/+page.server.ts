import { servicesQuery as query, type Service } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { loadQuery } = locals.sanity;
	const initial = await loadQuery<Service[]>(query);
	return { query, options: { initial } };
};
