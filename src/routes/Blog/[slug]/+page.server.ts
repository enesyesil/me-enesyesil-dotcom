import matter from 'gray-matter';
import { marked } from 'marked';

const allPosts = import.meta.glob('/src/lib/posts/**/*.md', { as: 'raw' });

export async function load({ params }) {
	const slug = params.slug;

	// Find the file path that ends with /slug.md
	const filePath = Object.keys(allPosts).find((path) => path.endsWith(`/${slug}.md`));

	if (!filePath) {
		return {
			status: 404,
			error: new Error('Post not found')
		};
	}

	const loader = allPosts[filePath];

	const raw = await loader();
	const { data, content } = matter(raw);
	const html = marked.parse(content);

	return {
		data,
		content: html
	};
}
