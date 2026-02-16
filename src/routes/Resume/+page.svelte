<script lang="ts">
	export let data;
	import { Button, Card } from 'flowbite-svelte';
	import { FilePdfSolid, ArrowDownToBracketOutline } from 'flowbite-svelte-icons';
	import { spring } from 'svelte/motion';

	const count = spring(0, {
		stiffness: 0.1,
		damping: 0.25
	});

	$: count.set(data.downloadCount);
</script>

<div class="min-h-screen bg-transparent py-12 px-4 transition-colors duration-300">
	<div class="max-w-5xl mx-auto">
		<!-- Hero / Header -->
		<div class="text-center mb-10 mt-4 animate-fade-in-up">
			<h1 class="text-6xl font-bold font-pixel mb-4 text-gray-900 dark:text-white">
				MY <span class="text-primary-600 dark:text-primary-400">RESUME</span>
			</h1>
			<p class="text-xl font-mono text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
				> A snapshot of my professional journey, skills, and projects.
			</p>

			<div class="flex flex-col items-center gap-4">
				<div class="retro-card w-full max-w-xs p-0 bg-amber-50 dark:bg-gray-900">
					<div class="flex flex-col items-center gap-3 py-6 px-4">
						<div
							class="p-3 bg-amber-100 dark:bg-amber-900/30 border-2 border-gray-900 dark:border-gray-500 text-primary-600 dark:text-primary-400 mb-1 shadow-hard dark:shadow-none"
						>
							<ArrowDownToBracketOutline class="w-8 h-8" />
						</div>
						<div class="text-center font-mono">
							<div class="text-3xl font-bold text-gray-900 dark:text-white tabular-nums">
								{Math.floor($count)}
							</div>
							<div
								class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide"
							>
								Total Downloads
							</div>
						</div>
						<Button
							href="/api/resume/download"
							on:click={() => count.update((n) => n + 1)}
							class="w-full mt-2 retro-btn rounded-none"
						>
							[ DOWNLOAD PDF ]
						</Button>
					</div>
				</div>
			</div>
		</div>

		<!-- PDF Viewer Container -->
		<div
			class="retro-card p-2 md:p-4 animate-fade-in-up delay-100 h-[80vh] bg-white dark:bg-gray-900"
		>
			<div
				class="border-b-2 border-gray-900 dark:border-gray-500 pb-2 mb-4 font-mono text-gray-500 dark:text-gray-400 text-sm px-2"
			>
				preview.pdf
			</div>
			<!-- 
          Using Google Docs Viewer as a fallback or object embed. 
          For best cross-browser PDF embedding, <object> or <iframe> is standard.
       -->
			<object
				title="Enes Yesil Resume"
				data="/enes_yesil_resume.pdf"
				type="application/pdf"
				class="w-full h-full border-2 border-gray-900 dark:border-gray-500"
			>
				<div
					class="flex flex-col items-center justify-center h-full text-center p-8 bg-amber-50 dark:bg-gray-800"
				>
					<FilePdfSolid class="w-16 h-16 text-primary-400 mb-4" />
					<p class="text-gray-600 dark:text-gray-300 mb-4 font-mono">
						It appears you don't have a PDF plugin for this browser. No biggie... you can <a
							href="/enes_yesil_resume.pdf"
							class="text-primary-600 dark:text-primary-400 font-bold hover:underline"
							>click here to download the PDF file.</a
						>
					</p>
				</div>
			</object>
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
	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
