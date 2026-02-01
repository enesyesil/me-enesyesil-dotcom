<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { LinkOutline, GithubSolid, EnvelopeSolid, ArrowLeftOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';

	export let data: PageData;
	$: project = data.project;
</script>

<div class="min-h-screen bg-transparent py-10">
	<div class="max-w-4xl mx-auto px-4">
		<!-- Back Button -->
		<div class="mb-4">
			<Button
				href="/Projects"
				color="light"
				size="sm"
				class="!bg-transparent !border-none !text-gray-500 hover:!text-primary-600 pl-0"
			>
				<ArrowLeftOutline class="w-4 h-4 mr-2" /> Back to Projects
			</Button>
		</div>

		<!-- Header -->
		<div class="text-center mb-12 mt-4 animate-fade-in-up">
			<h1 class="heading-primary mb-6">
				{project.title}
			</h1>
			<p class="text-xl font-light text-gray-600 max-w-2xl mx-auto">
				{project.description}
			</p>
		</div>

		<!-- Image -->
		<div class="bg-white/50 p-2 rounded-3xl mb-12 shadow-soft animate-fade-in-up delay-100">
			{#if project.image && project.image.startsWith('/')}
				<img class="w-full rounded-2xl" src={project.image} alt={project.title} />
			{:else}
				<div
					class="w-full h-80 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100"
				>
					<span class="text-6xl font-bold text-primary-600/30">{project.title.split(' ')[0]}</span>
				</div>
			{/if}
		</div>

		<!-- Content Blocks -->
		<div class="space-y-12 animate-fade-in-up delay-200">
			<!-- Overview / Long Description -->
			{#if project.longDescription}
				<div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
					<h2 class="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
					<p class="text-lg text-gray-600 leading-relaxed">
						{project.longDescription}
					</p>
				</div>
			{/if}

			<!-- Key Features -->
			{#if project.features && project.features.length > 0}
				<div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
					<h2 class="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
					<ul class="grid md:grid-cols-1 gap-4">
						{#each project.features as feature}
							<li
								class="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100/50"
							>
								<span class="mt-1.5 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></span>
								<span class="text-gray-700 leading-relaxed">{feature}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			<!-- What I Learned -->
			{#if project.learnings && project.learnings.length > 0}
				<div
					class="bg-amber-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-amber-100"
				>
					<h2 class="text-2xl font-bold text-gray-900 mb-6">What I Learned</h2>
					<ul class="space-y-4">
						{#each project.learnings as learning}
							<li class="flex items-start gap-3">
								<span class="mt-1 text-amber-500">✨</span>
								<span class="text-gray-700 leading-relaxed font-medium">{learning}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			<!-- Tools & Technologies -->
			{#if (project.techStackDetail && project.techStackDetail.length > 0) || project.tags.length > 0}
				<div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
					<h2 class="text-2xl font-bold text-gray-900 mb-6">Tools & Technologies</h2>
					<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
						{#each project.techStackDetail || project.tags as tech}
							<div class="flex flex-col gap-1 p-4 bg-amber-50 rounded-xl border border-amber-100">
								<span class="font-bold text-gray-900">{tech}</span>
							</div>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Links Grid -->
			<div>
				<h2 class="heading-primary text-2xl md:text-3xl text-center mb-8">Links & Resources</h2>
				<div class="grid md:grid-cols-3 gap-6">
					<!-- Website/Demo Link -->
					{#if project.link && !project.link.startsWith('/Projects/')}
						<!-- Note: Logic adjustment needed here as currently link points to THIS page. 
                    Ideally 'link' in data/projects should be external URL, and internal link used for routing. 
                    For now, reusing structure but checking if it's a real external link or disabling.
               -->
						<a
							href={project.link}
							target="_blank"
							class="group bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center"
						>
							<div
								class="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors"
							>
								<LinkOutline class="w-6 h-6" />
							</div>
							<h3 class="font-bold text-gray-900 mb-2">Website</h3>
							<p class="text-sm text-gray-500 mb-4">View Live Project</p>
							<span class="text-primary-600 font-medium text-sm mt-auto group-hover:underline"
								>Visit Site &rarr;</span
							>
						</a>
					{:else}
						<div
							class="group bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all text-center flex flex-col items-center opacity-75 grayscale cursor-not-allowed"
						>
							<div
								class="w-12 h-12 bg-gray-100 text-gray-500 rounded-xl flex items-center justify-center mb-4"
							>
								<LinkOutline class="w-6 h-6" />
							</div>
							<h3 class="font-bold text-gray-900 mb-2">Website</h3>
							<p class="text-sm text-gray-500 mb-4">Not Available</p>
							<span class="text-gray-400 font-medium text-sm mt-auto">Offline</span>
						</div>
					{/if}

					<!-- GitHub Link -->
					{#if project.github}
						<a
							href={project.github}
							target="_blank"
							class="group bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center"
						>
							<div
								class="w-12 h-12 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-800 group-hover:text-white transition-colors"
							>
								<GithubSolid class="w-6 h-6" />
							</div>
							<h3 class="font-bold text-gray-900 mb-2">GitHub</h3>
							<p class="text-sm text-gray-500 mb-4">Explore the code</p>
							<span class="text-gray-700 font-medium text-sm mt-auto group-hover:underline"
								>View Repo &rarr;</span
							>
						</a>
					{:else}
						<div
							class="group bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all text-center flex flex-col items-center opacity-75 grayscale cursor-not-allowed"
						>
							<!-- Placeholder if no github -->
						</div>
					{/if}

					<!-- Email/Contact Link -->
					<a
						href="mailto:enesy@my.yorku.ca"
						class="group bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center"
					>
						<div
							class="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors"
						>
							<EnvelopeSolid class="w-6 h-6" />
						</div>
						<h3 class="font-bold text-gray-900 mb-2">Email</h3>
						<p class="text-sm text-gray-500 mb-4">Questions?</p>
						<span class="text-amber-600 font-medium text-sm mt-auto group-hover:underline"
							>Contact Me &rarr;</span
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
