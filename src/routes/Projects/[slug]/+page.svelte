<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { LinkOutline, GithubSolid, EnvelopeSolid, ArrowLeftOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';

	export let data: PageData;
	$: project = data.project;
</script>

<div
	class="min-h-screen bg-transparent dark:bg-gray-950 py-10 transition-colors duration-300 font-mono"
>
	<div class="max-w-4xl mx-auto px-4">
		<!-- Back Button -->
		<div class="mb-8">
			<Button
				href="/Projects"
				color="light"
				size="sm"
				class="!bg-white dark:!bg-gray-900 !border-2 !border-gray-900 dark:!border-gray-500 !text-gray-900 dark:!text-white hover:!bg-gray-100 dark:hover:!bg-gray-800 shadow-hard dark:shadow-none pl-4 pr-6 py-2 rounded-none transition-transform active:translate-y-0.5 active:shadow-none"
			>
				<ArrowLeftOutline class="w-4 h-4 mr-2" /> BACK TO PROJECTS
			</Button>
		</div>

		<!-- Header -->
		<div class="text-center mb-12 mt-4 animate-fade-in-up">
			<h1
				class="heading-primary mb-6 text-gray-900 dark:text-white uppercase tracking-wider text-4xl md:text-6xl"
			>
				{project.title}
			</h1>
			<p
				class="text-xl font-bold font-mono text-gray-600 dark:text-gray-300 max-w-2xl mx-auto border-y-2 border-gray-900 dark:border-gray-500 py-4 border-dashed"
			>
				> {project.description}
			</p>
		</div>

		<!-- Image -->
		<div
			class="bg-white dark:bg-gray-900 p-2 border-2 border-gray-900 dark:border-gray-500 mb-12 shadow-hard dark:shadow-none animate-fade-in-up delay-100"
		>
			{#if project.image && project.image.startsWith('/')}
				<img
					class="w-full max-h-[700px] object-cover object-top border border-gray-900 dark:border-gray-500 bg-gray-50 dark:bg-gray-800"
					src={project.image}
					alt={project.title}
				/>
			{:else}
				<div
					class="w-full h-80 bg-amber-50 dark:bg-gray-800 flex items-center justify-center border border-gray-900 dark:border-gray-500"
				>
					<span class="text-6xl font-pixel text-gray-300 dark:text-gray-600 uppercase"
						>{project.title.split(' ')[0]}</span
					>
				</div>
			{/if}
		</div>

		<!-- Content Blocks -->
		<div class="space-y-12 animate-fade-in-up delay-200">
			<!-- Overview / Long Description -->
			{#if project.longDescription}
				<div
					class="bg-white dark:bg-gray-900 p-8 shadow-hard dark:shadow-none border-2 border-gray-900 dark:border-gray-500"
				>
					<h2
						class="text-2xl font-bold font-pixel text-gray-900 dark:text-white mb-4 uppercase flex items-center gap-2"
					>
						<span class="text-primary-600 dark:text-primary-400">></span> Overview
					</h2>
					<div class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-mono space-y-4">
						{#each project.longDescription.split('\n') as p}
							{#if p.startsWith('### ')}
								<h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-2 border-b-2 border-gray-200 dark:border-gray-800 pb-2">
									{p.replace('### ', '')}
								</h3>
							{:else if p.trim() !== ''}
								<p>{@html p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
							{/if}
						{/each}
					</div>
				</div>
			{/if}

			<!-- Key Features -->
			{#if project.features && project.features.length > 0}
				<div
					class="bg-white dark:bg-gray-900 p-8 shadow-hard dark:shadow-none border-2 border-gray-900 dark:border-gray-500"
				>
					<h2
						class="text-2xl font-bold font-pixel text-gray-900 dark:text-white mb-6 uppercase flex items-center gap-2"
					>
						<span class="text-primary-600 dark:text-primary-400">></span> Key Features
					</h2>
					<ul class="grid md:grid-cols-1 gap-4">
						{#each project.features as feature}
							<li
								class="flex items-start gap-4 p-4 bg-amber-50 dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-500 hover:translate-x-1 transition-transform"
							>
								<span
									class="mt-1.5 w-3 h-3 bg-primary-600 dark:bg-primary-500 flex-shrink-0 shadow-sm border border-black dark:border-white"
								></span>
								<span class="text-gray-900 dark:text-white font-mono leading-relaxed font-bold"
									>{feature}</span
								>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			<!-- What I Learned -->
			{#if project.learnings && project.learnings.length > 0}
				<div
					class="bg-white dark:bg-gray-900 p-8 shadow-hard dark:shadow-none border-2 border-gray-900 dark:border-gray-500"
				>
					<h2
						class="text-2xl font-bold font-pixel text-gray-900 dark:text-white mb-6 uppercase flex items-center gap-2"
					>
						<span class="text-primary-600 dark:text-primary-400">?</span> What I Learned
					</h2>
					<ul class="space-y-4">
						{#each project.learnings as learning}
							<li class="flex items-start gap-3">
								<span class="mt-1 text-primary-600 dark:text-primary-400">>></span>
								<span class="text-gray-700 dark:text-gray-300 leading-relaxed font-mono">{learning}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			<!-- Tools & Technologies -->
			{#if (project.techStackDetail && project.techStackDetail.length > 0) || project.tags.length > 0}
				<div
					class="bg-white dark:bg-gray-900 p-8 shadow-hard dark:shadow-none border-2 border-gray-900 dark:border-gray-500"
				>
					<h2
						class="text-2xl font-bold font-pixel text-gray-900 dark:text-white mb-6 uppercase flex items-center gap-2"
					>
						<span class="text-primary-600 dark:text-primary-400">></span> Tech Stack
					</h2>
					<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
						{#each project.techStackDetail || project.tags as tech}
							<div
								class="flex flex-col gap-1 p-4 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-500 hover:-translate-y-1 transition-transform shadow-sm"
							>
								<span
									class="font-bold font-mono text-gray-900 dark:text-white text-center uppercase"
									>[{tech}]</span
								>
							</div>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Links Grid -->
			<div>
				<h2
					class="heading-primary text-2xl md:text-3xl text-center mb-8 text-gray-900 dark:text-white uppercase"
				>
					Links & Resources
				</h2>
				<div class="grid md:grid-cols-3 gap-6">
					<!-- Website/Demo Link -->
					{#if project.website}
						<a
							href={project.website}
							target="_blank"
							class="group bg-white dark:bg-gray-900 p-6 shadow-hard dark:shadow-none border-2 border-gray-900 dark:border-gray-500 hover:-translate-y-1 transition-all text-center flex flex-col items-center hover:bg-primary-50 dark:hover:bg-gray-800"
						>
							<div
								class="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center mb-4 border-2 border-transparent group-hover:border-primary-600 dark:group-hover:border-primary-400 transition-colors"
							>
								<LinkOutline class="w-6 h-6" />
							</div>
							<h3 class="font-bold font-pixel text-gray-900 dark:text-white mb-2 uppercase text-sm">
								Website
							</h3>
							<p class="text-xs font-mono text-gray-500 dark:text-gray-400 mb-4 uppercase">
								View Live Project
							</p>
							<span
								class="text-primary-600 dark:text-primary-400 font-bold font-mono text-sm mt-auto group-hover:underline"
								>[ VISIT ]</span
							>
						</a>
					{:else}
						<div
							class="group bg-gray-100 dark:bg-gray-800 p-6 shadow-none border-2 border-gray-300 dark:border-gray-600 text-center flex flex-col items-center opacity-75 cursor-not-allowed"
						>
							<div
								class="w-12 h-12 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 flex items-center justify-center mb-4"
							>
								<LinkOutline class="w-6 h-6" />
							</div>
							<h3
								class="font-bold font-pixel text-gray-500 dark:text-gray-400 mb-2 uppercase text-sm"
							>
								Website
							</h3>
							<p class="text-xs font-mono text-gray-400 dark:text-gray-500 mb-4 uppercase">
								Not Available
							</p>
							<span class="text-gray-400 dark:text-gray-500 font-bold font-mono text-sm mt-auto"
								>[ OFFLINE ]</span
							>
						</div>
					{/if}

					<!-- GitHub Link -->
					{#if project.github}
						<a
							href={project.github}
							target="_blank"
							class="group bg-white dark:bg-gray-900 p-6 shadow-hard dark:shadow-none border-2 border-gray-900 dark:border-gray-500 hover:-translate-y-1 transition-all text-center flex flex-col items-center hover:bg-gray-50 dark:hover:bg-gray-800"
						>
							<div
								class="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center mb-4"
							>
								<GithubSolid class="w-6 h-6" />
							</div>
							<h3 class="font-bold font-pixel text-gray-900 dark:text-white mb-2 uppercase text-sm">
								GitHub
							</h3>
							<p class="text-xs font-mono text-gray-500 dark:text-gray-400 mb-4 uppercase">
								Explore the code
							</p>
							<span
								class="text-gray-900 dark:text-white font-bold font-mono text-sm mt-auto group-hover:underline"
								>[ SOURCE ]</span
							>
						</a>
					{:else}
						<div
							class="group bg-gray-100 dark:bg-gray-800 p-6 shadow-none border-2 border-gray-300 dark:border-gray-600 text-center flex flex-col items-center opacity-75 cursor-not-allowed"
						>
							<!-- Placeholder if no github -->
						</div>
					{/if}

					<!-- Email/Contact Link -->
					<a
						href="mailto:enesy@my.yorku.ca"
						class="group bg-white dark:bg-gray-900 p-6 shadow-hard dark:shadow-none border-2 border-gray-900 dark:border-gray-500 hover:-translate-y-1 transition-all text-center flex flex-col items-center hover:bg-amber-50 dark:hover:bg-gray-800"
					>
						<div
							class="w-12 h-12 bg-amber-500 text-white flex items-center justify-center mb-4 border-2 border-black"
						>
							<EnvelopeSolid class="w-6 h-6" />
						</div>
						<h3 class="font-bold font-pixel text-gray-900 dark:text-white mb-2 uppercase text-sm">
							Email
						</h3>
						<p class="text-xs font-mono text-gray-500 dark:text-gray-400 mb-4 uppercase">
							Questions?
						</p>
						<span
							class="text-amber-600 dark:text-amber-400 font-bold font-mono text-sm mt-auto group-hover:underline"
							>[ CONTACT ]</span
						>
					</a>
				</div>
			</div>
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
