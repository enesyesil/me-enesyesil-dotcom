import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const REPO_OWNER = 'enesyesil';
const REPO_NAME = 'jurnality';
const BRANCH = 'main';

type GitHubTreeItem = {
	path: string;
	mode: string;
	type: 'blob' | 'tree';
	sha: string;
	size?: number;
	url: string;
};

// Simple in-memory cache for the server
let treeCache: GitHubTreeItem[] | null = null;
let lastFetch = 0;
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

export async function fetchRepoTree(): Promise<GitHubTreeItem[]> {
	const now = Date.now();
	if (treeCache && now - lastFetch < CACHE_DURATION) {
		return treeCache;
	}

	const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/trees/${BRANCH}?recursive=1`;
	
	try {
		const res = await fetch(url, {
			headers: {
				'Accept': 'application/vnd.github.v3+json',
				'User-Agent': 'me-enesyesil-dotcom'
			}
		});
		
		if (!res.ok) {
			console.error('Failed to fetch repo tree', await res.text());
			return treeCache || []; // return stale cache if available
		}

		const data = await res.json();
		treeCache = data.tree;
		lastFetch = now;
		return treeCache;
	} catch (err) {
		console.error('Error fetching tree', err);
		return treeCache || [];
	}
}

export async function getCategories(): Promise<string[]> {
	const tree = await fetchRepoTree();
	
	// Categories are directories directly inside "posts/"
	const categories = tree
		.filter((item) => item.type === 'tree' && item.path.startsWith('posts/') && item.path.split('/').length === 2)
		.map((item) => item.path.replace('posts/', ''));

	return categories;
}

export type PostMetadata = {
	title: string;
	description?: string;
	date: string;
	image?: string;
	tags?: string[];
	[key: string]: any;
};

export type Post = PostMetadata & {
	slug: string;
	category: string;
	content?: string; // used for single post view
};

// Cache for all posts to avoid fetching raw content individually if we can
let allPostsCache: Post[] | null = null;
let lastPostsFetch = 0;

export async function getAllPosts(): Promise<Post[]> {
	const now = Date.now();
	if (allPostsCache && now - lastPostsFetch < CACHE_DURATION) {
		return allPostsCache;
	}

	const tree = await fetchRepoTree();
	
	// Find all .md files inside posts/
	const postFiles = tree.filter(
		(item) => item.type === 'blob' && item.path.startsWith('posts/') && item.path.endsWith('.md')
	);

	const posts: Post[] = [];

	// Fetch all raw contents in parallel
	const promises = postFiles.map(async (file) => {
		const parts = file.path.split('/');
		// path format: posts/[category]/.../[slug].md
		const category = parts[1];
		const slug = parts[parts.length - 1].replace(/\.md$/, '');
		
		const rawUrl = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${file.path}`;
		
		try {
			const res = await fetch(rawUrl);
			if (!res.ok) return null;
			
			const rawText = await res.text();
			const parsed = matter(rawText);
			
			let verifiedImage = parsed.data.image || null;
			if (verifiedImage) {
				const staticLocalPath = path.join(process.cwd(), 'static', verifiedImage.startsWith('/') ? verifiedImage.slice(1) : verifiedImage);
				if (!fs.existsSync(staticLocalPath)) {
					verifiedImage = null;
				}
			}
			
			return {
				slug,
				category,
				title: parsed.data.title || slug,
				date: parsed.data.date || new Date().toISOString(),
				...parsed.data,
				image: verifiedImage
			} as Post;
		} catch (e) {
			return null;
		}
	});

	const results = await Promise.all(promises);
	const validPosts = results.filter((p): p is Post => p !== null);

	// Sort by date descending
	validPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	allPostsCache = validPosts;
	lastPostsFetch = now;
	
	return validPosts;
}

export async function getPost(category: string, slug: string): Promise<Post | null> {
	const tree = await fetchRepoTree();
	
	// Find the exact file
	// It could be nested inside subdirectories of the category
	const filePathParams = `posts/${category}/`;
	const fileSuffix = `${slug}.md`;
	
	const file = tree.find(
		(item) => item.type === 'blob' && item.path.startsWith(filePathParams) && item.path.endsWith(fileSuffix)
	);

	if (!file) return null;

	const rawUrl = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${file.path}`;
	
	try {
		const res = await fetch(rawUrl);
		if (!res.ok) return null;
		
		const rawText = await res.text();
		const parsed = matter(rawText);
		
		let verifiedImage = parsed.data.image || null;
		if (verifiedImage) {
			const staticLocalPath = path.join(process.cwd(), 'static', verifiedImage.startsWith('/') ? verifiedImage.slice(1) : verifiedImage);
			if (!fs.existsSync(staticLocalPath)) {
				verifiedImage = null;
			}
		}

		return {
			slug,
			category,
			content: parsed.content,
			title: parsed.data.title || slug,
			date: parsed.data.date || new Date().toISOString(),
			...parsed.data,
			image: verifiedImage
		} as Post;
	} catch (e) {
		return null;
	}
}
