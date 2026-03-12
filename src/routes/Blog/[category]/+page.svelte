<script lang="ts">
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	export let data;

	// Search logic
	let searchTerm = '';
	$: filteredPosts = data.posts.filter((p: any) => {
		const term = searchTerm.toLowerCase();
		return p.title.toLowerCase().includes(term) || p.description?.toLowerCase().includes(term);
	});
</script>

<div class="min-h-screen bg-transparent py-12 px-4 transition-colors duration-300">
	<div class="max-w-4xl mx-auto">
		<!-- Header -->
		<div class="mb-12 animate-fade-in-up">
			<a href="/Blog" class="inline-flex items-center text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 font-mono text-sm mb-6 transition-colors">
				<ArrowRightOutline class="w-4 h-4 mr-2 rotate-180" /> Back to Blog
			</a>
			
			<div class="flex items-center gap-4 mb-4">
				<span class="text-4xl">{data.category.toLowerCase().includes('engineering') ? '🛠️' : '💭'}</span>
				<h1 class="text-5xl font-bold font-pixel text-gray-900 dark:text-white uppercase">
					{data.category.replace(/-/g, ' ')}
				</h1>
			</div>
			<div class="h-1 w-24 bg-primary-600 dark:bg-primary-400 mb-8"></div>
		</div>

		<!-- Search -->
		<div class="mb-12 animate-fade-in-up delay-100">
			<div class="relative group">
				<div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
					<span class="text-gray-500">🔍</span>
				</div>
				<input
					type="text"
					bind:value={searchTerm}
					placeholder="Search {data.category.replace(/-/g, ' ')} logs..."
					class="block w-full p-4 ps-12 text-base text-gray-900 border-2 border-gray-900 bg-white focus:ring-0 focus:border-primary-600 dark:bg-gray-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-400 font-mono shadow-hard dark:shadow-none focus:outline-none transition-all placeholder-gray-500"
				/>
			</div>
		</div>

		<!-- Post List -->
		<div class="space-y-8 animate-fade-in-up delay-200">
			{#each filteredPosts as post}
				<div class="retro-card flex flex-col md:flex-row bg-amber-50 dark:bg-gray-900 group">
					<!-- Date column -->
					<div class="md:w-48 p-6 md:border-r-2 border-b-2 md:border-b-0 border-gray-900 dark:border-gray-500 flex flex-col justify-center bg-white dark:bg-gray-800">
						<span class="font-pixel text-3xl text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
							{new Date(post.date).getDate().toString().padStart(2, '0')}
						</span>
						<span class="font-mono text-gray-500 dark:text-gray-400 font-bold uppercase mt-1">
							{new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
						</span>
					</div>

					<!-- Content column -->
					<div class="p-6 flex-grow flex flex-col justify-center">
						<h2 class="text-2xl font-bold font-mono text-gray-900 dark:text-white mb-2 leading-tight uppercase">
							<a
								href="/Blog/{data.category}/{post.slug}"
								class="hover:underline decoration-2 underline-offset-4 decoration-primary-600 dark:decoration-primary-400"
							>
								{post.title}
							</a>
						</h2>
						
						{#if post.description}
							<p class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed mb-4 line-clamp-2">
								{post.description}
							</p>
						{/if}

						<div class="mt-auto pt-2 flex items-center justify-between">
							<div class="flex gap-2">
								{#if post.tags}
									{#each post.tags.slice(0, 2) as tag}
										<span class="text-xs font-mono bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 px-2 py-1 text-gray-600 dark:text-gray-400">
											[{tag}]
										</span>
									{/each}
								{/if}
							</div>
							
							<a
								href="/Blog/{data.category}/{post.slug}"
								class="inline-flex items-center font-bold font-mono text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline decoration-2 underline-offset-2 uppercase"
							>
								READ LOG <ArrowRightOutline class="w-3 h-3 ms-1" />
							</a>
						</div>
					</div>
				</div>
			{:else}
				<div class="text-center py-20 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
					<p class="text-xl font-mono text-gray-500 dark:text-gray-400">
						No posts found matching "{searchTerm}"
					</p>
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
