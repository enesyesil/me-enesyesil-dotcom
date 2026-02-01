<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { ArrowUpRightFromSquareOutline, CodeBranchOutline } from 'flowbite-svelte-icons';
	import { projects } from '$lib/data/projects';
</script>

<div class="min-h-screen py-24 px-4">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<div
				class="flex items-center justify-center gap-2 text-primary-600 font-semibold tracking-wide text-sm uppercase mb-3"
			>
				<span class="text-xl">🚀</span> Portfolio
			</div>
			<h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
				All <span class="text-primary-600">Projects</span>
			</h1>
			<p class="text-gray-600 text-lg max-w-2xl mx-auto">
				A collection of projects exploring AI/ML, data engineering, and web development.
			</p>
		</div>

		<!-- Bento Grid Layout -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each projects as project, i}
				<div
					class="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 {i ===
					0
						? 'md:col-span-2'
						: 'flex flex-col'}"
				>
					<div class={i === 0 ? 'flex flex-col lg:flex-row gap-10' : 'flex flex-col h-full'}>
						<div
							class="{i === 0
								? 'flex-shrink-0 w-full lg:w-96 h-64'
								: 'h-56 mb-6'} bg-amber-50 rounded-2xl flex items-center justify-center overflow-hidden relative border border-amber-100"
						>
							{#if project.image && project.image.startsWith('/')}
								<img
									src={project.image}
									alt={project.title}
									class="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
								/>
							{:else}
								<span class="text-4xl font-bold text-primary-600/30"
									>{project.title.split(' ')[0]}</span
								>
							{/if}
						</div>

						<div class={i === 0 ? 'flex-1 flex flex-col justify-center' : 'flex-1 flex flex-col'}>
							<h2 class="{i === 0 ? 'text-3xl' : 'text-2xl'} font-bold text-gray-900 mb-3">
								{project.title}
							</h2>
							<p class="text-gray-600 {i === 0 ? 'text-lg' : ''} leading-relaxed mb-6 flex-grow">
								{project.description}
							</p>

							<div class="flex flex-wrap gap-2 mb-6">
								{#each project.tags as tag}
									<span
										class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium"
										>{tag}</span
									>
								{/each}
							</div>

							<div class={i === 0 ? '' : 'mt-auto flex gap-2'}>
								{#if project.link}
									<Button
										href={project.link}
										class="{i === 0
											? 'bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl text-base'
											: 'w-full bg-white text-gray-800 hover:bg-gray-50 shadow-soft hover:shadow-md px-4 py-3 rounded-xl border border-transparent'} font-medium transition-all shadow-md hover:shadow-lg"
									>
										View Project <ArrowUpRightFromSquareOutline
											class="{i === 0 ? 'w-5 h-5' : 'w-4 h-4'} ml-2"
										/>
									</Button>
								{/if}
								{#if project.github}
									<Button
										href={project.github}
										target="_blank"
										class="{i === 0
											? 'ml-4 bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-xl text-base'
											: 'w-full bg-white text-gray-800 hover:bg-gray-50 shadow-soft hover:shadow-md px-4 py-3 rounded-xl border border-transparent'} font-medium transition-all shadow-md hover:shadow-lg"
									>
										<CodeBranchOutline class="{i === 0 ? 'w-5 h-5' : 'w-4 h-4'} mr-2" /> Code
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
