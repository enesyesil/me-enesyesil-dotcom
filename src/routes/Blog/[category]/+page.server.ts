import { getAllPosts } from '$lib/server/github';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const category = params.category;
	const allPosts = await getAllPosts();
	
	// Filter posts by category
	const posts = allPosts.filter(p => p.category === category);
	
	if (posts.length === 0) {
		throw error(404, 'Category not found or no posts exist in this category');
	}

	return {
		category,
		posts
	};
}
