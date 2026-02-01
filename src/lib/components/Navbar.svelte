<script>
	import { Navbar, Button, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar class="bg-amber-50/80 backdrop-blur-md sticky top-0 z-50 border-b border-amber-100/50">
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-2xl font-semibold text-gray-900 dark:text-white"
			>enesyesil.me()</span
		>
	</NavBrand>
	<div class="flex items-center md:order-2">
		<a href="/Contact">
			<Button
				class="bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2 rounded-lg transition-all duration-200 hover:shadow-lg"
				>Contact Me</Button
			>
		</a>
		<NavHamburger class="w-full md:flex md:w-auto md:order-1" />
	</div>

	<NavUl>
		<NavLi href="/" class="text-lg text-gray-700 hover:text-primary-600 transition-colors"
			>Home</NavLi
		>
		<NavLi href="/Resume" class="text-lg text-gray-700 hover:text-primary-600 transition-colors"
			>Resume</NavLi
		>
		<NavLi href="/MoreMe" class="text-lg text-gray-700 hover:text-primary-600 transition-colors"
			>About Me</NavLi
		>
		<NavLi href="/Projects" class="text-lg text-gray-700 hover:text-primary-600 transition-colors"
			>Projects</NavLi
		>
		<NavLi href="/Blog" class="text-lg text-gray-700 hover:text-primary-600 transition-colors"
			>Blog</NavLi
		>
	</NavUl>
</Navbar>
