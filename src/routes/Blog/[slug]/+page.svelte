<script>
	import { ArrowLeftOutline } from 'flowbite-svelte-icons';
	export let data;
</script>

<div class="min-h-screen bg-transparent py-12 px-4 transition-colors duration-300">
	<article class="max-w-3xl mx-auto">
		<!-- Navigation -->
		<div class="mb-8">
			<a
				href="/Blog"
				class="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors group"
			>
				<div
					class="w-8 h-8 rounded-full bg-white/50 dark:bg-gray-800/50 flex items-center justify-center mr-2 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors"
				>
					<ArrowLeftOutline class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
				</div>
				Back to Blog
			</a>
		</div>

		<!-- Article Container -->
		<div
			class="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-hard dark:shadow-none border-2 border-gray-900 dark:border-gray-500 p-8 md:p-12 animate-fade-in-up"
		>
			<!-- Header -->
			<header class="text-center mb-12">
				{#if data.data.tags}
					<div class="flex flex-wrap justify-center gap-2 mb-6">
						{#each data.data.tags as tag}
							<span
								class="px-3 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-mono font-bold tracking-wide uppercase border-2 border-gray-900 dark:border-gray-500 shadow-sm"
								>[{tag}]</span
							>
						{/each}
					</div>
				{/if}

				<h1
					class="text-3xl md:text-5xl font-bold font-pixel text-gray-900 dark:text-white mb-6 leading-tight uppercase"
				>
					{data.data.title}
				</h1>

				<div
					class="flex items-center justify-center gap-4 text-gray-500 dark:text-gray-400 text-sm font-mono font-bold uppercase"
				>
					<time datetime={data.data.date} class="flex items-center">
						📅 {new Date(data.data.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</time>
				</div>
			</header>

			<!-- Hero Image -->
			{#if data.data.image}
				<div
					class="overflow-hidden shadow-hard dark:shadow-none mb-12 w-full aspect-video relative border-2 border-gray-900 dark:border-gray-500"
				>
					<img
						src={data.data.image}
						alt={data.data.title}
						class="absolute inset-0 w-full h-full object-cover"
					/>
				</div>
			{/if}

			<!-- Description / Lead -->
			{#if data.data.description}
				<div
					class="mb-12 p-6 bg-amber-50 dark:bg-gray-800/50 border-l-4 border-primary-500 font-mono italic text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
				>
					> {data.data.description}
				</div>
			{/if}

			<!-- Content -->
			<div
				class="prose prose-lg prose-stone dark:prose-invert max-w-none font-mono
           prose-headings:font-bold prose-headings:font-pixel prose-headings:uppercase prose-headings:text-gray-900 dark:prose-headings:text-white
           prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
           prose-img:border-2 prose-img:border-gray-900 dark:prose-img:border-gray-500 prose-img:shadow-hard dark:prose-img:shadow-none
           prose-strong:text-primary-700 dark:prose-strong:text-primary-300
           prose-blockquote:border-l-4 prose-blockquote:border-l-primary-500 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:italic
           first-letter:text-5xl first-letter:font-bold first-letter:text-primary-600 dark:first-letter:text-primary-400 first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px]"
			>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html data.content}
			</div>
		</div>
	</article>
</div>

<style>
	.animate-fade-in-up {
		animation: fadeInUp 0.8s ease-out forwards;
		opacity: 0;
		transform: translateY(20px);
	}
	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
