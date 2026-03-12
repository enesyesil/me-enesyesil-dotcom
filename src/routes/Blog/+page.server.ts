import { getAllPosts, getCategories } from '$lib/server/github';

export async function load() {
	const posts = await getAllPosts();
	const categories = await getCategories();

	return { posts, categories };
}
