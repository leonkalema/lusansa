// Service content lives in code: it changes rarely and the owners edit plots,
// not services. Copy follows COPY_RULES.md.
export interface Service {
	slug: string;
	name: string;
	short: string;
	detail: string[];
	included: string[];
}

export const services: Service[] = [
	{
		slug: 'land-development',
		name: 'Land development & subdivision',
		short: 'Structured plots planned around terrain, drainage and access. No random cutting.',
		detail: [
			'We buy high-potential land and turn it into planned plots. We study the terrain and the natural water flow first. Then we lay out access roads and cut the plots to fit the land.',
			'The result is a plot you can build on without surprises.'
		],
		included: [
			'Structured subdivision, no random cutting',
			'Terrain and natural drainage checks',
			'Planned access roads and layout',
			'Focus on long-term use and value'
		]
	},
	{
		slug: 'plot-sales',
		name: 'Serviced plot sales',
		short: 'Plots ready to use, with clear layouts and payment plans where offered.',
		detail: [
			'Our plots are ready to use. Layouts are clear, locations are accessible and prices are honest. Some projects offer payment plans.',
			'Ask about a plot on WhatsApp and we send you the details and the coordinates.'
		],
		included: [
			'Clear, organized layouts',
			'Accessible locations',
			'Honest prices',
			'Payment plans where offered'
		]
	},
	{
		slug: 'verification',
		name: 'Land verification & GIS mapping',
		short: 'GPS coordinates, boundaries and satellite mapping, before or after you buy.',
		detail: [
			'Never buy land you have not checked. We confirm what a piece of land is before you pay for it. We collect GPS coordinates, map the boundaries and pull the satellite view.',
			'Buyers abroad get the full report on WhatsApp.'
		],
		included: [
			'GPS coordinates of the land',
			'Size and boundary checks',
			'Satellite mapping',
			'Remote verification for buyers abroad'
		]
	},
	{
		slug: 'monitoring',
		name: 'Land monitoring & inspection',
		short: 'Scheduled site visits with photo and video updates. We guard land against encroachment.',
		detail: [
			'Land left alone attracts encroachers. We visit your land on a schedule and report what we find.',
			'You get photos, video and a short status note after each visit.'
		],
		included: [
			'Scheduled site visits',
			'Photo and video updates',
			'Boundary and usage checks',
			'Status reports'
		]
	},
	{
		slug: 'maintenance',
		name: 'Property maintenance & monitoring',
		short: 'Routine inspections and upkeep so property stays in good condition over time.',
		detail: [
			'Buildings age faster without care. We inspect your property on a routine, coordinate repairs early and report its condition.',
			'Owners abroad stay in control without traveling.'
		],
		included: [
			'Routine inspections',
			'Preventive maintenance coordination',
			'Condition reports',
			'Upkeep and supervision'
		]
	},
	{
		slug: 'advisory',
		name: 'Development advisory & planning',
		short: 'Practical guidance on how to use and develop your land, cost-aware from the start.',
		detail: [
			'Not sure what to do with your land? We help you decide. We look at the site, the area and your budget.',
			'Then we recommend a use and a layout that fit.'
		],
		included: [
			'Land use guidance',
			'Layout and planning recommendations',
			'Cost-aware development advice'
		]
	},
	{
		slug: 'construction',
		name: 'Construction support & coordination',
		short: 'Contractor recommendations, supervision and progress reports during your build.',
		detail: [
			'Building from a distance is hard. We stand in for you on site.',
			'We recommend contractors, supervise the work as agreed and report progress with photos.'
		],
		included: [
			'Contractor recommendations',
			'Site supervision as agreed',
			'Progress tracking and reports'
		]
	},
	{
		slug: 'preparation',
		name: 'Land assessment & preparation',
		short: 'Grading, clearing, soil testing coordination and landscaping before development begins.',
		detail: [
			'Good construction starts with prepared ground. We grade and level the site, clear it and coordinate soil testing.',
			'We handle landscaping too.'
		],
		included: [
			'Grading and leveling',
			'Site clearing and preparation',
			'Soil testing coordination',
			'Landscaping'
		]
	}
];
