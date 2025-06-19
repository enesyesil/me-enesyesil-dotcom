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
  <main class="max-w-screen-lg mx-auto px-4 py-12">
	<h1 class="text-4xl font-bold mb-8">Blog</h1>
	{#each data.posts as post}
	  <div class="mb-10 p-4 rounded bg-white shadow hover:bg-amber-100">
		<a href={`/Blog/${post.slug}`}>
		  <h2 class="text-2xl font-semibold mb-2">{post.title}</h2>
		  <p class="text-gray-700">{post.description}</p>
		</a>
	  </div>
	{/each}
  </main>
  <Footer />
  