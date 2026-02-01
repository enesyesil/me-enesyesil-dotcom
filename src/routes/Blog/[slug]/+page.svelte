<script>
	import { Button } from 'flowbite-svelte';
	import { ArrowLeftOutline } from 'flowbite-svelte-icons';
	export let data;
</script>

<div class="min-h-screen bg-transparent py-12 px-4">
	<article class="max-w-3xl mx-auto">
		<!-- Navigation -->
		<div class="mb-8">
			<a
				href="/Blog"
				class="inline-flex items-center text-gray-500 hover:text-primary-600 font-medium transition-colors group"
			>
				<div
					class="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center mr-2 group-hover:bg-primary-100 transition-colors"
				>
					<ArrowLeftOutline class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
				</div>
				Back to Blog
			</a>
		</div>

		<!-- Article Container -->
		<div
			class="bg-white/90 backdrop-blur-md rounded-3xl shadow-soft p-8 md:p-12 animate-fade-in-up"
		>
			<!-- Header -->
			<header class="text-center mb-12">
				{#if data.data.tags}
					<div class="flex flex-wrap justify-center gap-2 mb-6">
						{#each data.data.tags as tag}
							<span
								class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium tracking-wide uppercase"
								>{tag}</span
							>
						{/each}
					</div>
				{/if}

				<h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
					{data.data.title}
				</h1>

				<div class="flex items-center justify-center gap-4 text-gray-500 text-sm font-medium">
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
					class="rounded-2xl overflow-hidden shadow-sm mb-12 w-full aspect-video relative border border-gray-100"
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
					class="mb-12 p-6 bg-amber-50 rounded-2xl border-l-4 border-primary-500 italic text-gray-700 text-lg leading-relaxed"
				>
					{data.data.description}
				</div>
			{/if}

			<!-- Content -->
			<div
				class="prose prose-lg prose-stone max-w-none
           prose-headings:font-bold prose-headings:text-gray-900
           prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
           prose-img:rounded-2xl prose-img:shadow-sm
           prose-strong:text-primary-700
           prose-blockquote:border-l-primary-400 prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
           first-letter:text-5xl first-letter:font-bold first-letter:text-primary-600 first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px]"
			>
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
