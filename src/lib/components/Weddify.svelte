<script>
  import { Button, Card, Avatar } from 'flowbite-svelte';
  import ContactMe from './ContactMe.svelte';
  import { Section, PricingBodyHead, PricingCard, PricingItemWrapper, PricingHead, PricingItem } from 'flowbite-svelte-blocks';
</script>

<div class="min-h-screen bg-white-100 dark:bg-gray-900 py-10">
  <div class="max-w-screen-lg mx-auto px-4">
    <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-6 mt-12">Weddify: Personalized Wedding RSVP and Invitation Website
    </h1>
    
      <!-- Image Section -->
      <img class="w-full mb-8" src="/images/Weddify.jpg" alt="Weddify img" />

       
    <!-- Introduction Section -->
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-14">
      Weddify is a personalized wedding RSVP and invitation website. It offers the ability to create customized invitations, manage guest lists, and collect RSVPs effortlessly. 
      A dashboard will soon be added to allow users to manage everything in one place, and additional customization options will also be available to tailor the site to your specific wedding needs.
    </p>

    <!-- Tools and Technologies Section -->
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Tools and Technologies</h2>
    
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      Next.js: The framework used for building the website with server-side rendering.
    </p>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      TailwindCSS: A utility-first CSS framework used for designing responsive and modern user interfaces.
    </p>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      React: A JavaScript library for building user interfaces, especially for single-page applications.
    </p>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      Google Sheets API: Used for integrating and managing guest lists via Google Sheets.
    </p>

    <!-- More Info Section -->
    <Section name="pricing">
      <PricingHead>
        <svelte:fragment slot="h2">More Info & Links</svelte:fragment>
        <svelte:fragment slot="paragraph">Here are your options.</svelte:fragment>
      </PricingHead>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <PricingCard class="bg-amber-50">
          <PricingBodyHead>
            <svelte:fragment slot="h3">Website</svelte:fragment>
            <svelte:fragment slot="paragraph">Website is temporarily unavailable</svelte:fragment>
            <svelte:fragment slot="price">
          
            </svelte:fragment>
          </PricingBodyHead>
          <PricingItemWrapper>
            <svelte:fragment slot="btn">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Button color="green">Visit Website</Button>
              </a>
            </svelte:fragment>
          </PricingItemWrapper>
        </PricingCard>
    
        <PricingCard class="bg-amber-50">
          <PricingBodyHead>
            <svelte:fragment slot="h3">GitHub</svelte:fragment>
            <svelte:fragment slot="paragraph">Explore the repository.</svelte:fragment>
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
