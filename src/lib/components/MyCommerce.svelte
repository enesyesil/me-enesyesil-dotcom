<script>
    import { Button, Card } from 'flowbite-svelte';
    import ContactMe from './ContactMe.svelte';
    import { Section, PricingBodyHead, PricingCard, PricingItemWrapper, PricingHead } from 'flowbite-svelte-blocks';
  </script>
  
  <div class="min-h-screen bg-white-100 dark:bg-gray-900 py-10">
    <div class="max-w-screen-lg mx-auto px-4">
      <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-6 mt-12">E-Commerce Platform</h1>
      
      <!-- Image Section -->
      <img class="w-full mb-8" src="/images/mycom.png" alt="E-Commerce Platform" />
  
      <!-- Introduction Section -->
      <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-14">
        A modern, fully functional e-commerce platform that enables customers to browse products, manage a shopping cart, and complete orders.
        The platform features robust role-based access control, separating customer functionalities from administrative operations.
      </p>
  
      <!-- Features Section -->
      <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Features</h2>
      <ul class="list-disc list-inside text-lg font-light text-gray-500 dark:text-gray-400 mb-14">
        <li>User Registration and Login: Secure user authentication using JWT tokens.</li>
        <li>Filter products by categories, brands, and models.</li>
        <li>Shopping cart management with persistence across sessions.</li>
        <li>Admin features for inventory and sales management.</li>
      </ul>
      <img class="w-full mb-8" src="/images/Screenshot1.png" alt="E-Commerce Platform" />
      <img class="w-full mb-8" src="/images/Screenshot2.png" alt="E-Commerce Platform" />
      <img class="w-full mb-8" src="/images/Screenshot3.png" alt="E-Commerce Platform" />
      <img class="w-full mb-8" src="/images/Screenshot4.png" alt="E-Commerce Platform" />
      <!-- Tools and Technologies Section -->
      <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Tools and Technologies</h2>
      <ul class="list-disc list-inside text-lg font-light text-gray-500 dark:text-gray-400 mb-14">
        <li>Frontend: Next.js, Tailwind CSS, Vercel</li>
        <li>Backend: Node.js, Express.js, PostgreSQL</li>
        <li>Database Layer: DAO Design Pattern</li>
        <li>Deployment: Vercel (Frontend), DigitalOcean (Backend)</li>
      </ul>
  
      <!-- More Info Section -->
      <Section name="more-info">
        <PricingHead>
          <svelte:fragment slot="h2">More Info & Links</svelte:fragment>
          <svelte:fragment slot="paragraph">Explore the project in detail.</svelte:fragment>
        </PricingHead>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <PricingCard class="bg-blue-50">
            <PricingBodyHead>
              <svelte:fragment slot="h3">Repository</svelte:fragment>
              <svelte:fragment slot="paragraph">Browse the code on GitHub.</svelte:fragment>
            </PricingBodyHead>
            <PricingItemWrapper>
              <svelte:fragment slot="btn">
                <a href="https://github.com/enesyesil" target="_blank" rel="noopener noreferrer">
                  <Button color="blue">View on GitHub</Button>
                </a>
              </svelte:fragment>
            </PricingItemWrapper>
          </PricingCard>
          <PricingCard class="bg-blue-50">
            <PricingBodyHead>
              <svelte:fragment slot="h3">Live Demo</svelte:fragment>
              <svelte:fragment slot="paragraph">Try out the deployed platform.</svelte:fragment>
            </PricingBodyHead>
            <PricingItemWrapper>
              <svelte:fragment slot="btn">
                <a href="https://my-commerce-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button color="blue">View Demo</Button>
                </a>
              </svelte:fragment>
            </PricingItemWrapper>
          </PricingCard>
          <PricingCard class="bg-blue-50">
            <PricingBodyHead>
              <svelte:fragment slot="h3">Email</svelte:fragment>
              <svelte:fragment slot="paragraph">Questions? Reach out via email.</svelte:fragment>
            </PricingBodyHead>
            <PricingItemWrapper>
              <svelte:fragment slot="btn">
                <a href="mailto:enesy@my.yorku.ca">
                  <Button color="blue">Contact Me</Button>
                </a>
              </svelte:fragment>
            </PricingItemWrapper>
          </PricingCard>
        </div>
      </Section>
    </div>
  </div>
  