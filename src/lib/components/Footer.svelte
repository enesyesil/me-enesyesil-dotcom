<script>
	import { Section } from 'flowbite-svelte-blocks';

	import {
		Footer,
		FooterBrand,
		FooterLinkGroup,
		FooterLink,
		FooterCopyright,
		FooterIcon
	} from 'flowbite-svelte';
</script>

<Footer
	footerType="socialmedia"
	class="bg-amber-50 border-t-2 border-gray-900 transition-colors duration-300"
>
	<div class="mx-auto max-w-7xl px-4 py-8 text-center font-mono">
		<p class="my-6 text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm">
			> Dedicated and hardworking Computer Science student with a passion for software development,
			committed to delivering outstanding results and exceeding expectations.
		</p>

		<FooterLinkGroup
			ulClass="flex flex-wrap justify-center items-center mb-6 text-gray-700 space-x-6 font-bold"
		>
			<FooterLink
				liClass="mb-0"
				aClass="hover:text-primary-600 transition-colors hover:underline decoration-2 underline-offset-4"
				href="/MoreMe">[ About Me ]</FooterLink
			>
			<FooterLink
				liClass="mb-0"
				aClass="hover:text-primary-600 transition-colors hover:underline decoration-2 underline-offset-4"
				href="/Resume">[ My Resume ]</FooterLink
			>
			<FooterLink
				liClass="mb-0"
				aClass="hover:text-primary-600 transition-colors hover:underline decoration-2 underline-offset-4"
				href="/Contact">[ Contact ]</FooterLink
			>
		</FooterLinkGroup>

		<span class="text-xs text-gray-500 sm:text-center block"
			>© 2024-2025 <a href="/" class="hover:text-primary-600 transition-colors font-bold"
				>Enes Yesil</a
			>. All Rights Reserved.</span
		>
	</div>
</Footer>
