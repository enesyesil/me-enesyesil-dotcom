<script>
	import { Navbar, Button, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { SunSolid, MoonSolid } from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';

	let isDark = false;

	onMount(() => {
		isDark = document.documentElement.classList.contains('dark');
	});

	function toggleTheme() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('color-theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('color-theme', 'light');
		}
	}
</script>

<Navbar
	class="bg-amber-50 dark:bg-gray-900 sticky top-0 z-50 border-b-2 border-gray-900 dark:border-gray-500 px-4 py-4 transition-colors duration-300"
>
	<NavBrand href="/">
		<span
			class="self-center whitespace-nowrap text-2xl font-bold font-mono text-gray-900 dark:text-white"
			>enesyesil.me()</span
		>
	</NavBrand>
	<div class="flex items-center md:order-2 gap-4">
		<!-- Theme Toggle -->
		<button
			aria-label="Toggle Dark Mode"
			class="p-2 border-2 border-gray-900 dark:border-gray-500 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all rounded-lg"
			on:click={toggleTheme}
		>
			{#if isDark}
				<SunSolid class="w-5 h-5" />
			{:else}
				<MoonSolid class="w-5 h-5" />
			{/if}
		</button>

		<div class="hidden md:block">
			<Button href="/Contact" class="retro-btn rounded-none">CONTACT</Button>
		</div>
		<NavHamburger class="w-full md:hidden ml-3 dark:text-white dark:hover:bg-gray-800" />
	</div>

	<NavUl class="dark:bg-gray-900">
		<NavLi
			href="/"
			class="text-lg font-mono text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
			>[HOME]</NavLi
		>
		<NavLi
			href="/Resume"
			class="text-lg font-mono text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
			>[RESUME]</NavLi
		>
		<NavLi
			href="/MoreMe"
			class="text-lg font-mono text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
			>[ABOUT ME]</NavLi
		>
		<NavLi
			href="/Projects"
			class="text-lg font-mono text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
			>[PROJECTS]</NavLi
		>
		<NavLi
			href="/Blog"
			class="text-lg font-mono text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
			>[BLOG]</NavLi
		>
		<li class="md:hidden mt-4">
			<Button href="/Contact" class="w-full retro-btn rounded-none">CONTACT</Button>
		</li>
	</NavUl>
</Navbar>
