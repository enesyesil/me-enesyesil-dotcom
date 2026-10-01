import matter from 'gray-matter';
import { resolveStaticImageHref } from '$lib/server/security';

const REPO_OWNER = 'enesyesil';
const REPO_NAME = 'jurnality';
const BRANCH = 'main';
const CACHE_DURATION = 1000 * 60 * 5;
const GITHUB_REQUEST_TIMEOUT_MS = 10_000;
const MAX_POSTS = 100;
const MAX_POST_BYTES = 512 * 1024;
const MAX_POST_FETCH_CONCURRENCY = 6;

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
let treeRefresh: Promise<GitHubTreeItem[]> | null = null;

function isGitHubTreeItem(value: unknown): value is GitHubTreeItem {
	if (typeof value !== 'object' || value === null) return false;

	return (
		'path' in value &&
		typeof value.path === 'string' &&
		'type' in value &&
		(value.type === 'blob' || value.type === 'tree') &&
		'sha' in value &&
		typeof value.sha === 'string' &&
		'url' in value &&
		typeof value.url === 'string'
	);
}

export async function fetchRepoTree(): Promise<GitHubTreeItem[]> {
	if (treeCache && Date.now() - lastFetch < CACHE_DURATION) return treeCache;
	if (!treeRefresh) {
		treeRefresh = refreshRepoTree().finally(() => {
			treeRefresh = null;
		});
	}
	return treeRefresh;
}

async function refreshRepoTree(): Promise<GitHubTreeItem[]> {
	const now = Date.now();
	if (treeCache && now - lastFetch < CACHE_DURATION) {
		return treeCache;
	}

	const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/trees/${BRANCH}?recursive=1`;

	try {
		const res = await fetch(url, {
			headers: {
				Accept: 'application/vnd.github+json',
				'User-Agent': 'me-enesyesil-dotcom'
			},
			signal: AbortSignal.timeout(GITHUB_REQUEST_TIMEOUT_MS)
		});

		if (!res.ok) {
			console.error('Failed to fetch repo tree:', res.status, res.statusText);
			return treeCache || []; // return stale cache if available
		}

		const data: unknown = await res.json();
		if (
			typeof data !== 'object' ||
			data === null ||
			!('tree' in data) ||
			!Array.isArray(data.tree)
		) {
			console.error('GitHub returned an invalid repository tree response');
			return treeCache || [];
		}

		treeCache = data.tree.filter(isGitHubTreeItem);
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
		.filter(
			(item) =>
				item.type === 'tree' && item.path.startsWith('posts/') && item.path.split('/').length === 2
		)
		.map((item) => item.path.replace('posts/', ''));

	return categories;
}

export type PostMetadata = {
	title: string;
	description?: string;
	date: string;
	image?: string;
	tags?: string[];
	[key: string]: unknown;
};

export type Post = PostMetadata & {
	slug: string;
	category: string;
	content?: string; // used for single post view
};

// Cache for all posts to avoid fetching raw content individually if we can
let allPostsCache: Post[] | null = null;
let lastPostsFetch = 0;
let postsRefresh: Promise<Post[]> | null = null;

export async function getAllPosts(): Promise<Post[]> {
	if (allPostsCache && Date.now() - lastPostsFetch < CACHE_DURATION) return allPostsCache;
	if (!postsRefresh) {
		postsRefresh = refreshAllPosts().finally(() => {
			postsRefresh = null;
		});
	}
	return postsRefresh;
}

async function refreshAllPosts(): Promise<Post[]> {
	const now = Date.now();
	if (allPostsCache && now - lastPostsFetch < CACHE_DURATION) {
		return allPostsCache;
	}

	const tree = await fetchRepoTree();

	// Find all .md files inside posts/
	const postFiles = tree
		.filter(
			(item) =>
				item.type === 'blob' &&
				item.path.startsWith('posts/') &&
				item.path.endsWith('.md') &&
				typeof item.size === 'number' &&
				item.size <= MAX_POST_BYTES
		)
		.slice(0, MAX_POSTS);

	// Keep body reads and parsing inside a bounded worker slot.
	const fetchPost = async (file: GitHubTreeItem): Promise<Post | null> => {
		const parts = file.path.split('/');
		// path format: posts/[category]/.../[slug].md
		const category = parts[1];
		const slug = parts[parts.length - 1].replace(/\.md$/, '');

		const rawUrl = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${file.path}`;

		try {
			const res = await fetch(rawUrl, {
				signal: AbortSignal.timeout(GITHUB_REQUEST_TIMEOUT_MS)
			});
			if (!res.ok) {
				await res.body?.cancel();
				return null;
			}

			const rawText = await res.text();
			const parsed = matter(rawText);

			const verifiedImage = resolveStaticImageHref(parsed.data.image);

			return {
				slug,
				category,
				title: parsed.data.title || slug,
				date: parsed.data.date || new Date().toISOString(),
				...parsed.data,
				image: verifiedImage
			} as Post;
		} catch {
			return null;
		}
	};

	const results: (Post | null)[] = new Array(postFiles.length);
	let nextIndex = 0;
	await Promise.all(
		Array.from({ length: Math.min(MAX_POST_FETCH_CONCURRENCY, postFiles.length) }, async () => {
			while (nextIndex < postFiles.length) {
				const index = nextIndex++;
				results[index] = await fetchPost(postFiles[index]);
			}
		})
	);
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
		(item) =>
			item.type === 'blob' &&
			item.path.startsWith(filePathParams) &&
			item.path.endsWith(fileSuffix) &&
			typeof item.size === 'number' &&
			item.size <= MAX_POST_BYTES
	);

	if (!file) return null;

	const rawUrl = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${file.path}`;

	try {
		const res = await fetch(rawUrl, {
			signal: AbortSignal.timeout(GITHUB_REQUEST_TIMEOUT_MS)
		});
		if (!res.ok) {
			await res.body?.cancel();
			return null;
		}

		const rawText = await res.text();
		const parsed = matter(rawText);

		const verifiedImage = resolveStaticImageHref(parsed.data.image);

		return {
			slug,
			category,
			content: parsed.content,
			title: parsed.data.title || slug,
			date: parsed.data.date || new Date().toISOString(),
			...parsed.data,
			image: verifiedImage
		} as Post;
	} catch {
		return null;
	}
}
