<script>
  import { Button, Card, Avatar } from 'flowbite-svelte';
  import ContactMe from './ContactMe.svelte';
  import { Section, PricingBodyHead, PricingCard, PricingItemWrapper, PricingHead, PricingItem } from 'flowbite-svelte-blocks';
</script>

<div class="min-h-screen bg-white-100 dark:bg-gray-900 py-10">
<div class="max-w-screen-lg mx-auto px-4">
  <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-6 mt-12">Fisor: Revolutionizing Financial Management
  </h1>



    <!-- Image Section -->
    <img class="w-full mb-8" src="/images/Fisor.jpg" alt="Fisor img" />


  <!-- Introduction Section -->
  <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-14">
    Revolutionize financial management with our advanced calculator, powered by AI and data analytics to simplify complex financial calculations across buying homes, purchasing cars, managing investments, and planning for retirement.
  </p>

  <!-- About Us Section -->
  <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">About Us</h2>
  
  <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
    At Fisor, we’re not just a financial calculator; we’re innovators and educators in the financial technology landscape. Our platform is built on the foundation of AI and data analytics, designed to simplify financial calculations and empower users with actionable insights. From personal budgeting to complex investment strategies, Fisor provides the tools and knowledge necessary to navigate today’s financial challenges with confidence.
  </p>
   
  <!-- Mission Section -->
  <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Our Mission</h2>
  
  <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
    Empowering Financial Independence with Smart Technology. Our mission is to make financial mastery achievable for everyone. Fisor leverages cutting-edge technology to deliver personalized, precise financial advice and calculations that help individuals and businesses optimize their financial outcomes. We are committed to breaking down barriers to financial education and enabling our users to make decisions that lead to financial success.
  </p>

  <!-- Vision Section -->
  <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Our Vision</h2>
  
  <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
    Creating a Financially Informed World. We envision a future where everyone, regardless of background or education level, has access to the tools and information needed to make empowered financial decisions. Fisor aims to lead the way in creating a globally informed community, equipped to achieve financial security and prosperity through our intuitive and powerful technological solutions.
  </p>

  <!-- Tech Stack Section -->
  <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Tools and Technologies</h2>
  
  <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
    SvelteKit: The frontend framework used for building fast, reactive user interfaces.
  </p>
  <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
    TypeScript: The programming language used on the backend to ensure type safety and build robust APIs.
  </p>
  <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
    PostgreSQL: The relational database used for storing and managing data securely.
  </p>
  <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
    OpenAI API: Integrated for natural language processing and text embedding, enhancing user interactions and insights.
  </p>
  <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
    Data Modeling & Training: Leveraging advanced data models to provide accurate financial advice and predictions, continuously improving through machine learning.
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
          </PricingBodyHead>
          <PricingItemWrapper>
            <svelte:fragment slot="btn">
              <a href="https://github.com/enesyesil/Fisor" target="_blank" rel="noopener noreferrer">
                <Button color="green">Go to GitHub</Button>
              </a>
            </svelte:fragment>
          </PricingItemWrapper>
        </PricingCard>
    
        <PricingCard class="bg-amber-50">
          <PricingBodyHead>
            <svelte:fragment slot="h3">Email</svelte:fragment>
            <svelte:fragment slot="paragraph">Got a question? Let me know.</svelte:fragment>
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
