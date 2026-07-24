import { error } from '@sveltejs/kit';
import { projectQuery as query, type Project } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	const { loadQuery } = locals.sanity;
	const { slug } = params;
	const initial = await loadQuery<Project>(query, { slug });
	if (!initial.data) {
		error(404, 'This project is no longer listed');
	}
	return { query, params: { slug }, options: { initial } };
};
