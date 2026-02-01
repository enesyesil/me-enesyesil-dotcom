<script>
	import { Button } from 'flowbite-svelte';
	import { CodeBranchOutline, ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
	import { projects } from '$lib/data/projects';
</script>

<section class="section-padding" id="projects">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<div
				class="flex items-center justify-center gap-2 text-primary-600 font-semibold tracking-wide text-sm uppercase mb-3"
			>
				<span class="text-xl">✨</span> Portfolio
			</div>
			<h2 class="heading-primary">
				Featured <span class="heading-accent">Projects</span>
			</h2>
			<p class="text-gray-500 mt-4 max-w-lg mx-auto">
				Some of the things I've built that I'm proud of.
			</p>
		</div>

		<!-- Bento Grid Layout -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
			{#each projects.filter((p) => p.featured).slice(0, 4) as project, i}
				<div
					class="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col {i ===
					0
						? 'md:col-span-2 p-8'
						: ''}"
				>
					<div class={i === 0 ? 'flex flex-col md:flex-row gap-8' : 'flex flex-col h-full'}>
						<div
							class="{i === 0
								? 'flex-shrink-0 w-full md:w-64 h-48'
								: 'h-40 mb-5'} bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100 overflow-hidden relative"
						>
							{#if project.image && project.image.startsWith('/')}
								<img
									src={project.image}
									alt={project.title}
									class="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
								/>
							{:else}
								<span class="text-2xl font-bold text-primary-600/30"
									>{project.title.split(' ')[0]}</span
								>
							{/if}
						</div>

						<div class="flex-1 flex flex-col">
							{#if i === 0}
								<div class="flex items-center gap-2 mb-3">
									<span class="px-3 py-1 bg-primary-600 text-white text-xs rounded-full font-medium"
										>Featured</span
									>
								</div>
							{/if}

							<h3 class="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
							<p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
								{project.description}
							</p>

							<div class="flex flex-wrap gap-2 mb-5">
								{#each project.tags as tag}
									<span
										class="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium"
										>{tag}</span
									>
								{/each}
							</div>

							<div class="flex gap-2 mt-auto">
								{#if project.link}
									<Button
										href={project.link}
										class="{i === 0
											? 'bg-primary-600 hover:bg-primary-700 text-white'
											: 'flex-1 bg-primary-600 hover:bg-primary-700 text-white'} px-4 py-2 rounded-lg text-sm font-medium transition-all"
									>
										View Project <ArrowUpRightFromSquareOutline class="w-4 h-4 ml-1" />
									</Button>
								{/if}
								{#if project.github}
									<Button
										href={project.github}
										target="_blank"
										class="{i === 0
											? 'bg-white text-gray-700 border border-gray-200'
											: 'flex-1 bg-white text-gray-700 shadow-sm hover:bg-gray-50'} hover:shadow-md px-4 py-2 rounded-lg text-sm font-medium transition-all"
									>
										<CodeBranchOutline class="w-4 h-4 mr-1" /> Code
									</Button>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="text-center">
			<Button
				href="/Projects"
				class="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-3 rounded-xl font-medium shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-0.5"
			>
				View All Projects
			</Button>
		</div>
	</div>
</section>
