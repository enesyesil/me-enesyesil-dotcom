<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
  
	export let data: {
	  posts: {
		slug: string;
		title: string;
		image?: string;
		description?: string;
		date?: string;
	  }[];
	};
  </script>
  
  <Navbar />
  
  <main class="bg-amber-50 min-h-screen  px-4 sm:px-6 md:px-8 py-12">
	<div class="max-w-5xl mx-auto">
	  <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center sm:text-left">
		📝 Blog
	  </h1>
  
	  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
		{#each data.posts as post}
		  <a
			href={`/Blog/${post.slug}`}
			class="block p-5 sm:p-6 rounded-xl bg-amber-50 border  dark:bg-gray-800 shadow-md hover:shadow-lg hover:bg-amber-100 dark:hover:bg-gray-700 transition duration-200"
		  >
			<h2 class="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
			  {post.title}
			</h2>
			{#if post.description}
			  <p class="text-gray-700 dark:text-gray-400 text-sm sm:text-base">
				{post.description}
			  </p>
			{/if}
		  </a>
		{/each}
	  </div>
  
	  {#if data.posts.length === 0}
		<p class="text-gray-600 dark:text-gray-400 text-center mt-12 text-lg">
		  No blog posts available yet. Check back soon!
		</p>
	  {/if}
	</div>
  </main>
  
  <Footer />
  