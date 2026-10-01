import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';
import type { PageServerLoad } from './$types';
import { marked } from 'marked';
import { sanitizeBlogHtml } from '$lib/server/security';

export const load: PageServerLoad = async ({ params }) => {
	const project = projects.find((p) => p.id === params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project,
		content: sanitizeBlogHtml(await marked.parse(project.longDescription || ''))
	};
};
