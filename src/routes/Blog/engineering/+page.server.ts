import matter from 'gray-matter';

export async function load() {
	const imports = import.meta.glob('/src/lib/posts/engineering/*.md', {
		query: '?raw',
		import: 'default'
	});

	const posts = [];

	for (const path in imports) {
		const raw = (await imports[path]()) as string;
		const { data } = matter(raw);
		posts.push({
			slug: path.split('/').pop()?.replace('.md', ''),
			category: 'engineering',
			...data
		});
	}

	posts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return {
		posts,
		title: 'Software Engineering & Computer Science',
		description: 'Deep dives into code, architecture, and algorithms.'
	};
}
