<script>
    import { Section } from 'flowbite-svelte-blocks';
   
    import { Footer, FooterBrand, FooterLinkGroup, FooterLink, FooterCopyright, FooterIcon } from 'flowbite-svelte';
  </script>
  
  <Footer footerType="socialmedia" class="bg-amber-50">
    <div class="mx-auto max-w-screen-xl text-center">
     
      <p class="my-6 text-gray-500 dark:text-gray-400">Dedicated and hardworking Computer Science student with a passion for software development, committed to delivering outstanding results and exceeding expectations.</p>
      <FooterLinkGroup ulClass="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">About Me</FooterLink>
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/resume.pdf">My Resume</FooterLink>
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Contact</FooterLink>
      </FooterLinkGroup>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024-2025 <a href="https://flowbite.com/" class="hover:underline">Enes Yesil</a>. All Rights Reserved.</span>
    </div>
  </Footer>