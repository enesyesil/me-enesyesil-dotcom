<script>
	import { Button } from 'flowbite-svelte';
	import { LinkOutline, GithubSolid, EnvelopeSolid } from 'flowbite-svelte-icons';
</script>

<div class="min-h-screen bg-transparent py-10">
	<div class="max-w-4xl mx-auto px-4">
		<!-- Header -->
		<div class="text-center mb-12 mt-8 animate-fade-in-up">
			<h1 class="heading-primary mb-6">
				Weddify <span class="heading-accent">Platform</span>
			</h1>
			<p class="text-xl font-light text-gray-600 max-w-2xl mx-auto">
				Personalized Wedding RSVP and Invitation Website
			</p>
		</div>

		<!-- Image -->
		<div class="bg-white/50 p-2 rounded-3xl mb-12 shadow-soft animate-fade-in-up delay-100">
			<img class="w-full rounded-2xl" src="/images/s4.png" alt="Weddify Dashboard" />
		</div>

		<!-- Content Blocks -->
		<div class="space-y-12 animate-fade-in-up delay-200">
			<!-- Intro -->
			<div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
				<p class="text-lg text-gray-600 leading-relaxed">
					Weddify is a personalized wedding RSVP and invitation website. It offers the ability to
					create customized invitations, manage guest lists, and collect RSVPs effortlessly. A
					dashboard will soon be added to allow users to manage everything in one place, and
					additional customization options will also be available to tailor the site to your
					specific wedding needs.
				</p>
			</div>

			<!-- Tech Stack -->
			<div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Tools & Technologies</h2>
				<div class="grid sm:grid-cols-2 gap-4">
					<div class="flex flex-col gap-1 p-4 bg-amber-50 rounded-xl border border-amber-100">
						<span class="font-bold text-gray-900">Next.js</span>
						<span class="text-sm text-gray-600">Framework for server-side rendering</span>
					</div>
					<div class="flex flex-col gap-1 p-4 bg-amber-50 rounded-xl border border-amber-100">
						<span class="font-bold text-gray-900">TailwindCSS</span>
						<span class="text-sm text-gray-600">Utility-first CSS framework for responsive UI</span>
					</div>
					<div class="flex flex-col gap-1 p-4 bg-amber-50 rounded-xl border border-amber-100">
						<span class="font-bold text-gray-900">React</span>
						<span class="text-sm text-gray-600">Library for building user interfaces</span>
					</div>
					<div class="flex flex-col gap-1 p-4 bg-amber-50 rounded-xl border border-amber-100">
						<span class="font-bold text-gray-900">Google Sheets API</span>
						<span class="text-sm text-gray-600">Managing guest lists via Sheets integration</span>
					</div>
				</div>
			</div>

			<!-- Links Grid -->
			<div>
				<h2 class="heading-primary text-2xl md:text-3xl text-center mb-8">Links & Resources</h2>
				<div class="grid md:grid-cols-3 gap-6">
					<div
						class="group bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center opacity-75 grayscale cursor-not-allowed"
					>
						<div
							class="w-12 h-12 bg-gray-100 text-gray-500 rounded-xl flex items-center justify-center mb-4"
						>
							<LinkOutline class="w-6 h-6" />
						</div>
						<h3 class="font-bold text-gray-900 mb-2">Website</h3>
						<p class="text-sm text-gray-500 mb-4">Temporarily unavailable</p>
						<span class="text-gray-400 font-medium text-sm mt-auto">Offline</span>
					</div>

					<a
						href="https://github.com/enesyesil"
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
