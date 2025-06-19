<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data: {
		posts: {
			slug: string;
			title: string;
			image?: string;
			description?: string;
		}[];
	};
</script>

<Navbar />

<main class="max-w-screen-lg mx-auto px-4 py-12">
	<h1 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Blog</h1>

	{#each data.posts as post}
		<article class="mb-10 p-6 rounded-lg bg-white dark:bg-gray-800 shadow hover:bg-amber-100 dark:hover:bg-gray-700 transition">
			<a href={`/Blog/${post.slug}`} class="block">
				{#if post.image}
					<img src={post.image} alt={post.title} class="w-full h-64 object-cover rounded mb-4" />
				{/if}
				<h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
				<p class="text-gray-700 dark:text-gray-300">{post.description}</p>
			</a>
		</article>
	{/each}
</main>

<Footer />
