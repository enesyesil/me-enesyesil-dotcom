<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { ArrowUpRightFromSquareOutline, CodeBranchOutline } from 'flowbite-svelte-icons';
	import { projects } from '$lib/data/projects';
</script>

<div class="min-h-screen py-24 px-4 bg-transparent transition-colors duration-300">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<div
				class="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 font-semibold tracking-wide text-sm uppercase mb-3 font-mono"
			>
				<span class="text-xl">🚀</span> Portfolio
			</div>
			<h1 class="text-6xl font-bold font-pixel text-gray-900 dark:text-white mb-6">
				ALL <span class="text-primary-600 dark:text-primary-400">PROJECTS</span>
			</h1>
			<p class="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto font-mono">
				> A mix of prototypes, experiments, and ideas in progress. Sometimes the code shouldn’t work, but occasionally does 🙃
			</p>
		</div>

		<!-- Bento Grid Layout -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each projects as project}
				<div class="retro-card p-8 group flex flex-col h-full bg-amber-50 dark:bg-gray-900">
					<div class="flex flex-col h-full">
						<div
							class="h-56 mb-6 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-500 flex items-center justify-center overflow-hidden relative"
						>
							{#if project.image && project.image.startsWith('/')}
								<img
									src={project.image}
									alt={project.title}
									class="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
								/>
							{:else}
								<span
									class="text-4xl font-bold font-pixel text-primary-600/50 dark:text-primary-400/50"
									>{project.title.split(' ')[0].toUpperCase()}</span
								>
							{/if}
						</div>

						<div class="flex-1 flex flex-col">
							<h2 class="text-2xl font-bold font-mono text-gray-900 dark:text-white mb-3 uppercase">
								{project.title}
							</h2>
							<p
								class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed mb-6 flex-grow"
							>
								{project.description}
							</p>

							<div class="flex flex-wrap gap-2 mb-6 font-mono text-xs">
								{#each project.tags as tag}
									<span
										class="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white"
										>[{tag}]</span
									>
								{/each}
							</div>

							<div class="mt-auto flex gap-3">
								{#if project.link}
									<Button href={project.link} class="retro-btn text-xs rounded-none flex-1">
										VIEW <ArrowUpRightFromSquareOutline class="w-4 h-4 ml-2" />
									</Button>
								{/if}
								{#if project.github}
									<Button
										href={project.github}
										target="_blank"
										class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-900 dark:border-gray-500 px-4 py-2 text-xs font-bold font-mono shadow-hard dark:shadow-none hover:shadow-hard-lg hover:-translate-y-0.5 transition-all flex-1 rounded-none flex items-center justify-center"
									>
										<CodeBranchOutline class="w-4 h-4 mr-2" /> CODE
									</Button>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
