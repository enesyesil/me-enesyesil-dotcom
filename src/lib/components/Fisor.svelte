<script lang="ts">
  import { Section, Cta } from 'flowbite-svelte-blocks';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<Section name="ctawithimg">
  <Cta ctatype="image">
    <svelte:fragment slot="img">
      <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard" />
      <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard" />
    </svelte:fragment>
    <svelte:fragment slot="h2">Let's create more tools and ideas that brings us together.</svelte:fragment>
    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
    <a href="/" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
      Get started
      <ArrowRightOutline size="md" class="ml-2 -mr-1" />
    </a>
  </Cta>
</Section>