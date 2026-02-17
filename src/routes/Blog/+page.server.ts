import matter from 'gray-matter';

export async function load() {
	// Fetch from all subdirectories
	const imports = import.meta.glob('/src/lib/posts/**/*.md', {
		query: '?raw',
		import: 'default'
	});

	const posts = [];

	for (const path in imports) {
		const raw = (await imports[path]()) as string;
		const { data } = matter(raw);

		// Extract category from path (engineering or thoughts)
		// Path format: /src/lib/posts/category/filename.md
		const pathParts = path.split('/');
		const category = pathParts[pathParts.length - 2];

		posts.push({
			slug: path.split('/').pop()?.replace('.md', ''),
			category,
			...data
		});
	}

	// Sort posts by date
	posts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return { posts };
}
