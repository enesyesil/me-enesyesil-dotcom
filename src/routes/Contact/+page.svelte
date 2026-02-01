<script>
	import { Button } from 'flowbite-svelte';
	import { EnvelopeSolid, LinkedinSolid } from 'flowbite-svelte-icons';
</script>

<div class="min-h-screen bg-transparent py-12 px-4">
	<div class="max-w-6xl mx-auto">
		<!-- Hero / Header -->
		<div class="text-center mb-16 mt-4 animate-fade-in-up">
			<h1 class="heading-primary mb-6">
				Let's <span class="heading-accent">Connect</span>
			</h1>
			<p class="text-xl font-light text-gray-600 max-w-2xl mx-auto">
				Whether you have a project in mind, a question, or just want to chat about tech — I'd love
				to hear from you.
			</p>
		</div>

		<div class="grid lg:grid-cols-2 gap-12 items-start">
			<!-- Left Column: Contact Methods -->
			<div class="space-y-8 animate-fade-in-up delay-100">
				<div
					class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-amber-100/50"
				>
					<h2 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

					<div class="space-y-6">
						<a
							href="mailto:enesy@my.yorku.ca"
							class="flex items-center gap-4 p-4 rounded-xl hover:bg-amber-50 transition-colors group"
						>
							<div
								class="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors"
							>
								<EnvelopeSolid class="w-6 h-6" />
							</div>
							<div>
								<div class="text-sm text-gray-500 font-medium">Email Me</div>
								<div
									class="text-lg text-gray-900 font-bold group-hover:text-primary-600 transition-colors"
								>
									enesy@my.yorku.ca
								</div>
							</div>
						</a>

						<a
							href="https://www.linkedin.com/in/enes-yesil"
							target="_blank"
							class="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
						>
							<div
								class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors"
							>
								<LinkedinSolid class="w-6 h-6" />
							</div>
							<div>
								<div class="text-sm text-gray-500 font-medium">LinkedIn</div>
								<div
									class="text-lg text-gray-900 font-bold group-hover:text-blue-600 transition-colors"
								>
									Connect on LinkedIn
								</div>
							</div>
						</a>
					</div>
				</div>

				<!-- Availability Note -->
				<div
					class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 text-white shadow-soft-lg"
				>
					<h3 class="text-xl font-bold mb-2">Currently Available</h3>
					<p class="text-primary-100 leading-relaxed mb-4">
						I am currently open to new opportunities, freelance projects, and collaborations. Feel
						free to book a time to chat!
					</p>
				</div>
			</div>

			<!-- Right Column: Cal.com Embed -->
			<div
				class="bg-white/90 backdrop-blur-md rounded-3xl shadow-soft p-4 min-h-[600px] animate-fade-in-up delay-200 border border-gray-100"
			>
				<div
					class="w-full h-full rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center relative"
				>
					<!-- 
                TODO: USER - Replace this placeholder with your Cal.com embed code or iframe.
                Example iframe:
                <iframe src="https://cal.com/enes/30min" style="width:100%;height:100%;overflow:scroll" frameborder="0"></iframe>
             -->
					<div class="text-center p-8">
						<span class="text-4xl mb-4 block">📅</span>
						<h3 class="text-xl font-bold text-gray-900 mb-2">Book a Call</h3>
						<p class="text-gray-500 mb-6 max-w-xs mx-auto">
							Cal.com integration is ready. Please paste your embed snippet code here in the source.
						</p>
						<!-- Temporary Placeholder Button -->
						<Button href="https://cal.com" target="_blank" color="primary">Go to Cal.com</Button>
					</div>
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
