<script>
	import { GithubSolid, LinkedinSolid, EnvelopeSolid } from 'flowbite-svelte-icons';
</script>

<footer
	class="bg-amber-50 dark:bg-gray-900 border-t-4 border-gray-900 dark:border-gray-500 pt-16 pb-8 font-mono transition-colors duration-300"
>
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
			<!-- BRANDING -->
			<div class="flex flex-col gap-6">
				<div class="flex items-center gap-2">
					<div
						class="w-8 h-8 bg-green-600 flex items-center justify-center shadow-sm overflow-hidden"
					>
						<span
							class="text-white font-bold text-2xl font-mono leading-none -rotate-[40deg] mt-1 ml-0.5"
							>e</span
						>
					</div>
					<span class="text-2xl font-bold font-pixel tracking-wider text-gray-900 dark:text-white"
						>ENES YESIL</span
					>
				</div>
				<p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
					> Building, learning, and staying curious.
				</p>
				<div class="mt-auto pt-4">
					<span class="text-xs text-gray-500 font-bold uppercase tracking-widest"> EST. 2024 </span>
				</div>
			</div>

			<!-- NAVIGATION -->
			<div class="flex flex-col gap-6">
				<h3
					class="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-gray-500 pb-2 inline-block w-fit"
				>
					DIRECTORY
				</h3>
				<nav class="grid grid-cols-2 gap-4 text-sm">
					<a
						href="/"
						class="hover:text-primary-600 dark:hover:text-primary-400 hover:translate-x-1 transition-transform duration-200"
						>[ HOME ]</a
					>
					<a
						href="/MoreMe"
						class="hover:text-primary-600 dark:hover:text-primary-400 hover:translate-x-1 transition-transform duration-200"
						>[ ABOUT ]</a
					>
					<a
						href="/Projects"
						class="hover:text-primary-600 dark:hover:text-primary-400 hover:translate-x-1 transition-transform duration-200"
						>[ PROJECTS ]</a
					>
					<a
						href="/Blog"
						class="hover:text-primary-600 dark:hover:text-primary-400 hover:translate-x-1 transition-transform duration-200"
						>[ BLOG ]</a
					>
					<a
						href="/Contact"
						class="hover:text-primary-600 dark:hover:text-primary-400 hover:translate-x-1 transition-transform duration-200"
						>[ CONTACT ]</a
					>
					<a
						href="/Resume"
						class="hover:text-primary-600 dark:hover:text-primary-400 hover:translate-x-1 transition-transform duration-200"
						>[ RESUME ]</a
					>
				</nav>
			</div>

			<!-- STATUS & SOCIAL -->
			<div class="flex flex-col gap-6">
				<h3
					class="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-gray-500 pb-2 inline-block w-fit"
				>
					NETWORK
				</h3>

				<!-- System Status -->
				<div
					class="bg-white dark:bg-gray-800 p-4 border-2 border-gray-900 dark:border-gray-500 shadow-hard dark:shadow-none"
				>
					<div class="flex items-center justify-between mb-2">
						<span
							class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest"
							>SYSTEM STATUS</span
						>
						<span class="flex h-3 w-3 relative">
							<span
								class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
							></span>
							<span class="relative inline-flex rounded-full h-3 w-3 bg-green-600 dark:bg-green-500"
							></span>
						</span>
					</div>
					<div class="font-pixel text-green-600 dark:text-green-400 text-lg tracking-wide">
						ALL SYSTEMS ONLINE
					</div>
				</div>

				<!-- Social Links -->
				<div class="flex gap-4 mt-2">
					<a
						href="https://github.com/enesyesil"
						target="_blank"
						class="p-2 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-500 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 transition-colors shadow-sm section-hover"
					>
						<GithubSolid class="w-5 h-5" />
					</a>
					<a
						href="https://linkedin.com/in/me-enesyesil"
						target="_blank"
						class="p-2 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-500 hover:bg-primary-700 hover:text-white dark:hover:bg-gray-700 transition-colors shadow-sm section-hover"
					>
						<LinkedinSolid class="w-5 h-5" />
					</a>
					<a
						href="mailto:enesy@my.yorku.ca"
						class="p-2 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-500 hover:bg-red-600 hover:text-white dark:hover:bg-gray-700 transition-colors shadow-sm section-hover"
					>
						<EnvelopeSolid class="w-5 h-5" />
					</a>
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<div
			class="border-t-2 border-gray-900 dark:border-gray-500 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-bold uppercase tracking-wide gap-4"
		>
			<div>
				&copy; {new Date().getFullYear()} ENES YESIL. ALL RIGHTS RESERVED.
			</div>
			<div class="flex gap-4">
				<span class="hover:text-gray-900 dark:hover:text-white cursor-pointer"
					>PRIVACY_PROTOCOL</span
				>
				<span class="hover:text-gray-900 dark:hover:text-white cursor-pointer"
					>TERMS_OF_SERVICE</span
				>
			</div>
		</div>
	</div>
</footer>

<style>
	.shadow-hard {
		box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 1);
	}
</style>
