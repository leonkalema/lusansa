import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (event) => {
	const { previewEnabled } = event.locals.sanity;
	return { previewEnabled };
};
