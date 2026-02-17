<script>
	import '../app.pcss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO />

<div class="flex flex-col min-h-screen">
	<Navbar />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
