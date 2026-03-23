<script>
	import { EnvelopeSolid, LinkedinSolid } from 'flowbite-svelte-icons';
</script>

<div class="min-h-screen bg-transparent py-12 px-4 transition-colors duration-300">
	<div class="max-w-6xl mx-auto">
		<!-- Hero / Header -->
		<div class="text-center mb-16 mt-4 animate-fade-in-up">
			<h1 class="text-6xl font-bold font-pixel mb-6 text-gray-900 dark:text-white">
				LET'S <span class="text-primary-600 dark:text-primary-400">CONNECT</span>
			</h1>
			<p class="text-xl font-mono text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
				> Whether you have a project in mind, a question, or just want to chat about tech — I'd love
				to hear from you.
			</p>
		</div>

		<div class="contact-grid items-start">
			<!-- Left Column: Contact Methods -->
			<div class="space-y-4">
				<div class="retro-card p-8 bg-amber-50 dark:bg-gray-900 animate-fade-in-up delay-100">
					<div
						class="border-b-2 border-gray-900 dark:border-gray-500 pb-2 mb-6 font-mono text-gray-500 dark:text-gray-400 text-sm"
					>
						communication_channels.json
					</div>
					<h2 class="text-2xl font-bold font-mono text-gray-900 dark:text-white mb-6 uppercase">
						Get in Touch
					</h2>

					<div class="space-y-6">
						<a
							href="mailto:me.enesyesil@gmail.com"
							class="flex items-center gap-4 p-4 border-2 border-transparent hover:border-gray-900 dark:hover:border-white hover:bg-white dark:hover:bg-gray-800 transition-all group"
						>
							<div
								class="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 border-2 border-gray-900 dark:border-gray-500 text-amber-600 dark:text-amber-400 flex items-center justify-center shadow-hard dark:shadow-none"
							>
								<EnvelopeSolid class="w-6 h-6" />
							</div>
							<div>
								<div class="text-sm text-gray-500 dark:text-gray-400 font-bold font-mono">
									Email Me
								</div>
								<div
									class="text-lg text-gray-900 dark:text-white font-bold font-mono group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
								>
									me.enesyesil@gmail.com
								</div>
							</div>
						</a>

						<a
							href="https://www.linkedin.com/in/me-enesyesil"
							target="_blank"
							class="flex items-center gap-4 p-4 border-2 border-transparent hover:border-gray-900 dark:hover:border-white hover:bg-white dark:hover:bg-gray-800 transition-all group"
						>
							<div
								class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 border-2 border-gray-900 dark:border-gray-500 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-hard dark:shadow-none"
							>
								<LinkedinSolid class="w-6 h-6" />
							</div>
							<div>
								<div class="text-sm text-gray-500 dark:text-gray-400 font-bold font-mono">
									LinkedIn
								</div>
								<div
									class="text-lg text-gray-900 dark:text-white font-bold font-mono group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
								>
									Connect on LinkedIn
								</div>
							</div>
						</a>
					</div>
				</div>

				<!-- Availability Note -->
				<div class="animate-fade-in-up delay-200">
					<div
						class="bg-primary-600 dark:bg-primary-900 border-2 border-gray-900 dark:border-gray-500 p-8 text-white shadow-hard dark:shadow-none"
					>
						<h3 class="text-xl font-bold font-mono mb-2 uppercase">[ STATUS: AVAILABLE ]</h3>
						<p class="text-primary-50 dark:text-primary-100 font-mono leading-relaxed mb-4">
							I am currently open to new opportunities, freelance projects, and collaborations. Feel
							free to book a time to chat!
						</p>
					</div>
				</div>
			</div>

			<!-- Right Column: Schedule Meeting -->
			<div class="retro-card p-8 bg-amber-50 dark:bg-gray-900 animate-fade-in-up delay-300 text-center">
				<span class="text-4xl mb-4 block">📅</span>
				<h3 class="text-xl font-bold font-pixel text-gray-900 dark:text-white mb-2">
					BOOK A CALL
				</h3>
				<p class="text-gray-500 dark:text-gray-400 font-mono mb-6 text-sm">
					30 min chat — tech, projects, or opportunities.
				</p>
				<a
					href="https://cal.com/me.enesyesil/30min"
					target="_blank"
					class="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-mono font-bold border-2 border-gray-900 dark:border-gray-500 shadow-hard dark:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase text-sm"
				>
					📅 Open Booking Page →
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.contact-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr;
	}

	@media (min-width: 1024px) {
		.contact-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

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
