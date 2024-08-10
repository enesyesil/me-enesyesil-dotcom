<script>
    import { Button, Card, Avatar } from 'flowbite-svelte';
    import ContactMe from './ContactMe.svelte';
    import { Section, PricingBodyHead, PricingCard, PricingItemWrapper, PricingHead, PricingItem } from 'flowbite-svelte-blocks';
</script>

<div class="min-h-screen bg-white-100 dark:bg-gray-900 py-10">
  <div class="max-w-screen-lg mx-auto px-4">
    <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-6 mt-12">Moneyball for Football: Identifying Undervalued Players</h1>

    <!-- Image Section -->
    <img class="w-full mb-8" src="/images/Soccer.jpg" alt="Moneyball for Football Dashboard" />

    <!-- Introduction Section -->
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-14">
      This project is inspired by the Moneyball philosophy, originally applied in baseball, and seeks to apply similar principles to football. By leveraging statistical analysis, the project aims to identify football players who are undervalued based on their market value compared to their on-field contributions.
    </p>
  
    <!-- Mission Section -->
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Project Goals</h2>
    
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      Uncover Undervalued Players: Analyze comprehensive player performance metrics to identify players whose market values do not reflect their true on-field contributions.
    </p>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      Data-Driven Decision Making: Utilize statistical models to support decision-making in football management, particularly in player acquisition and team building.
    </p>
     
    <!-- Tools and Technologies Section -->
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Tools and Technologies</h2>
    
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      Python: The primary programming language used for data processing and analysis.
    </p>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      Pandas: For data manipulation and handling of large datasets.
    </p>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      Scikit-Learn (sklearn): Machine learning library used for building and evaluating predictive models.
    </p>
  
    <!-- Vision Section -->
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Data Sources</h2>
    <h4 class="text-lg font-semibold text-gray-800 dark:text-white mb-6">The project utilizes datasets containing comprehensive player performance metrics, which may include:</h4>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      Player statistics (e.g., goals, assists, tackles, pass completion rate)
    </p>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      Physical attributes (e.g., height, weight, speed)
    </p>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      Market value data
    </p>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      Historical performance trends
    </p>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      Team and league information
    </p>
    
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
                <a href="https://github.com/enesyesil/Moneyball-Scout-ML" target="_blank" rel="noopener noreferrer">
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
