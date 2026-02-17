<script lang="ts">
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	export let data;

	// Extract all unique tags (if any)
	$: allTags = [...new Set(data.posts.flatMap((p) => p.tags || []))];
	let selectedTag = 'All';
	let searchTerm = '';

	$: filteredPosts = data.posts.filter((p) => {
		const matchesTag = selectedTag === 'All' || p.tags?.includes(selectedTag);
		const matchesSearch =
			p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			p.description?.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesTag && matchesSearch;
	});
</script>

<div class="min-h-screen bg-transparent py-12 px-4 transition-colors duration-300">
	<div class="max-w-6xl mx-auto">
		<!-- Back Button -->
		<div class="mb-8 animate-fade-in-up">
			<a
				href="/Blog"
				class="inline-flex items-center font-bold font-mono text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors uppercase tracking-wide"
			>
				<ArrowRightOutline class="w-4 h-4 me-2 rotate-180" />
				Back to Blog
			</a>
		</div>

		<!-- Hero Section -->
		<div class="text-center mb-16 mt-8 animate-fade-in-up">
			<div
				class="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 font-semibold tracking-wide text-sm uppercase mb-3 font-mono"
			>
				<span class="text-xl">💭</span> Thoughts
			</div>
			<h1 class="text-6xl font-bold font-pixel mb-6 text-gray-900 dark:text-white">
				MY <span class="text-primary-600 dark:text-primary-400">THOUGHTS</span>
			</h1>
			<p class="text-xl font-mono text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
				{data.description || '> Reflections, philosophy, and personal journey.'}
			</p>
		</div>

		<!-- Search Bar -->
		<div class="max-w-md mx-auto mb-8 animate-fade-in-up delay-100">
			<div class="relative">
				<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg
						class="w-4 h-4 text-gray-500 dark:text-gray-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
				<input
					type="text"
					bind:value={searchTerm}
					placeholder="Search thoughts..."
					class="block w-full p-4 ps-10 text-sm text-gray-900 border-2 border-gray-900 bg-white focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 font-mono shadow-hard dark:shadow-none focus:outline-none transition-shadow"
				/>
			</div>
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
								<span class="text-4xl opacity-30 font-pixel dark:text-gray-500">THOUGHT</span>
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
