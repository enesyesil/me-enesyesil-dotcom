<script lang="ts">
	export let title: string = 'Enes Yesil | Software Engineer';
	export let description: string =
		'Software Engineer at RAVL in Toronto, focused on AI and Data infrastructure, backend systems, and platform engineering.';
	export let keywords: string =
		'Enes Yesil, Backend Engineer, Platform Engineer, Software Engineer, Toronto, Canada, New Grad, Go, Golang, AWS, EKS, Kubernetes, Docker, Terraform, CI/CD, GitHub Actions, Microservices, Distributed Systems, gRPC, REST APIs, PostgreSQL, Redis, Observability, Prometheus, Grafana, Data Engineering, Apache Spark, Apache Iceberg, Data Pipelines, Lakehouse, MLOps, LLMOps, AI Infrastructure';
	export let image: string =
		'https://enesyesil.me/api/og?title=Enes%20Yesil&category=Software%20Engineer';
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
