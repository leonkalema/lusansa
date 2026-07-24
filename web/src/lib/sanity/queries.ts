import { groq } from '@sanity/sveltekit';
import type { PortableTextBlock } from '@portabletext/types';

const plotCardFields = `
	_id, title, slug, status, nearestLandmark,
	sizeText, sizeSqm, priceUGX, titleType, coordinates, boundary, photos, features,
	"development": project->title,
	"district": project->district,
	"projectSlug": project->slug.current
`;

export const plotsQuery = groq`*[_type == "plot" && defined(slug.current)] | order(_createdAt desc){
	${plotCardFields}
}`;

export const homePlotsQuery = groq`*[_type == "plot" && defined(slug.current)] | order(status asc, _createdAt desc)[0...3]{
	${plotCardFields}
}`;

export const plotQuery = groq`*[_type == "plot" && slug.current == $slug][0]{
	${plotCardFields},
	installments, description
}`;

const projectCardFields = `
	_id, title, slug, status, district, locationText, coordinates, summary, coverPhoto,
	"totalPlots": count(*[_type == "plot" && project._ref == ^._id]),
	"availablePlots": count(*[_type == "plot" && project._ref == ^._id && status == "available"])
`;

export const projectsQuery = groq`*[_type == "project" && defined(slug.current)] | order(_createdAt desc){
	${projectCardFields}
}`;

export const homeProjectsQuery = groq`*[_type == "project" && defined(slug.current)] | order(_createdAt desc)[0...2]{
	${projectCardFields}
}`;

export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
	${projectCardFields},
	gallery, videos, features, description,
	"plots": *[_type == "plot" && project._ref == ^._id] | order(priceUGX asc){
		${plotCardFields}
	}
}`;

export const servicesQuery = groq`*[_type == "service" && defined(slug.current)] | order(order asc){
	_id, name, slug, short, detail, included
}`;

export const guidesQuery = groq`*[_type == "guide" && defined(slug.current)] | order(publishedAt desc){
	_id, title, slug, excerpt, mainImage, publishedAt
}`;

export const guideQuery = groq`*[_type == "guide" && slug.current == $slug][0]{
	_id, title, slug, excerpt, mainImage, publishedAt, body
}`;

export type PlotStatus = 'available' | 'reserved' | 'sold';
export type ProjectStatus = 'selling' | 'coming-soon' | 'sold-out';

export interface PlotPhoto {
	asset?: unknown;
	caption?: string;
	date?: string;
}

export interface Plot {
	_id: string;
	title?: string;
	slug: { current: string };
	status?: PlotStatus;
	development?: string;
	district?: string;
	projectSlug?: string;
	nearestLandmark?: string;
	sizeText?: string;
	sizeSqm?: number;
	priceUGX?: number;
	installments?: { months?: number; depositUGX?: number };
	titleType?: 'mailo' | 'freehold' | 'leasehold';
	coordinates?: { lat: number; lng: number };
	boundary?: { lat: number; lng: number }[];
	photos?: PlotPhoto[];
	features?: string[];
	description?: PortableTextBlock[];
}

export interface ProjectVideo {
	url?: string;
	title?: string;
}

export interface Project {
	_id: string;
	title?: string;
	slug: { current: string };
	status?: ProjectStatus;
	district?: string;
	locationText?: string;
	coordinates?: { lat: number; lng: number };
	summary?: string;
	coverPhoto?: PlotPhoto;
	gallery?: PlotPhoto[];
	videos?: ProjectVideo[];
	features?: string[];
	description?: PortableTextBlock[];
	totalPlots?: number;
	availablePlots?: number;
	plots?: Plot[];
}

export interface Guide {
	_id: string;
	title?: string;
	slug: { current: string };
	excerpt?: string;
	mainImage?: unknown;
	publishedAt?: string;
	body?: PortableTextBlock[];
}

export interface Service {
	_id: string;
	name: string;
	slug: { current: string };
	short: string;
	detail: string[];
	included: string[];
}
