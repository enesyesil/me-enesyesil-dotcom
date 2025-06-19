import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load() {
	const postsDir = 'src/lib/posts';
	const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));

	const posts = files.map((file) => {
		const slug = file.replace('.md', '');
		const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
		const { data } = matter(raw);

		return {
			slug,
			title: data.title,
			description: data.description,
			image: data.image
		};
	});

	return { posts };
}
