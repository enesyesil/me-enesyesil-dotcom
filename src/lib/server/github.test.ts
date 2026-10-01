// @vitest-environment node
import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => {
	vi.unstubAllGlobals();
	vi.restoreAllMocks();
	vi.resetModules();
});

function treeResponse(count = 20) {
	return Response.json({
		tree: Array.from({ length: count }, (_, i) => ({
			type: 'blob',
			path: `posts/engineering/post-${i}.md`,
			sha: `file-${i}`,
			size: 100,
			url: 'unused'
		}))
	});
}

describe('GitHub blog cache resource bounds', () => {
	it('coalesces concurrent cold and expired requests and bounds body reads', async () => {
		vi.resetModules();
		let now = 1_000_000;
		vi.spyOn(Date, 'now').mockImplementation(() => now);
		let active = 0;
		let peak = 0;
		const fetchStub = vi.fn(async (url: string) => {
			if (url.startsWith('https://api.github.com/')) return treeResponse();
			active++;
			peak = Math.max(peak, active);
			return {
				ok: true,
				text: async () => {
					await new Promise((resolve) => setTimeout(resolve, 2));
					active--;
					return '---\ntitle: Example\ndate: 2026-04-01\n---\nBody';
				}
			};
		});
		vi.stubGlobal('fetch', fetchStub);
		const { getAllPosts } = await import('./github');
		const results = await Promise.all(Array.from({ length: 25 }, () => getAllPosts()));
		expect(fetchStub).toHaveBeenCalledTimes(21);
		expect(peak).toBeLessThanOrEqual(6);
		expect(results.every((posts) => posts === results[0])).toBe(true);
		expect(results[0]).toHaveLength(20);
		expect(results[0][0].title).toBe('Example');
		await getAllPosts();
		expect(fetchStub).toHaveBeenCalledTimes(21);
		now += 300_001;
		await Promise.all([getAllPosts(), getAllPosts()]);
		expect(fetchStub).toHaveBeenCalledTimes(42);
	});

	it('shares tree refresh across callers and retries after failure', async () => {
		vi.resetModules();
		const fetchStub = vi
			.fn()
			.mockRejectedValueOnce(new Error('offline'))
			.mockResolvedValue(treeResponse(1));
		vi.stubGlobal('fetch', fetchStub);
		vi.spyOn(console, 'error').mockImplementation(() => {});
		const { fetchRepoTree, getCategories } = await import('./github');
		await Promise.all([fetchRepoTree(), getCategories(), fetchRepoTree()]);
		expect(fetchStub).toHaveBeenCalledTimes(1);
		expect(await fetchRepoTree()).toHaveLength(1);
		expect(fetchStub).toHaveBeenCalledTimes(2);
	});

	it('releases download slots when raw reads or HTTP requests fail', async () => {
		vi.resetModules();
		vi.stubGlobal(
			'fetch',
			vi.fn(async (url: string) => {
				if (url.startsWith('https://api.github.com/')) return treeResponse(12);
				if (url.endsWith('post-0.md')) return { ok: false };
				if (url.endsWith('post-1.md'))
					return {
						ok: true,
						text: async () => {
							throw new Error('body failed');
						}
					};
				return new Response('---\ntitle: Good\ndate: 2026-04-01\n---\nBody');
			})
		);
		const { getAllPosts } = await import('./github');
		expect(await getAllPosts()).toHaveLength(10);
	});
});
