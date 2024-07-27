<script>
  import AboutMe from '../lib/components/AboutMe.svelte';
  import Timeline from '../lib/components/Timeline.svelte';
  import Skills from '../lib/components/Skills.svelte';
  import ContactMe from '../lib/components/ContactMe.svelte';
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="bg-amber-50 ">
  <Navbar />
  <AboutMe />

  <Timeline/>

  <Skills/>

  <ContactMe/>

  <Footer/>
</div>
