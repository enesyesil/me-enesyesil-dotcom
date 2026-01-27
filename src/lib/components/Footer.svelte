<script>
    import { Section } from 'flowbite-svelte-blocks';
   
    import { Footer, FooterBrand, FooterLinkGroup, FooterLink, FooterCopyright, FooterIcon } from 'flowbite-svelte';
  </script>
  
<Footer footerType="socialmedia" class="bg-amber-50 border-t border-amber-100/50 backdrop-blur-sm transition-colors duration-300">
  <div class="mx-auto max-w-7xl px-4 py-8 text-center">
    
    <p class="my-6 text-gray-500 max-w-2xl mx-auto leading-relaxed">Dedicated and hardworking Computer Science student with a passion for software development, committed to delivering outstanding results and exceeding expectations.</p>
    
    <FooterLinkGroup ulClass="flex flex-wrap justify-center items-center mb-6 text-gray-600 space-x-6">
      <FooterLink liClass="mb-0" aClass="hover:text-primary-600 transition-colors" href="/MoreMe">About Me</FooterLink>
      <FooterLink liClass="mb-0" aClass="hover:text-primary-600 transition-colors" href="/Resume">My Resume</FooterLink>
      <FooterLink liClass="mb-0" aClass="hover:text-primary-600 transition-colors" href="/Contact">Contact</FooterLink>
    </FooterLinkGroup>
    
    <span class="text-sm text-gray-400 sm:text-center block">© 2024-2025 <a href="/" class="hover:text-primary-600 transition-colors font-medium">Enes Yesil</a>. All Rights Reserved.</span>
  </div>
</Footer>