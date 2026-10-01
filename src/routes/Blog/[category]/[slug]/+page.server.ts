import { getPost } from '$lib/server/github';
import { escapeHtml, resolveStaticImageHref, sanitizeBlogHtml } from '$lib/server/security';
import { error } from '@sveltejs/kit';
import { Marked, Renderer } from 'marked';

const MAX_MERMAID_SOURCE_LENGTH = 10_000;

export async function load({ params }) {
	const { category, slug } = params;
	const post = await getPost(category, slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	const renderer = new Renderer();
	const originalCodeRenderer = renderer.code.bind(renderer);
	const originalImageRenderer = renderer.image.bind(renderer);

	renderer.code = function (token) {
		const { text, lang } = token;
		if (lang === 'mermaid' && text.length <= MAX_MERMAID_SOURCE_LENGTH) {
			return `<div class="mermaid">${escapeHtml(text)}</div>`;
		}
		return originalCodeRenderer(token);
	};

	renderer.image = function (token) {
		const { href, text } = token;
		let finalHref = href;

		const isExternal = finalHref
			? /^[a-z][a-z\d+.-]*:/i.test(finalHref) || finalHref.startsWith('//')
			: false;
		if (finalHref && !isExternal) {
			finalHref =
				resolveStaticImageHref(finalHref) ||
				`/api/og?title=${encodeURIComponent(text || 'Image')}&category=${encodeURIComponent(category)}&v=2`;
		}

		return originalImageRenderer({ ...token, href: finalHref });
	};

	const markdown = new Marked({ renderer });
	const html = sanitizeBlogHtml(await markdown.parse(post.content || ''));

	return {
		category,
		data: post,
		content: html
	};
}
