<script>
	import { Button } from 'flowbite-svelte';
	import { LinkOutline, GithubSolid, EnvelopeSolid, CartSolid } from 'flowbite-svelte-icons';
</script>

<div class="min-h-screen bg-transparent py-10">
	<div class="max-w-4xl mx-auto px-4">
		<!-- Header -->
		<div class="text-center mb-12 mt-8 animate-fade-in-up">
			<h1 class="heading-primary mb-6">
				My <span class="heading-accent">Commerce</span>
			</h1>
			<p class="text-xl font-light text-gray-600 max-w-2xl mx-auto">
				Modern Full-Stack E-Commerce Platform
			</p>
		</div>

		<!-- Image -->
		<div class="bg-white/50 p-2 rounded-3xl mb-12 shadow-soft animate-fade-in-up delay-100">
			<img class="w-full rounded-2xl" src="/images/mycom.png" alt="My Commerce Dashboard" />
		</div>

		<!-- Content Blocks -->
		<div class="space-y-12 animate-fade-in-up delay-200">
			<!-- Intro -->
			<div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
				<p class="text-lg text-gray-600 leading-relaxed">
					A fully functional e-commerce platform enabling customers to browse products, manage
					shopping carts, and complete orders. Built with robust role-based access control to
					securely separate customer shopping experiences from administrative inventory management.
				</p>
			</div>

			<!-- Features Grid -->
			<div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
				<div class="grid sm:grid-cols-2 gap-4">
					<div class="flex flex-col gap-2 p-4 bg-amber-50 rounded-xl border border-amber-100">
						<h3 class="font-bold text-gray-900">Secure Auth</h3>
						<p class="text-sm text-gray-600">User registration & login with JWT tokens</p>
					</div>
					<div class="flex flex-col gap-2 p-4 bg-amber-50 rounded-xl border border-amber-100">
						<h3 class="font-bold text-gray-900">Advanced Filtering</h3>
						<p class="text-sm text-gray-600">Filter by category, brand, and model</p>
					</div>
					<div class="flex flex-col gap-2 p-4 bg-amber-50 rounded-xl border border-amber-100">
						<h3 class="font-bold text-gray-900">Persistent Cart</h3>
						<p class="text-sm text-gray-600">Shopping cart state saved across sessions</p>
					</div>
					<div class="flex flex-col gap-2 p-4 bg-amber-50 rounded-xl border border-amber-100">
						<h3 class="font-bold text-gray-900">Admin Dashboard</h3>
						<p class="text-sm text-gray-600">Inventory and sales management tools</p>
					</div>
				</div>
			</div>

			<!-- Screenshots Gallery -->
			<div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Interface Gallery</h2>
				<div class="grid grid-cols-2 gap-4">
					<img
						class="rounded-xl shadow-sm border border-amber-100 hover:scale-105 transition-transform duration-300"
						src="/images/Screenshot1.png"
						alt="Screenshot 1"
					/>
					<img
						class="rounded-xl shadow-sm border border-amber-100 hover:scale-105 transition-transform duration-300"
						src="/images/Screenshot2.png"
						alt="Screenshot 2"
					/>
					<img
						class="rounded-xl shadow-sm border border-amber-100 hover:scale-105 transition-transform duration-300"
						src="/images/Screenshot3.png"
						alt="Screenshot 3"
					/>
					<img
						class="rounded-xl shadow-sm border border-amber-100 hover:scale-105 transition-transform duration-300"
						src="/images/Screenshot4.png"
						alt="Screenshot 4"
					/>
				</div>
			</div>

			<!-- Tech Stack -->
			<div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Tools & Technologies</h2>
				<div class="grid sm:grid-cols-2 gap-4">
					<div class="flex flex-col gap-1 p-4 bg-amber-50 rounded-xl border border-amber-100">
						<span class="font-bold text-gray-900">Frontend</span>
						<span class="text-sm text-gray-600">Next.js, Tailwind CSS, Vercel</span>
					</div>
					<div class="flex flex-col gap-1 p-4 bg-amber-50 rounded-xl border border-amber-100">
						<span class="font-bold text-gray-900">Backend</span>
						<span class="text-sm text-gray-600">Node.js, Express.js, PostgreSQL</span>
					</div>
					<div class="flex flex-col gap-1 p-4 bg-amber-50 rounded-xl border border-amber-100">
						<span class="font-bold text-gray-900">Architecture</span>
						<span class="text-sm text-gray-600">DAO Design Pattern</span>
					</div>
					<div class="flex flex-col gap-1 p-4 bg-amber-50 rounded-xl border border-amber-100">
						<span class="font-bold text-gray-900">Infrastructure</span>
						<span class="text-sm text-gray-600">DigitalOcean (Backend), Vercel (Frontend)</span>
					</div>
				</div>
			</div>

			<!-- Links Grid -->
			<div>
				<h2 class="heading-primary text-2xl md:text-3xl text-center mb-8">Links & Resources</h2>
				<div class="grid md:grid-cols-3 gap-6">
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
						<p class="text-sm text-gray-500 mb-4">View the code</p>
						<span class="text-gray-700 font-medium text-sm mt-auto group-hover:underline"
							>View Repo &rarr;</span
						>
					</a>

					<a
						href="https://my-commerce-frontend.vercel.app/"
						target="_blank"
						class="group bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center"
					>
						<div
							class="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors"
						>
							<CartSolid class="w-6 h-6" />
						</div>
						<h3 class="font-bold text-gray-900 mb-2">Live Demo</h3>
						<p class="text-sm text-gray-500 mb-4">Try the app</p>
						<span class="text-amber-600 font-medium text-sm mt-auto group-hover:underline"
							>Launch Demo &rarr;</span
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
