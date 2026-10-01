<script>
	import { resolve } from '$app/paths';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { Navbar, Button, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { SunSolid, MoonSolid } from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';

	let isDark = false;
	let menuHidden = true;
	afterNavigate(() => {
		menuHidden = true;
	});

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
	<NavBrand href={resolve('/')}>
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
			<Button href={resolve('/Contact')} class="retro-btn rounded-none">CONTACT</Button>
		</div>
		<NavHamburger
			onClick={() => (menuHidden = !menuHidden)}
			aria-expanded={!menuHidden}
			aria-controls="site-menu"
			class="w-full md:hidden ml-3 dark:text-white dark:hover:bg-gray-800"
		/>
	</div>

	<NavUl id="site-menu" hidden={menuHidden} activeUrl={$page.url.pathname} class="dark:bg-gray-900">
		<NavLi
			href={resolve('/')}
			class="text-lg font-mono text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
			>[HOME]</NavLi
		>
		<NavLi
			href={resolve('/Resume')}
			class="text-lg font-mono text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
			>[RESUME]</NavLi
		>
		<NavLi
			href={resolve('/MoreMe')}
			class="text-lg font-mono text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
			>[ABOUT ME]</NavLi
		>
		<NavLi
			href={resolve('/Projects')}
			class="text-lg font-mono text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
			>[PROJECTS]</NavLi
		>
		<NavLi
			href={resolve('/Blog')}
			class="text-lg font-mono text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
			>[BLOG]</NavLi
		>
		<li class="md:hidden mt-4">
			<Button href={resolve('/Contact')} class="w-full retro-btn rounded-none">CONTACT</Button>
		</li>
	</NavUl>
</Navbar>
