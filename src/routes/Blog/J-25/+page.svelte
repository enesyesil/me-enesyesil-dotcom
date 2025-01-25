<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
    import { Button, Card, Avatar } from 'flowbite-svelte';
    // import ContactMe from './ContactMe.svelte';
    import { Section, PricingBodyHead, PricingCard, PricingItemWrapper, PricingHead, PricingItem } from 'flowbite-svelte-blocks';
  </script>
  <div class="bg-amber-50 ">
    <Navbar />
  <div class="min-h-screen bg-white-100 dark:bg-gray-900 py-10">
  <div class="max-w-screen-lg mx-auto px-4">
    <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-12 mt-12">The Human Brain: Complexity in Thought and Experience
    </h1>
  
  
  
      <!-- Image Section -->
      <img class="w-full mb-8 rounded-lg" src="/images/brain.jpg" alt="Fisor img" />
  
  
    <!-- Introduction Section -->
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-14">
        Exploring the concepts of access and phenomenal consciousness, the challenges of understanding subjective experiences, and the parallels between brains and computers.
    </p>
  
        <section>
          <h1 class="text-3xl font-bold mb-6">My Reflections</h1>
      
          <article class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">The Fascinating Complexity of the Human Brain</h2>
            <p class="text-lg font-light mb-8">
                The human brain is one of the most incredible and complex systems in existence. The more I think about it, the more I realize how much there is still to uncover. When we look at specific parts of the brain, it’s easier to notice patterns and understand how they work. But when we step back and try to grasp the brain as a whole, its complexity feels endless and mysterious.
            </p>
          <p class="text-lg font-light mb-8">
            One of the most fascinating aspects of the brain is how different it is for every person. Our unique brain structures influence the way we think, act, and experience the world. This individuality is what makes each of us special. But what exactly makes these experiences so personal and unique? This is where the concept of consciousness comes into play.
          </p>
            <h3 class="text-xl font-semibold mb-3">Two Types of Consciousness</h3>
            <p class="text-lg font-light mb-8">
                Consciousness can be divided into two types: "access consciousness" and "phenomenal consciousness." Access consciousness explains how the mind processes information logically and functionally, allowing us to think, reason, and act. Phenomenal consciousness, on the other hand, focuses on the subjective experience—"what it feels like" to see, hear, or sense something.

                For instance, when we see food, it’s not just about recognizing it. It’s also about the emotions, memories, and sensory experiences tied to it. This distinction is crucial because it shows that the mind isn’t just about performing tasks; it’s also about experiencing the world in a deeply personal way.
            </p>
      
            <h3 class="text-xl font-semibold mb-4">The Hard Problem of Consciousness</h3>
            <p class="text-lg font-light mb-8">
                This brings us to the "hard problem" of consciousness—a question that continues to challenge scientists and philosophers. While we’ve made significant progress in understanding how the brain works, we still don’t fully understand why experiences feel a certain way. Why does the color red evoke intensity, or why does music stir emotions? These questions highlight the limits of what we know about the mind.

                Understanding the brain’s structure and processes is one thing, but explaining why we feel and experience things in specific ways is a completely different challenge. It reminds us that there’s still so much we don’t know about ourselves.
            </p>
      
            <h3 class="text-xl font-semibold mb-3">Brains, Computers, and the Limits of Understanding</h3>
            <p class="text-lg font-light mb-8">
                As a computer science student, I often draw comparisons between the brain and computers. Both rely on patterns, symbols, and rules to process information. But while computers are designed to mimic logical processing, they lack the depth of subjective experience that comes with phenomenal consciousness. This raises an intriguing question: can we ever create something entirely different, or are we bound by the limits of our own understanding?
            </p>
           
            <h3 class="text-xl font-semibold mb-3">What do I think?</h3>
            <p class="text-lg font-light mb-8">
                Reflecting on these ideas, I’ve come to appreciate just how extraordinary the brain is. It’s not just a system for performing tasks—it’s the foundation of our thoughts, emotions, and individuality. The challenges of understanding consciousness remind us how much more there is to explore. For now, the mystery of why we feel and think the way we do continues to inspire curiosity and wonder.
            </p>
          </article>
      
         
        </section>
  
    <!-- More Info Section -->
  
<Section name="pricing">
    <PricingHead>
      <svelte:fragment slot="h2">Contact Info & Links</svelte:fragment>
      <svelte:fragment slot="paragraph">Here are your options.</svelte:fragment>
    </PricingHead>
    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      <PricingCard class="bg-amber-50">
        <PricingBodyHead>
          <svelte:fragment slot="h3">LinkedIn</svelte:fragment>
          <svelte:fragment slot="paragraph">You can connect with me!</svelte:fragment>
          <svelte:fragment slot="price">
        
          </svelte:fragment>
        </PricingBodyHead>
        <PricingItemWrapper>
          <svelte:fragment slot="btn">
            <a href="https://www.linkedin.com/in/enes-yesil-723080184/" target="_blank" rel="noopener noreferrer">
              <Button color="green">Let's Connect!</Button>
            </a>
          </svelte:fragment>
        </PricingItemWrapper>
      </PricingCard>
  
      <PricingCard class="bg-amber-50">
        <PricingBodyHead>
          <svelte:fragment slot="h3">GitHub</svelte:fragment>
          <svelte:fragment slot="paragraph">Explore my projects and contributions.</svelte:fragment>
          <svelte:fragment slot="price">
        
          </svelte:fragment>
        </PricingBodyHead>
        <PricingItemWrapper>
          <svelte:fragment slot="btn">
            <a href="https://github.com/enesyesil" target="_blank" rel="noopener noreferrer">
              <Button color="green">Go to GitHub</Button>
            </a>
          </svelte:fragment>
        </PricingItemWrapper>
      </PricingCard>
  
      <PricingCard class="bg-amber-50">
        <PricingBodyHead>
          <svelte:fragment slot="h3">Email</svelte:fragment>
          <svelte:fragment slot="paragraph">Got a question? Let me know.</svelte:fragment>
          <svelte:fragment slot="price">
        
          </svelte:fragment>
        </PricingBodyHead>
        <PricingItemWrapper>
          <svelte:fragment slot="btn">
            <a href="mailto:enesy@my.yorku.ca">
              <Button color="green">Send me an email</Button>
            </a>
          </svelte:fragment>
        </PricingItemWrapper>
      </PricingCard>
    </div>
  </Section>
  
    
  </div>
  
  <!-- Contact Button -->
  
  </div>
  <Footer/>
</div>