import {
	homePlotsQuery,
	homeProjectsQuery,
	type Plot,
	type Project
} from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { loadQuery } = locals.sanity;
	const [plotsInitial, projectsInitial] = await Promise.all([
		loadQuery<Plot[]>(homePlotsQuery),
		loadQuery<Project[]>(homeProjectsQuery)
	]);
	return {
		plots: { query: homePlotsQuery, options: { initial: plotsInitial } },
		projects: { query: homeProjectsQuery, options: { initial: projectsInitial } }
	};
};
