<script>
	import { Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<div class="min-h-screen bg-transparent py-10">
	<div class="max-w-4xl mx-auto px-4">
		<!-- Hero Section -->
		<div class="text-center mb-16 mt-8 animate-fade-in-up">
			<div
				class="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 font-semibold tracking-wide text-sm uppercase mb-3"
			>
				<span class="text-xl">👋</span> Introduction
			</div>
			<h1 class="text-6xl font-bold font-pixel mb-6 text-gray-900 dark:text-white">
				ABOUT <span class="text-primary-600 dark:text-primary-400">ME</span>
			</h1>
			<p
				class="text-xl font-mono text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
			>
				> Hi, I’m <strong
					class="text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/40 px-1"
					>Enes</strong
				> — a software engineer and recent York University CS grad, interested in backend and distributed systems.
			</p>
		</div>

		<!-- Personal Story / Mission -->
		<div
			class="retro-card p-8 md:p-12 mb-16 animate-fade-in-up delay-100 bg-amber-50 dark:bg-gray-900"
		>
			<h2
				class="text-2xl font-bold font-mono text-gray-900 dark:text-white mb-6 flex items-center gap-3 uppercase"
			>
				<span
					class="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 border-2 border-gray-900 dark:border-gray-500 flex items-center justify-center text-xl shadow-hard dark:shadow-none"
					>🚀</span
				>
				My Journey
			</h2>
			<div
				class="prose prose-lg font-mono text-gray-600 dark:text-gray-300 prose-headings:text-gray-900 dark:prose-headings:text-white prose-strong:text-primary-700 dark:prose-strong:text-primary-400 leading-relaxed"
			>
				<p>
					My journey has been shaped by adaptability. Growing up and moving
					between cities and countries taught me resilience. I carry that mindset into my career and
					how I approach problems.
				</p>
				<p>
					I like building and designing systems, working with distributed systems and data
					infrastructure, and trying to make things that are simple, reliable, and practical.
				</p>
			</div>

			<!-- Special Card: Outside of Work -->
			<div class="mt-8 p-6 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-500 shadow-sm relative">
				<div class="absolute -top-3 left-4 bg-amber-50 dark:bg-gray-900 px-2 font-mono text-xs font-bold text-primary-600 dark:text-primary-400">
					[ PERSONAL_LOG ]
				</div>
				<p class="font-mono text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
					Outside of work, I’m into history, economics, and soccer ⚽️ (yeah, football 😄). I like exploring new places around the city. I also enjoy quiet time learning on my own: reading, taking notes, and going deep on topics that catch my attention.
				</p>
			</div>
		</div>

		<!-- Professional Background -->
		<div class="mb-16 animate-fade-in-up delay-200">
			<h2 class="text-4xl font-bold font-pixel text-center text-gray-900 dark:text-white mb-10">
				PROFESSIONAL <span class="text-primary-600 dark:text-primary-400">BACKGROUND</span>
			</h2>

			<div class="space-y-6">
				<div
					class="retro-card p-8 bg-amber-50 dark:bg-gray-900 border-l-[6px] border-l-primary-500"
				>
					<div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
						<h3 class="text-xl font-bold font-mono text-gray-900 dark:text-white">
							Product Owner & Software Engineer
						</h3>
						<span
							class="text-sm font-bold font-mono text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 px-3 py-1 shadow-hard dark:shadow-none w-fit mt-2 md:mt-0"
							>Best Lassonde (Fisor Analytics)</span
						>
					</div>
					<p class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed">
						Built the orchestration layer for Fisor Analytics, connecting data + analysis components
						into a predictable workflow using <strong>Go</strong>. Added a
						<strong>Spark pipeline</strong> for transforming raw datasets and a
						<strong>Redis</strong> memory layer to reuse context between runs. Regularly demoed progress
						to advisors and adjusted based on feedback.
					</p>
				</div>

				<div
					class="retro-card p-8 bg-amber-50 dark:bg-gray-900 border-l-[6px] border-l-primary-300"
				>
					<div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
						<h3 class="text-xl font-bold font-mono text-gray-900 dark:text-white">
							Research Assistant
						</h3>
						<span
							class="text-sm font-bold font-mono text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 px-3 py-1 shadow-hard dark:shadow-none w-fit mt-2 md:mt-0"
							>York University</span
						>
					</div>
					<p class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed">
						Worked on an accessibility-focused HCI project supporting thousands of students. Turned
						research into practical UI rules and implemented them as a reusable
						<strong>React</strong> component library aligned with accessibility standards. Also built
						an end-to-end example app and a <strong>TypeScript</strong> tool to make resources easier
						to access.
					</p>
				</div>

				<div class="retro-card p-8 bg-amber-50 dark:bg-gray-900 border-l-[6px] border-l-amber-400">
					<div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
						<h3 class="text-xl font-bold font-mono text-gray-900 dark:text-white">
							Software Developer Intern
						</h3>
						<span
							class="text-sm font-bold font-mono text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 px-3 py-1 shadow-hard dark:shadow-none w-fit mt-2 md:mt-0"
							>Zyfera</span
						>
					</div>
					<p class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed">
						Worked across multiple product areas in a fast-moving environment, shipping features and
						fixes. Improved stability by optimizing API usage, adding automated tests, and setting
						up <strong>CI/CD</strong> for consistent releases. Later moved some processing closer to
						the edge to improve latency and reliability.
					</p>
				</div>
				<div
					class="retro-card p-8 bg-amber-50 dark:bg-gray-900 border-l-[6px] border-l-amber-300"
				>
					<div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
						<h3 class="text-xl font-bold font-mono text-gray-900 dark:text-white">
							Computing Support Assistant
						</h3>
						<span
							class="text-sm font-bold font-mono text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 px-3 py-1 shadow-hard dark:shadow-none w-fit mt-2 md:mt-0"
							>York University</span
						>
					</div>
					<p class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed">
						Troubleshot hardware, software, and network issues across classrooms and labs, often
						during live lectures or exams. Restored systems quickly and explained issues clearly to
						non-technical users. Strengthened my debugging speed and communication under pressure.
					</p>
				</div>
				<div
					class="retro-card p-8 bg-amber-50 dark:bg-gray-900 border-l-[6px] border-l-indigo-400"
				>
					<div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
						<h3 class="text-xl font-bold font-mono text-gray-900 dark:text-white">
							Co-Founder & President
						</h3>
						<span
							class="text-sm font-bold font-mono text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 px-3 py-1 shadow-hard dark:shadow-none w-fit mt-2 md:mt-0"
							>Arise</span
						>
					</div>
					<p class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed">
						Co-founded and led Arise Student Club, managing day-to-day operations and making sure
						programs were planned, delivered, and improved over time. Helped shape the club’s
						vision, goals, and priorities.
					</p>
				</div>
				<div
					class="retro-card p-8 bg-amber-50 dark:bg-gray-900 border-l-[6px] border-l-sky-400"
				>
					<div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
						<h3 class="text-xl font-bold font-mono text-gray-900 dark:text-white">
							Cloud & Technology Training
						</h3>
						<div class="text-right mt-2 md:mt-0">
							<span
								class="text-sm font-bold font-mono text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 px-3 py-1 shadow-hard dark:shadow-none inline-block"
								>PwC Canada</span
							>
						</div>
					</div>
					<p class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed">
						Participated in mentorship sessions and employer-valued training, gaining insights into
						technical and business environments with a focus on <strong>cloud computing, DevOps</strong>
						and <strong>technology consulting</strong>.
					</p>
				</div>
			</div>
		</div>

		<!-- Vision / Impact -->
		<div
			class="bg-primary-700 dark:bg-primary-900 border-2 border-gray-900 dark:border-gray-500 p-10 text-white shadow-hard dark:shadow-none text-center mb-16 animate-fade-in-up delay-300 relative overflow-hidden"
		>
			<div class="relative z-10">
				<h2 class="text-3xl font-bold font-pixel mb-6 uppercase">My Vision</h2>
				<p
					class="text-lg font-mono text-primary-50 dark:text-primary-100 leading-relaxed max-w-2xl mx-auto mb-8"
				></p>
				<p
					class="text-lg font-mono text-primary-50 dark:text-primary-100 leading-relaxed max-w-2xl mx-auto mb-8"
				>
					I’m early in my career, so my goal is simple: keep learning, ship solid work, and get better
					at building practical, reliable software that’s easy to understand and maintain.
				</p>
				<div class="flex justify-center gap-4 flex-wrap">
					<span class="px-4 py-2 bg-white/20 border border-white text-sm font-bold font-mono"
						>[ Curiosity ]</span
					>
					<span class="px-4 py-2 bg-white/20 border border-white text-sm font-bold font-mono"
						>[ Ownership ]</span
					>
					<span class="px-4 py-2 bg-white/20 border border-white text-sm font-bold font-mono"
						>[ Growth ]</span
					>
				</div>
			</div>
		</div>

		<!-- CTA -->
		<div class="text-center animate-fade-in-up delay-300">
			<Button href="/Projects" class="retro-btn rounded-none text-lg">
				VIEW MY PROJECTS <ArrowRightOutline class="w-5 h-5 ml-2" />
			</Button>
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
	.delay-300 {
		animation-delay: 0.3s;
	}
	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
