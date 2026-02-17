<script lang="ts">
	export let title: string = 'Enes Yesil | Software Engineer & Distributed Systems Enthusiast';
	export let description: string =
		"I'm a software developer interested in distributed systems, data infrastructure, and AI/ML. Currently in my final year of Computer Science at York University.";
	export let keywords: string =
		'Enes Yesil, Software Engineer, Distributed Systems, Data Infrastructure, AI, ML, York University';
	export let image: string = 'https://enesyesil.me/favicon.svg';
	export let url: string = 'https://enesyesil.me';
	export let type: string = 'website';
	export let site_name: string = 'Enes Yesil';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<link rel="canonical" href={url} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content={site_name} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
</svelte:head>
