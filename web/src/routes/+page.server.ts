import {
	homePlotsQuery,
	homeProjectsQuery,
	servicesQuery,
	type Plot,
	type Project,
	type Service
} from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { loadQuery } = locals.sanity;
	const [plotsInitial, projectsInitial, servicesInitial] = await Promise.all([
		loadQuery<Plot[]>(homePlotsQuery),
		loadQuery<Project[]>(homeProjectsQuery),
		loadQuery<Service[]>(servicesQuery)
	]);
	return {
		plots: { query: homePlotsQuery, options: { initial: plotsInitial } },
		projects: { query: homeProjectsQuery, options: { initial: projectsInitial } },
		services: { query: servicesQuery, options: { initial: servicesInitial } }
	};
};
