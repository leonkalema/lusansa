import {
	homePlotsQuery,
	homeProjectsQuery,
	servicesQuery,
	homepageQuery,
	type Plot,
	type Project,
	type Service,
	type Homepage
} from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { loadQuery } = locals.sanity;
	const [plotsInitial, projectsInitial, servicesInitial, homepageInitial] = await Promise.all([
		loadQuery<Plot[]>(homePlotsQuery),
		loadQuery<Project[]>(homeProjectsQuery),
		loadQuery<Service[]>(servicesQuery),
		loadQuery<Homepage>(homepageQuery)
	]);
	return {
		plots: { query: homePlotsQuery, options: { initial: plotsInitial } },
		projects: { query: homeProjectsQuery, options: { initial: projectsInitial } },
		services: { query: servicesQuery, options: { initial: servicesInitial } },
		homepage: { query: homepageQuery, options: { initial: homepageInitial } }
	};
};
