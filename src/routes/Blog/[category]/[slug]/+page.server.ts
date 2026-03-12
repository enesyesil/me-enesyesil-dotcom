import { getPost } from '$lib/server/github';
import { marked } from 'marked';
import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function load({ params }) {
	const { category, slug } = params;
	const post = await getPost(category, slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	const renderer = new marked.Renderer();
	const originalCodeRenderer = renderer.code.bind(renderer);
	const originalImageRenderer = renderer.image.bind(renderer);

	renderer.code = function({ text, lang, escaped }) {
		if (lang === 'mermaid') {
			return `<div class="mermaid">${text}</div>`;
		}
		return originalCodeRenderer({ text, lang, escaped });
	};

	renderer.image = function(token) {
		const { href, title, text } = token;
		let finalHref = href;
		
		if (finalHref && (finalHref.startsWith('/') || finalHref.startsWith('./') || finalHref.startsWith('images/'))) {
			// Resolve relative paths generically aiming for static/images
			let cleanPath = finalHref.startsWith('/') ? finalHref.slice(1) : finalHref;
			if (cleanPath.startsWith('./')) cleanPath = cleanPath.slice(2);
			if (!cleanPath.startsWith('images/')) cleanPath = 'images/' + cleanPath;
			
			const staticLocalPath = path.join(process.cwd(), 'static', cleanPath);
			if (!fs.existsSync(staticLocalPath)) {
				// Fallback to our OG endpoint to completely hide 404s from terminal
				finalHref = `/api/og?title=${encodeURIComponent(text || 'Image')}&category=${encodeURIComponent(category)}&v=2`;
			}
		}
		
		return originalImageRenderer({ href: finalHref, title, text });
	};

	marked.setOptions({ renderer });

	const html = await marked.parse(post.content || '');

	return {
		category,
		data: post,
		content: html
	};
}
