<script>
  import { Button, Card } from 'flowbite-svelte';
  import ContactMe from './ContactMe.svelte';
  import { Section, PricingBodyHead, PricingCard, PricingItemWrapper, PricingHead } from 'flowbite-svelte-blocks';
</script>

<div class="min-h-screen bg-white-100 dark:bg-gray-900 py-10">
  <div class="max-w-screen-lg mx-auto px-4">
    <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-6 mt-12">
      Fisor Analytics: Predictive Intelligence for Modern Businesses
    </h1>

    <!-- Image -->
    <img class="w-full mb-8" src="/images/new-fisor.png" alt="Fisor Analytics" />

    <!-- Introduction -->
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-14">
      Fisor Analytics empowers Canadian SMEs with predictive, AI-powered insights that uncover revenue opportunities, reduce waste, and drive strategic decision-making — without requiring a full data team.
    </p>

    <!-- About -->
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">About Us</h2>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      Built for SMEs, Fisor Analytics combines open public data, operational signals, and AI models to offer actionable intelligence. Our modular engines provide insights tailored to industries like logistics, construction, and real estate.
    </p>

    <!-- Mission -->
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Our Mission</h2>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      Democratize predictive analytics for businesses that have outgrown spreadsheets but can’t afford enterprise BI tools. We help companies make data-driven decisions with ease and confidence.
    </p>

    <!-- Vision -->
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Our Vision</h2>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      We envision a Canadian business landscape where every company — regardless of budget or size — can access the same level of data intelligence as large enterprises. Fisor aims to be the 'Palantir for Canada’s SMEs.'
    </p>

    <!-- Tools & Technologies -->
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Tools and Technologies</h2>
    <ul class="list-disc text-lg font-light text-gray-500 dark:text-gray-400 pl-6 space-y-4 mb-12">
      <li><strong>Go (Golang):</strong> High-performance backend orchestration</li>
      <li><strong>Python:</strong> AI pipeline and analytics engine development</li>
      <li><strong>SvelteKit:</strong> Frontend interface with fast, reactive UI</li>
      <li><strong>PostgreSQL:</strong> Secure tenant-aware relational database</li>
      <li><strong>Apache Iceberg:</strong> Columnar data lakehouse format for efficient analytics</li>
      <li><strong>Apache Spark:</strong> High-speed analytics and ML pipelines</li>
      <li><strong>Redis:</strong> Low-latency context memory and caching</li>
      <li><strong>Azure Blob Storage:</strong> Public + internal dataset storage per tenant</li>
      <li><strong>Cohere + Perplexity API:</strong> AI agents for research, reasoning, and summarization</li>
    </ul>

    <!-- Links -->
    <Section name="pricing">
      <PricingHead>
        <svelte:fragment slot="h2">More Info & Links</svelte:fragment>
        <svelte:fragment slot="paragraph">Explore our resources.</svelte:fragment>
      </PricingHead>

      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <PricingCard class="bg-amber-50">
          <PricingBodyHead>
            <svelte:fragment slot="h3">Website</svelte:fragment>
            <svelte:fragment slot="paragraph">This page is part of our early showcase.</svelte:fragment>
          </PricingBodyHead>
          <PricingItemWrapper>
            <svelte:fragment slot="btn">
              <a href="https://fisoranalytics.org/" target="_blank">
                <Button color="green">Visit Website</Button>
              </a>
            </svelte:fragment>
          </PricingItemWrapper>
        </PricingCard>

     

        <PricingCard class="bg-amber-50">
          <PricingBodyHead>
            <svelte:fragment slot="h3">Contact</svelte:fragment>
            <svelte:fragment slot="paragraph">Have a question or want to collaborate?</svelte:fragment>
          </PricingBodyHead>
          <PricingItemWrapper>
            <svelte:fragment slot="btn">
              <a href="mailto:enesy@my.yorku.ca">
                <Button color="green">Send Email</Button>
              </a>
            </svelte:fragment>
          </PricingItemWrapper>
        </PricingCard>

        <PricingCard class="bg-amber-50">
          <PricingBodyHead>
            <svelte:fragment slot="h3">Linkedin</svelte:fragment>
            <svelte:fragment slot="paragraph">You can connect with Fisor Analytics team!</svelte:fragment>
          </PricingBodyHead>
          <PricingItemWrapper>
            <svelte:fragment slot="btn">
              <a href="https://www.linkedin.com/company/fisoranalytics">
                <Button color="green">Let's Connect!</Button>
              </a>
            </svelte:fragment>
          </PricingItemWrapper>
        </PricingCard>
      </div>
    </Section>
  </div>
</div>
