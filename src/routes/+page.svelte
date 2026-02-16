<script>
	import { Button } from 'flowbite-svelte';
	import {
		GithubSolid,
		LinkedinSolid,
		EnvelopeSolid,
		ArrowRightOutline,
		CodeBranchSolid,
		DatabaseSolid,
		BrainSolid,
		BriefcaseSolid,
		BookOpenSolid,
		CloudArrowUpSolid,
		UsersGroupSolid,
		CodeBranchOutline,
		ArrowUpRightFromSquareOutline
	} from 'flowbite-svelte-icons';
</script>

<div class="overflow-hidden">
	<!-- HERO SECTION -->
	<!-- HERO SECTION: THE ARCHITECT'S INTERFACE -->
	<section
		class="relative min-h-[95vh] flex flex-col justify-center px-4 md:px-12 py-12 bg-transparent border-x-2 border-gray-900 dark:border-gray-500 mx-4 md:mx-8 my-4 relative overflow-hidden"
	>
		<!-- Corner Markings (Decorations) -->
		<div
			class="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-gray-900 dark:border-gray-500"
		></div>
		<div
			class="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-gray-900 dark:border-gray-500"
		></div>
		<div
			class="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-gray-900 dark:border-gray-500"
		></div>
		<div
			class="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-gray-900 dark:border-gray-500"
		></div>

		<!-- Top Status Bar -->
		<div
			class="absolute top-6 left-0 w-full px-8 md:px-16 flex justify-between items-center font-pixel text-lg md:text-xl text-gray-500 dark:text-gray-400 uppercase tracking-widest pointer-events-none z-10"
		>
			<div class="flex items-center gap-2">
				<span class="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-sm"></span>
				<span class="text-gray-500 dark:text-gray-400">SYSTEM_READY</span>
			</div>
			<div class="hidden md:block text-gray-500 dark:text-gray-400">LAT: 43.77 // LNG: -79.50</div>
			<div class="text-gray-500 dark:text-gray-400">
				EST. 2024 <!-- Or dynamic date/time -->
			</div>
		</div>

		<!-- Main Content Grid -->
		<div
			class="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20"
		>
			<!-- Left Column: Typography & Name -->
			<div class="lg:col-span-8 flex flex-col justify-center">
				<div
					class="font-pixel text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-2 tracking-widest animate-fade-in-up"
				>
					&gt; SUBJECT: SOFTWARE_ENGINEER
				</div>

				<h1
					class="text-7xl sm:text-8xl md:text-[10rem] leading-[0.85] font-bold font-mono text-gray-900 dark:text-white mb-8 tracking-tighter animate-fade-in-up delay-100"
				>
					ENES<br /><span
						class="text-stroke-2 text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 dark:text-stroke-white"
						>YESIL</span
					><span class="animate-pulse text-primary-600 dark:text-primary-400">_</span>
				</h1>

				<div class="flex flex-wrap items-center gap-4 animate-fade-in-up delay-200">
					<!-- Social Icons -->
					<Button
						href="https://www.linkedin.com/in/me-enesyesil/"
						target="_blank"
						class="retro-btn p-3 rounded-none flex items-center justify-center bg-white dark:bg-gray-900 !text-gray-900 dark:!text-white hover:bg-gray-100 dark:hover:bg-gray-800"
						aria-label="LinkedIn"
					>
						<LinkedinSolid class="w-6 h-6" />
					</Button>
					<Button
						href="https://github.com/enesyesil"
						target="_blank"
						class="retro-btn p-3 rounded-none flex items-center justify-center bg-white dark:bg-gray-900 !text-gray-900 dark:!text-white hover:bg-gray-100 dark:hover:bg-gray-800"
						aria-label="GitHub"
					>
						<GithubSolid class="w-6 h-6" />
					</Button>

					<!-- Contact Button -->
					<Button
						href="/Contact"
						class="bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 text-xl px-8 py-3 font-bold font-mono uppercase transition-all shadow-hard dark:shadow-none hover:shadow-hard-lg hover:-translate-y-0.5 rounded-none"
					>
						[ CONTACT_ME ]
					</Button>
				</div>
			</div>

			<!-- Right Column: Tech Specs / Status Block -->
			<div
				class="lg:col-span-4 flex flex-col justify-center items-start lg:items-end animate-bounce-vertical delay-300"
			>
				<div
					class="w-full max-w-md bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-500 shadow-hard dark:shadow-none p-6 relative"
				>
					<div
						class="absolute -top-3 left-4 bg-amber-50 dark:bg-gray-900 px-2 font-pixel text-gray-500 dark:text-gray-400 text-sm"
					>
						SYSTEM_SPECS
					</div>

					<div class="font-mono text-sm md:text-base space-y-4 text-gray-700 dark:text-gray-300">
						<div class="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
							<span class="font-bold text-gray-900 dark:text-white">[ FIELD ]</span>
							<span>Distributed Systems</span>
						</div>
						<div class="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
							<span class="font-bold text-gray-900 dark:text-white">[ ENGINE ]</span>
							<!-- Changed from STACK -->
							<span>Go, Java, Python</span>
						</div>
						<div class="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
							<span class="font-bold text-gray-900 dark:text-white">[ CURRENT_OP ]</span>
							<!-- Changed from STATUS -->
							<span
								class="text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/20 px-2 animate-pulse"
								>SEEKING_DATA</span
							>
						</div>
						<div class="flex justify-between pt-2">
							<span class="font-bold text-gray-900 dark:text-white">[ LOC ]</span>
							<span>Toronto, ON</span>
						</div>
					</div>

					<!-- Decorative Barcode/Data Visualization placeholder -->
					<div class="mt-6 flex gap-1 h-4">
						{#each Array(20) as _, i}
							<div
								class="h-full w-1 {Math.random() > 0.5
									? 'bg-gray-900 dark:bg-gray-500'
									: 'bg-gray-300 dark:bg-gray-700'}"
							></div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom Ticker / Scroller -->
		<div
			class="absolute bottom-6 left-0 w-full overflow-hidden border-y border-gray-900/10 dark:border-white/10 py-2 bg-white/50 dark:bg-black/50 backdrop-blur-sm"
		>
			<div
				class="whitespace-nowrap font-pixel text-gray-400 dark:text-gray-500 text-lg uppercase tracking-widest animate-marquee inline-block"
			>
				/// INITIALIZING CONNECTION ... LOADING ASSETS ... SYSTEM OPTIMIZED ... WELCOME TO THE
				ARCHIVE ... SCROLL FOR DATA ...
			</div>
		</div>
	</section>

	<!-- ABOUT ME SECTION -->
	<section class="section-padding items-center overflow-hidden bg-transparent" id="about">
		<div class="max-w-6xl mx-auto px-6">
			<!-- Section Header (Centered) -->
			<div class="text-center mb-12 lg:mb-16">
				<Button
					href="/MoreMe"
					class="mb-6 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white font-mono text-sm px-4 py-1 shadow-hard dark:shadow-none hover:shadow-hard-lg hover:-translate-y-0.5 transition-all rounded-none uppercase"
				>
					<span class="mr-2">★</span> About Me
				</Button>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
				<!-- Left Column: Interactive Profile Card -->
				<div class="relative flex justify-center group order-1">
					<!-- Main Profile Card -->
					<div class="retro-card p-6 w-full max-w-sm bg-amber-50 dark:bg-gray-900">
						<div
							class="border-b-2 border-gray-900 dark:border-gray-500 pb-2 mb-4 font-mono text-gray-500 dark:text-gray-400 text-sm"
						>
							profile.ascii
						</div>

						<div
							class="w-full aspect-square mx-auto border-2 border-gray-900 dark:border-gray-500 flex items-center justify-center mb-6 bg-white dark:bg-black relative overflow-hidden"
						>
							<pre
								class="text-[8px] sm:text-[10px] leading-none font-mono text-primary-700 dark:text-primary-500 select-none animate-zigzag">
       _____________________
      |  _________________  |
      | |                 | |
      | |   ___     ___   | |
      | |  |   |   |   |  | |
      | |  |___|   |___|  | |
      | |                 | |
      | |       ___       | |
      | |      |___|      | |
      | |                 | |
      | |_________________| |
      |_____________________|
       
         [ SYSTEM ONLINE ]
							</pre>
						</div>

						<!-- Info badges -->
						<div class="flex flex-col gap-3">
							<div
								class="px-4 py-2 bg-amber-100 dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white font-mono text-sm font-bold flex items-center shadow-hard dark:shadow-none"
							>
								<span class="mr-2">🎓</span> York University
							</div>
							<div
								class="px-4 py-2 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white font-mono text-sm font-bold flex items-center shadow-hard dark:shadow-none"
							>
								<span class="mr-2">💻</span> CS Final Year
							</div>
						</div>
					</div>
				</div>

				<!-- Right Column: Content -->
				<div class="retro-card p-8 bg-amber-50 dark:bg-gray-900 order-2">
					<div
						class="border-b-2 border-gray-900 dark:border-gray-500 pb-2 mb-6 font-mono text-gray-500 dark:text-gray-400 text-sm"
					>
						bio.txt
					</div>
					<div class="space-y-5 text-lg font-mono text-gray-700 dark:text-gray-300 leading-relaxed">
						<p>
							<span class="text-primary-600 dark:text-primary-400">></span> I'm a software developer
							interested in
							<strong
								class="text-gray-900 dark:text-white bg-primary-100 dark:bg-primary-900/30 px-1"
								>distributed systems, data infrastructure, and AI/ML</strong
							>.
						</p>

						<p>
							<span class="text-primary-600 dark:text-primary-400">></span> I enjoy turning complex systems
							into powerful and usable tools, especially when it comes to automation, reliability, and
							platform-style engineering.
						</p>

						<p>
							<span class="text-primary-600 dark:text-primary-400">></span> Currently in my final
							year of Computer Science at
							<strong class="text-gray-900 dark:text-white border-b-2 border-primary-400"
								>York University</strong
							>, I spend most of my time working on backend and systems-focused projects.
						</p>
					</div>

					<div class="mt-8 pt-6 border-t-2 border-gray-900 dark:border-gray-500">
						<div class="font-mono text-gray-500 dark:text-gray-400 text-sm mb-4">interests.log</div>
						<!-- Interactive Skill Cards (Grid) -->
						<div class="grid grid-cols-2 gap-3">
							<!-- AI / ML -->
							<div
								class="border-2 border-gray-900 dark:border-gray-500 p-2 text-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
							>
								<h3 class="font-bold text-gray-900 dark:text-white text-sm font-mono">
									[ AI / ML ]
								</h3>
							</div>

							<!-- Distributed -->
							<div
								class="border-2 border-gray-900 dark:border-gray-500 p-2 text-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
							>
								<h3 class="font-bold text-gray-900 dark:text-white text-sm font-mono">
									[ SYSTEMS ]
								</h3>
							</div>

							<!-- Backend -->
							<div
								class="border-2 border-gray-900 dark:border-gray-500 p-2 text-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
							>
								<h3 class="font-bold text-gray-900 dark:text-white text-sm font-mono">
									[ BACKEND ]
								</h3>
							</div>

							<!-- Cloud -->
							<div
								class="border-2 border-gray-900 dark:border-gray-500 p-2 text-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
							>
								<h3 class="font-bold text-gray-900 dark:text-white text-sm font-mono">[ CLOUD ]</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- TIMELINE SECTION -->
	<section class="section-padding relative overflow-hidden bg-transparent">
		<div class="max-w-4xl mx-auto relative px-6">
			<div class="text-center mb-16">
				<Button
					href="#timeline"
					class="mb-6 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white font-mono text-sm px-4 py-1 shadow-hard dark:shadow-none rounded-none uppercase"
				>
					<span class="mr-2">🕒</span> Timeline
				</Button>
				<p class="text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto text-lg font-mono">
					> A journey through my education, experiences, and growth as a developer.
				</p>
			</div>

			<div class="retro-card p-8 bg-amber-50 dark:bg-gray-900 relative">
				<div
					class="border-b-2 border-gray-900 dark:border-gray-500 pb-2 mb-8 font-mono text-gray-500 dark:text-gray-400 text-sm"
				>
					history.log
				</div>

				<!-- Vertical Line (Dashed) -->
				<div
					class="absolute left-8 md:left-12 top-24 bottom-12 w-px border-l-2 border-dashed border-gray-400 dark:border-gray-600 hidden md:block"
				></div>

				<div class="space-y-12 relative">
					<!-- Item 1: York U -->
					<div class="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
						<div
							class="z-10 w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-500 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0"
						>
							<BookOpenSolid class="w-6 h-6" />
						</div>

						<div class="flex-1">
							<span
								class="inline-block border border-gray-900 dark:border-gray-500 px-2 py-0.5 bg-primary-100 dark:bg-primary-900/40 font-mono text-xs font-bold mb-2 text-primary-900 dark:text-primary-300"
								>Sept 2021</span
							>
							<h3 class="text-xl font-bold font-mono text-gray-900 dark:text-white mb-2">
								Started Computer Science at York University
							</h3>
							<p class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed">
								Began BSc in Computer Science at York University, Toronto.
							</p>
						</div>
					</div>

					<!-- Item 2: Arise -->
					<div class="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
						<div
							class="z-10 w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-500 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0"
						>
							<UsersGroupSolid class="w-6 h-6" />
						</div>

						<div class="flex-1">
							<span
								class="inline-block border border-gray-900 dark:border-gray-500 px-2 py-0.5 bg-primary-100 dark:bg-primary-900/40 font-mono text-xs font-bold mb-2 text-primary-900 dark:text-primary-300"
								>Sept 2022</span
							>
							<h3 class="text-xl font-bold font-mono text-gray-900 dark:text-white mb-2">
								Co-Founded Arise Student Club
							</h3>
							<p class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed">
								Founded a student organization focused on career development, inclusion, and
								leadership.
							</p>
						</div>
					</div>

					<!-- Item 3: Zyfera -->
					<div class="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
						<div
							class="z-10 w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-500 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0"
						>
							<BriefcaseSolid class="w-6 h-6" />
						</div>

						<div class="flex-1">
							<span
								class="inline-block border border-gray-900 dark:border-gray-500 px-2 py-0.5 bg-primary-100 dark:bg-primary-900/40 font-mono text-xs font-bold mb-2 text-primary-900 dark:text-primary-300"
								>Jan 2024</span
							>
							<h3 class="text-xl font-bold font-mono text-gray-900 dark:text-white mb-2">
								Started Internship at Zyfera
							</h3>
							<p class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed">
								Joined as Software Developer Intern, building AI-powered tools.
							</p>
						</div>
					</div>

					<!-- Item 4: Research Assistant -->
					<div class="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
						<div
							class="z-10 w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-500 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0"
						>
							<BookOpenSolid class="w-6 h-6" />
						</div>

						<div class="flex-1">
							<span
								class="inline-block border border-gray-900 dark:border-gray-500 px-2 py-0.5 bg-primary-100 dark:bg-primary-900/40 font-mono text-xs font-bold mb-2 text-primary-900 dark:text-primary-300"
								>Mar 2024</span
							>
							<h3 class="text-xl font-bold font-mono text-gray-900 dark:text-white mb-2">
								Started as Research Assistant
							</h3>
							<p class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed">
								Conducted accessibility-focused software research at York University.
							</p>
						</div>
					</div>

					<!-- Item 5: Fisor Analytics -->
					<div class="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
						<div
							class="z-10 w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-500 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0"
						>
							<CodeBranchSolid class="w-6 h-6" />
						</div>

						<div class="flex-1">
							<span
								class="inline-block border border-gray-900 dark:border-gray-500 px-2 py-0.5 bg-primary-100 dark:bg-primary-900/40 font-mono text-xs font-bold mb-2 text-primary-900 dark:text-primary-300"
								>Apr 2025</span
							>
							<h3 class="text-xl font-bold font-mono text-gray-900 dark:text-white mb-2">
								Launched Fisor Analytics
							</h3>
							<p class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed">
								Developed a platform combining open data, AI, and business intelligence.
							</p>
						</div>
					</div>

					<!-- Item 6: Graduation -->
					<div class="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
						<div
							class="z-10 w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-500 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0"
						>
							<UsersGroupSolid class="w-6 h-6" />
						</div>

						<div class="flex-1">
							<span
								class="inline-block border border-gray-900 dark:border-gray-500 px-2 py-0.5 bg-primary-100 dark:bg-primary-900/40 font-mono text-xs font-bold mb-2 text-primary-900 dark:text-primary-300"
								>Dec 2025</span
							>
							<h3 class="text-xl font-bold font-mono text-gray-900 dark:text-white mb-2">
								Graduation
							</h3>
							<p class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed">
								Graduated with a BSc in Computer Science from York University.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FEATURED PROJECTS SECTION -->
	<section class="section-padding" id="projects">
		<div class="max-w-7xl mx-auto px-6">
			<div class="text-center mb-16">
				<Button
					href="/Projects"
					class="mb-6 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white font-mono text-sm px-4 py-1 shadow-hard dark:shadow-none rounded-none uppercase"
				>
					<span class="mr-2">★</span> Portfolio
				</Button>
				<h2 class="heading-primary mt-4">FEATURED PROJECTS</h2>
			</div>

			<!-- Bento Grid Layout -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
				<!-- Featured Project: Fisor (Large Card) -->
				<div class="md:col-span-2 retro-card p-6 bg-amber-50 dark:bg-gray-900">
					<div class="flex flex-col md:flex-row gap-8">
						<div
							class="flex-shrink-0 w-full md:w-64 h-48 bg-amber-50 dark:bg-gray-900 rounded-none flex items-center justify-center border-2 border-gray-900 dark:border-gray-500"
						>
							<span class="text-4xl font-bold font-pixel text-primary-600 dark:text-primary-400"
								>FISOR</span
							>
						</div>
						<div class="flex-1">
							<div class="flex items-center gap-2 mb-3">
								<span
									class="px-3 py-1 bg-primary-600 border border-gray-900 dark:border-gray-500 text-white text-xs font-mono font-bold"
									>[ FEATURED ]</span
								>
							</div>
							<h3 class="text-2xl font-bold font-mono text-gray-900 dark:text-white mb-3">
								Fisor Analytics
							</h3>
							<p class="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed mb-4">
								A multi-tenant AI analytics platform powered by LLMs, Spark, and Apache Iceberg for
								enterprise-scale data processing.
							</p>
							<div class="flex flex-wrap gap-2 mb-6 font-mono text-xs">
								<span
									class="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white"
									>[Python]</span
								>
								<span
									class="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white"
									>[Spark]</span
								>
								<span
									class="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white"
									>[LLMs]</span
								>
								<span
									class="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white"
									>[Iceberg]</span
								>
							</div>
							<div class="flex gap-3">
								<Button href="/Projects/Fisor" class="retro-btn text-xs rounded-none">
									VIEW PROJECT <ArrowUpRightFromSquareOutline class="w-3 h-3 ml-1" />
								</Button>
							</div>
						</div>
					</div>
				</div>

				<!-- Project 3 -->
				<div class="retro-card p-6 flex flex-col bg-amber-50 dark:bg-gray-900">
					<div
						class="h-40 bg-amber-50 dark:bg-gray-900 rounded-none mb-5 flex items-center justify-center border-2 border-gray-900 dark:border-gray-500"
					>
						<span class="text-2xl font-bold font-pixel text-primary-600 dark:text-primary-400"
							>WEDDIFY</span
						>
					</div>

					<h3 class="text-xl font-bold font-mono text-gray-900 dark:text-white mb-2">Weddify</h3>
					<p
						class="text-gray-600 dark:text-gray-300 font-mono text-xs leading-relaxed mb-4 flex-grow"
					>
						Personalized wedding RSVP and invitation website with custom themes.
					</p>

					<div class="flex flex-wrap gap-2 mb-5 font-mono text-xs">
						<span
							class="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white"
							>[SvelteKit]</span
						>
						<span
							class="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white"
							>[Supabase]</span
						>
					</div>

					<div class="flex gap-2">
						<Button href="/Projects/Weddify" class="flex-1 retro-btn text-xs rounded-none">
							VIEW <ArrowUpRightFromSquareOutline class="w-3 h-3 ml-1" />
						</Button>
					</div>
				</div>

				<!-- Project 4 -->
				<div class="retro-card p-6 flex flex-col bg-amber-50 dark:bg-gray-900">
					<div
						class="h-40 bg-amber-50 dark:bg-gray-900 rounded-none mb-5 flex items-center justify-center border-2 border-gray-900 dark:border-gray-500"
					>
						<span class="text-2xl font-bold font-pixel text-primary-600 dark:text-primary-400"
							>MONEYBALL</span
						>
					</div>

					<h3 class="text-xl font-bold font-mono text-gray-900 dark:text-white mb-2">
						Moneyball Scout ML
					</h3>
					<p
						class="text-gray-600 dark:text-gray-300 font-mono text-xs leading-relaxed mb-4 flex-grow"
					>
						Statistical analysis to identify undervalued football players using ML.
					</p>

					<div class="flex flex-wrap gap-2 mb-5 font-mono text-xs">
						<span
							class="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white"
							>[Python]</span
						>
						<span
							class="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-900 dark:border-gray-500 text-gray-900 dark:text-white"
							>[Scikit-learn]</span
						>
					</div>

					<div class="flex gap-2">
						<Button href="/Projects/Moneyball" class="flex-1 retro-btn text-xs rounded-none">
							VIEW <ArrowUpRightFromSquareOutline class="w-3 h-3 ml-1" />
						</Button>
					</div>
				</div>
			</div>

			<div class="text-center">
				<Button
					href="/Projects"
					class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-3 rounded-none font-bold border-2 border-gray-900 dark:border-gray-500 shadow-hard dark:shadow-none hover:shadow-hard-lg transition-all hover:-translate-y-0.5"
				>
					[ VIEW ALL PROJECTS ]
				</Button>
			</div>
		</div>
	</section>
</div>

<style>
	/* Animations */
	.animate-fade-in-up {
		animation: fadeInUp 0.8s ease-out forwards;
		opacity: 0;
		transform: translateY(20px);
	}

	.animate-bounce-vertical {
		animation: bounceVertical 3s ease-in-out infinite;
	}

	.animate-zigzag {
		animation: zigzag 5s ease-in-out infinite;
	}

	.animate-pulse-slow {
		animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

	@keyframes bounceVertical {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
	}

	@keyframes zigzag {
		0%,
		100% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(15px, -15px);
		}
		50% {
			transform: translate(-10px, -25px);
		}
		75% {
			transform: translate(15px, -15px);
		}
	}
</style>
