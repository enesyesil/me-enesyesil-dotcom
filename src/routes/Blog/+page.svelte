<script lang="ts">
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	export let data;

	// Search logic
	let searchTerm = '';
	$: filteredPosts = data.posts.filter((p) => {
		const term = searchTerm.toLowerCase();
		return p.title.toLowerCase().includes(term) || p.description?.toLowerCase().includes(term);
	});

	// Featured posts (first 3 for a curated feel)
	$: featuredPosts = data.posts.slice(0, 3);

	// Image error fallback
</script>

<div class="min-h-screen bg-transparent py-12 px-4 transition-colors duration-300">
	<div class="max-w-6xl mx-auto">
		<!-- Hero Section -->
		<div class="text-center mb-12 mt-8 animate-fade-in-up">
			<div
				class="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 font-semibold tracking-wide text-sm uppercase mb-3 font-mono"
			>
				<span class="text-xl">✍️</span> The Blog
			</div>
			<h1 class="text-6xl font-bold font-pixel mb-6 text-gray-900 dark:text-white">
				WRITING & <span class="text-primary-600 dark:text-primary-400">THOUGHTS</span>
			</h1>

			<!-- Intro / Manifesto Card -->
			<div
				class="max-w-3xl mx-auto bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-500 p-8 shadow-hard dark:shadow-none mb-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300"
			>
				<p class="text-lg font-mono text-gray-600 dark:text-gray-300 leading-relaxed italic">
					"I write here to keep a simple record of what I’m learning and how I reason through
					things. Writing forces me to slow down, make ideas clear, and notice gaps in my
					understanding. It’s also a way to track my progress over time. If someone else finds a
					post helpful, that’s a bonus."
				</p>
			</div>
		</div>

		<!-- Search Bar -->
		<div class="max-w-xl mx-auto mb-16 animate-fade-in-up delay-100">
			<div class="relative group">
				<div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
					<svg
						class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
					placeholder="Search all logs..."
					class="block w-full p-4 ps-12 text-base text-gray-900 border-2 border-gray-900 bg-white focus:ring-0 focus:border-primary-600 dark:bg-gray-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-400 font-mono shadow-hard dark:shadow-none focus:outline-none transition-all placeholder-gray-500"
				/>
			</div>
		</div>

		{#if searchTerm}
			<!-- Search Results -->
			<div class="animate-fade-in-up">
				<h3 class="text-2xl font-bold font-pixel text-gray-900 dark:text-white mb-8">
					SEARCH RESULTS ({filteredPosts.length})
				</h3>

				{#if filteredPosts.length > 0}
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{#each filteredPosts as post}
							<div class="retro-card flex flex-col h-full bg-amber-50 dark:bg-gray-900 group">
								<a
									href="/Blog/{post.category}/{post.slug}"
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
										<img
											src="/api/og?title={encodeURIComponent(post.title)}&category={encodeURIComponent(post.category)}&v=2"
											alt={post.title}
											class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
										/>
									{/if}
									<div class="absolute top-2 right-2">
										<span
											class="px-2 py-1 text-xs font-bold font-mono bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 shadow-sm uppercase"
											>{post.category}</span
										>
									</div>
								</a>
								<div class="p-6 flex flex-col flex-grow">
									<h2
										class="text-2xl font-bold font-mono text-gray-900 dark:text-white mb-3 leading-tight uppercase"
									>
										<a
											href="/Blog/{post.category}/{post.slug}"
											class="hover:underline decoration-2 underline-offset-4 decoration-primary-600 dark:decoration-primary-400"
											>{post.title}</a
										>
									</h2>
									<p
										class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed mb-6 line-clamp-3"
									>
										{post.description || '...'}
									</p>
									<div
										class="mt-auto flex items-center justify-between pt-4 border-t-2 border-gray-900 dark:border-gray-500 font-mono text-xs"
									>
										<span class="text-gray-500 dark:text-gray-400 font-bold uppercase"
											>{new Date(post.date).toLocaleDateString('en-US', {
												year: 'numeric',
												month: 'short',
												day: 'numeric'
											})}</span
										>
										<a
											href="/Blog/{post.category}/{post.slug}"
											class="inline-flex items-center font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline decoration-2 underline-offset-2"
											>READ <ArrowRightOutline class="w-3 h-3 ms-1" /></a
										>
									</div>
								</div>
							</div>
						{/each}
					</div>
				{:else}
					<div
						class="text-center py-20 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg"
					>
						<p class="text-xl font-mono text-gray-500 dark:text-gray-400">
							No logs found matching "{searchTerm}"
						</p>
					</div>
				{/if}
			</div>
		{:else}
			<!-- Default View: Categories & Featured -->

			<!-- Categories -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 animate-fade-in-up delay-100">
				{#each data.categories as category}
					<a
						href="/Blog/{category}"
						class="group relative overflow-hidden bg-amber-50 dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-500 p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-hard dark:hover:shadow-none"
					>
						<div class="flex items-center gap-4 mb-4">
							<span class="text-4xl">{category.toLowerCase().includes('engineering') ? '🛠️' : '💭'}</span>
							<h2
								class="text-3xl font-bold font-pixel text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors uppercase"
							>
								{category.replace(/-/g, ' ')}
							</h2>
						</div>
						<p class="text-gray-600 dark:text-gray-300 font-mono mb-6">
							Explore posts about {category.replace(/-/g, ' ')}.
						</p>
						<span
							class="inline-flex items-center font-bold text-primary-600 dark:text-primary-400 group-hover:underline decoration-2 underline-offset-4 uppercase"
						>
							BROWSE {category.replace(/-/g, ' ')} <ArrowRightOutline
								class="w-4 h-4 ms-2 group-hover:translate-x-1 transition-transform"
							/>
						</span>
					</a>
				{/each}
			</div>

			<!-- Featured Posts Header -->
			<div class="flex items-center gap-4 mb-8 animate-fade-in-up delay-200">
				<h3 class="text-2xl font-bold font-pixel text-gray-900 dark:text-white">FEATURED LOGS</h3>
				<div class="h-1 flex-grow bg-gray-900 dark:bg-gray-500"></div>
			</div>

			<!-- Featured Grid -->
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-200"
			>
				{#each featuredPosts as post}
					<div class="retro-card flex flex-col h-full bg-amber-50 dark:bg-gray-900 group">
						<!-- Image / Placeholder -->
						<a
							href="/Blog/{post.category}/{post.slug}"
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
								<img
									src="/api/og?title={encodeURIComponent(post.title)}&category={encodeURIComponent(post.category)}&v=2"
									alt={post.title}
									class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								/>
							{/if}
							<!-- Category Badge -->
							<div class="absolute top-2 right-2">
								<span
									class="px-2 py-1 text-xs font-bold font-mono bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 shadow-sm uppercase"
								>
									{post.category || 'POST'}
								</span>
							</div>
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
									href="/Blog/{post.category}/{post.slug}"
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
									href="/Blog/{post.category}/{post.slug}"
									class="inline-flex items-center font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline decoration-2 underline-offset-2"
								>
									READ <ArrowRightOutline class="w-3 h-3 ms-1" />
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
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
