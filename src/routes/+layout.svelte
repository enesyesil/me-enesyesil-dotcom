<script>
	import '../app.pcss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { page } from '$app/stores';

	$: routeName = $page.url.pathname.split('/')[1];
	$: title = $page.data.project?.title
		? `${$page.data.project.title} | Enes Yesil`
		: $page.data.data?.title
			? `${$page.data.data.title} | Enes Yesil`
			: routeName
				? `${routeName === 'MoreMe' ? 'About' : routeName} | Enes Yesil`
				: 'Enes Yesil | Software Engineer';
	$: description =
		$page.data.project?.description ||
		$page.data.data?.description ||
		'Software Engineer at RAVL in Toronto, focused on AI and Data infrastructure, backend systems, and platform engineering.';
	$: canonical = `https://enesyesil.me${$page.url.pathname}`;
	$: image = `https://enesyesil.me/api/og?title=${encodeURIComponent(title)}&category=${encodeURIComponent(routeName || 'Software Engineer')}`;
</script>

<SEO {title} {description} {image} url={canonical} />

<a href="#main-content" class="skip-link">Skip to content</a>

<div class="flex flex-col min-h-screen">
	<Navbar />
	<main id="main-content" tabindex="-1" class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
