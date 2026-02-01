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

<div class="min-h-screen bg-transparent py-12 px-4">
	<div class="max-w-6xl mx-auto">
		<!-- Hero Section -->
		<div class="text-center mb-16 mt-8 animate-fade-in-up">
			<div
				class="flex items-center justify-center gap-2 text-primary-600 font-semibold tracking-wide text-sm uppercase mb-3"
			>
				<span class="text-xl">✍️</span> The Blog
			</div>
			<h1 class="heading-primary mb-6">
				Writing & <span class="heading-accent">Thoughts</span>
			</h1>
			<p class="text-xl font-light text-gray-600 max-w-2xl mx-auto">
				Exploring software engineering, design patterns, and the future of technology.
			</p>
		</div>

		<!-- Tag Filter -->
		{#if allTags.length > 0}
			<div class="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up delay-100">
				<button
					on:click={() => (selectedTag = 'All')}
					class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 {selectedTag ===
					'All'
						? 'bg-primary-600 text-white shadow-md'
						: 'bg-white/50 text-gray-600 hover:bg-white hover:shadow-sm'}"
				>
					All Posts
				</button>
				{#each allTags as tag}
					<button
						on:click={() => (selectedTag = tag)}
						class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 {selectedTag ===
						tag
							? 'bg-primary-600 text-white shadow-md'
							: 'bg-white/50 text-gray-600 hover:bg-white hover:shadow-sm'}"
					>
						{tag}
					</button>
				{/each}
			</div>
		{/if}

		<!-- Blog Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-200">
			{#each filteredPosts as post}
				<div
					class="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-amber-100/50"
				>
					<!-- Image / Placeholder -->
					<a href="/Blog/{post.slug}" class="block h-48 relative overflow-hidden">
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
							<div class="w-full h-full bg-amber-50 flex items-center justify-center">
								<span class="text-4xl opacity-30">✨</span>
							</div>
						{/if}
					</a>

					<!-- Content -->
					<div class="p-6 flex flex-col flex-grow">
						<!-- Tags -->
						<div class="flex flex-wrap gap-2 mb-4">
							{#if post.tags}
								{#each post.tags.slice(0, 3) as tag}
									<span
										class="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full font-medium"
										>{tag}</span
									>
								{/each}
							{/if}
						</div>

						<!-- Title -->
						<h2
							class="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors"
						>
							<a href="/Blog/{post.slug}">
								{post.title}
							</a>
						</h2>

						<!-- Snippet -->
						<p class="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
							{post.description || 'Click to read more about this topic...'}
						</p>

						<!-- Footer -->
						<div class="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
							<span class="text-xs text-gray-500 font-medium">
								{new Date(post.date).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}
							</span>
							<a
								href="/Blog/{post.slug}"
								class="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 group-hover:underline"
							>
								Read Article <ArrowRightOutline
									class="w-3.5 h-3.5 ms-1 group-hover:translate-x-1 transition-transform"
								/>
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
