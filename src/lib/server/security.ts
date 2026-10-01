import fs from 'node:fs';
import path from 'node:path';
import sanitizeHtml from 'sanitize-html';

const MAX_OG_TITLE_LENGTH = 120;
const MAX_OG_CATEGORY_LENGTH = 40;

export function escapeHtml(value: string): string {
	return value.replace(/[&<>"']/g, (character) => {
		switch (character) {
			case '&':
				return '&amp;';
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '"':
				return '&quot;';
			default:
				return '&#39;';
		}
	});
}

export function normalizeOgText(value: string | null, fallback: string, maxLength: number): string {
	// Strip control characters before embedding query text in SVG.
	const normalized = (value ?? '')
		// eslint-disable-next-line no-control-regex
		.replace(/[\u0000-\u001f\u007f]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim()
		.slice(0, maxLength);

	return normalized || fallback;
}

export function normalizeOgTitle(value: string | null): string {
	return normalizeOgText(value, 'Untitled', MAX_OG_TITLE_LENGTH);
}

export function normalizeOgCategory(value: string | null): string {
	return normalizeOgText(value, 'Post', MAX_OG_CATEGORY_LENGTH);
}

export function resolveStaticImageHref(value: unknown): string | null {
	if (typeof value !== 'string' || value.length === 0 || value.includes('\\')) return null;

	let cleanPath = value.startsWith('/') ? value.slice(1) : value;
	if (cleanPath.startsWith('./')) cleanPath = cleanPath.slice(2);
	if (!cleanPath.startsWith('images/')) cleanPath = `images/${cleanPath}`;

	const normalizedPath = path.posix.normalize(cleanPath);
	if (normalizedPath === '..' || normalizedPath.startsWith('../')) return null;

	const staticRoot = path.resolve(process.cwd(), 'static');
	const candidate = path.resolve(staticRoot, normalizedPath);
	if (!candidate.startsWith(`${staticRoot}${path.sep}`)) return null;

	try {
		return fs.statSync(candidate).isFile() ? `/${normalizedPath}` : null;
	} catch {
		return null;
	}
}

export function sanitizeBlogHtml(html: string): string {
	return sanitizeHtml(html, {
		allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img'],
		allowedAttributes: {
			...sanitizeHtml.defaults.allowedAttributes,
			a: ['href', 'title', 'rel'],
			code: ['class'],
			div: ['class'],
			img: ['src', 'alt', 'title', 'width', 'height', 'loading', 'referrerpolicy']
		},
		allowedClasses: {
			code: [/^language-[a-z0-9_-]+$/i],
			div: ['mermaid']
		},
		allowedSchemes: ['http', 'https', 'mailto'],
		allowProtocolRelative: false,
		transformTags: {
			a: (_tagName, attributes) => ({
				tagName: 'a',
				attribs: { ...attributes, rel: 'noopener noreferrer' }
			}),
			img: (_tagName, attributes) => ({
				tagName: 'img',
				attribs: {
					...attributes,
					loading: 'lazy',
					referrerpolicy: 'no-referrer'
				}
			})
		}
	});
}
