<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	export let data;

	// Extract all unique tags (if any)
	$: allTags = [...new Set(data.posts.flatMap((p) => p.tags || []))];
	let selectedTag = 'All';

	$: filteredPosts =
		selectedTag === 'All' ? data.posts : data.posts.filter((p) => p.tags?.includes(selectedTag));
</script>

<div class="min-h-screen bg-transparent py-12 px-4 transition-colors duration-300">
	<div class="max-w-6xl mx-auto">
		<!-- Hero Section -->
		<div class="text-center mb-16 mt-8 animate-fade-in-up">
			<div
				class="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 font-semibold tracking-wide text-sm uppercase mb-3 font-mono"
			>
				<span class="text-xl">✍️</span> The Blog
			</div>
			<h1 class="text-6xl font-bold font-pixel mb-6 text-gray-900 dark:text-white">
				WRITING & <span class="text-primary-600 dark:text-primary-400">THOUGHTS</span>
			</h1>
			<p class="text-xl font-mono text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
				> Exploring software engineering, design patterns, and the future of technology.
			</p>
		</div>

		<!-- Tag Filter -->
		{#if allTags.length > 0}
			<div class="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up delay-100 font-mono">
				<button
					on:click={() => (selectedTag = 'All')}
					class="px-4 py-2 text-sm font-bold border-2 border-gray-900 dark:border-gray-500 shadow-hard dark:shadow-none transition-all duration-200 active:translate-y-0.5 active:shadow-none {selectedTag ===
					'All'
						? 'bg-primary-600 text-white border-transparent'
						: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'}"
				>
					[ All Posts ]
				</button>
				{#each allTags as tag}
					<button
						on:click={() => (selectedTag = tag)}
						class="px-4 py-2 text-sm font-bold border-2 border-gray-900 dark:border-gray-500 shadow-hard dark:shadow-none transition-all duration-200 active:translate-y-0.5 active:shadow-none {selectedTag ===
						tag
							? 'bg-primary-600 text-white border-transparent'
							: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'}"
					>
						[{tag}]
					</button>
				{/each}
			</div>
		{/if}

		<!-- Blog Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-200">
			{#each filteredPosts as post}
				<div class="retro-card flex flex-col h-full bg-amber-50 dark:bg-gray-900 group">
					<!-- Image / Placeholder -->
					<a
						href="/Blog/{post.slug}"
						class="block h-48 relative overflow-hidden border-b-2 border-gray-900 dark:border-gray-500"
					>
						{#if post.image}
							<img
								src={post.image}
								alt={post.title}
								class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300"
							></div>
						{:else}
							<div class="w-full h-full bg-white dark:bg-gray-800 flex items-center justify-center">
								<span class="text-4xl opacity-30 font-pixel dark:text-gray-500">POST</span>
							</div>
						{/if}
					</a>

					<!-- Content -->
					<div class="p-6 flex flex-col flex-grow">
						<!-- Tags -->
						<div class="flex flex-wrap gap-2 mb-4 font-mono text-xs">
							{#if post.tags}
								{#each post.tags.slice(0, 3) as tag}
									<span
										class="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white"
										>[{tag}]</span
									>
								{/each}
							{/if}
						</div>

						<!-- Title -->
						<h2
							class="text-2xl font-bold font-mono text-gray-900 dark:text-white mb-3 leading-tight uppercase"
						>
							<a
								href="/Blog/{post.slug}"
								class="hover:underline decoration-2 underline-offset-4 decoration-primary-600 dark:decoration-primary-400"
							>
								{post.title}
							</a>
						</h2>

						<!-- Snippet -->
						<p
							class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed mb-6 line-clamp-3"
						>
							{post.description || 'Click to read more about this topic...'}
						</p>

						<!-- Footer -->
						<div
							class="mt-auto flex items-center justify-between pt-4 border-t-2 border-gray-900 dark:border-gray-500 font-mono text-xs"
						>
							<span class="text-gray-500 dark:text-gray-400 font-bold uppercase">
								{new Date(post.date).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})}
							</span>
							<a
								href="/Blog/{post.slug}"
								class="inline-flex items-center font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline decoration-2 underline-offset-2"
							>
								READ <ArrowRightOutline class="w-3 h-3 ms-1" />
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.animate-fade-in-up {
		animation: fadeInUp 0.8s ease-out forwards;
		opacity: 0;
		transform: translateY(20px);
	}
	.delay-100 {
		animation-delay: 0.1s;
	}
	.delay-200 {
		animation-delay: 0.2s;
	}
	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
