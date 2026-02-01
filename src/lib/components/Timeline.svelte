<script>
	import { BriefcaseSolid, BookOpenSolid, UsersGroupSolid } from 'flowbite-svelte-icons';
</script>

<section class="section-padding relative overflow-hidden">
	<div class="max-w-4xl mx-auto relative">
		<div class="text-center mb-16">
			<h2 class="heading-primary">
				My <span class="heading-accent">Timeline</span>
			</h2>
			<p class="text-gray-500 mt-4 max-w-lg mx-auto text-lg">
				A journey through my education, experiences, and growth as a developer.
			</p>
		</div>

		<!-- Vertical Line -->
		<div
			class="absolute left-1/2 top-48 bottom-32 w-px bg-primary-200/50 -translate-x-1/2 hidden md:block"
		></div>

		<div class="space-y-16 relative">
			<!-- Item 1: York U -->
			<div class="relative flex flex-col items-center md:block">
				<!-- Icon -->
				<div
					class="md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-2 z-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-soft mb-6 md:mb-0"
				>
					<BookOpenSolid class="w-7 h-7" />
				</div>

				<!-- Content Left -->
				<div class="md:grid md:grid-cols-2 md:gap-20 items-center">
					<div
						class="md:text-right bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft w-full hover:shadow-soft-lg transition-all"
					>
						<span class="text-primary-600 font-medium text-sm mb-2 block">September 2021</span>
						<h3 class="text-xl font-bold text-gray-900 mb-2">
							Started Computer Science at York University
						</h3>
						<p class="text-gray-600 leading-relaxed text-sm">
							Began BSc in Computer Science at York University, Toronto.
						</p>
					</div>
					<div class="hidden md:block"></div>
				</div>
			</div>

			<!-- Item 2: Arise -->
			<div class="relative flex flex-col items-center md:block">
				<!-- Icon -->
				<div
					class="md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-2 z-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-soft mb-6 md:mb-0"
				>
					<UsersGroupSolid class="w-7 h-7" />
				</div>

				<!-- Content Right -->
				<div class="md:grid md:grid-cols-2 md:gap-20 items-center">
					<div class="hidden md:block"></div>
					<div
						class="md:text-left bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft w-full hover:shadow-soft-lg transition-all"
					>
						<span class="text-primary-600 font-medium text-sm mb-2 block">September 2022</span>
						<h3 class="text-xl font-bold text-gray-900 mb-2">Co-Founded Arise Student Club</h3>
						<p class="text-gray-600 leading-relaxed text-sm">
							Founded a student organization focused on career development, inclusion, and
							leadership.
						</p>
					</div>
				</div>
			</div>

			<!-- Item 3: Zyfera -->
			<div class="relative flex flex-col items-center md:block">
				<!-- Icon -->
				<div
					class="md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-2 z-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-soft mb-6 md:mb-0"
				>
					<BriefcaseSolid class="w-7 h-7" />
				</div>

				<!-- Content Left -->
				<div class="md:grid md:grid-cols-2 md:gap-20 items-center">
					<div
						class="md:text-right bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft w-full hover:shadow-soft-lg transition-all"
					>
						<span class="text-primary-600 font-medium text-sm mb-2 block">January 2024</span>
						<h3 class="text-xl font-bold text-gray-900 mb-2">Started Internship at Zyfera</h3>
						<p class="text-gray-600 leading-relaxed text-sm">
							Joined as Software Developer Intern, building AI-powered tools.
						</p>
					</div>
					<div class="hidden md:block"></div>
				</div>
			</div>
		</div>

		<!-- Gradient Fade Bottom -->
		<div
			class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-50 to-transparent pointer-events-none"
		></div>
	</div>
</section>
