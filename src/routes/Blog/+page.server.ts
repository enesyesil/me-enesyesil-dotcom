import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load() {
	const postsDir = 'src/lib/posts';
	const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));

	const posts = [];

	for (const file of files) {
		try {
			const slug = file.replace('.md', '');
			const fullPath = path.join(postsDir, file);
			const content = fs.readFileSync(fullPath, 'utf-8');
			const { data } = matter(content);

			if (!data.title) continue; // skip if no title

			posts.push({
				slug,
				title: data.title,
				image: data.image,
				description: data.description ?? ''
			});
		} catch (e) {
			console.warn(`⚠️ Failed to load post: ${file}`, e);
		}
	}

	return {
		posts
	};
}
