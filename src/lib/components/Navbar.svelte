<script>
// @ts-nocheck

  import { Navbar, Button ,  NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider, Timeline } from 'flowbite-svelte';
</script>

<Navbar class="bg-amber-50">
  <NavBrand href="/">
    
    <span class="self-center whitespace-nowrap text-2xl font-semibold  dark:text-white">me.('enesyesil')</span>
  </NavBrand>
  <div class="flex items-center md:order-2">
    <a href="mailto:enesy@my.yorku.ca">
      <Button color="green">Contact Me</Button>
    </a>
   <NavHamburger class1="w-full md:flex md:w-auto md:order-1" /> 
  </div>
  
 
  <NavUl>
    <NavLi href="/"  class="text-xl text-center" active={true}> Home</NavLi>
    <NavLi href="/enesyesil-resume-25.pdf"  class="text-xl text-center" active={true}> Resume</NavLi>
    <NavLi href="/MoreMe"  class="text-xl text-center" active={true}> About Me</NavLi>
    <NavLi href="/Projects"  class="text-xl text-center" active={true}>Projects</NavLi>
    <NavLi href="/Blog"  class="text-xl text-center" active={true}>Blog</NavLi>
  </NavUl>
</Navbar>