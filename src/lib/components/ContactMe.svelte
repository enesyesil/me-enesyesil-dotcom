<script lang="ts">
  import { Section, PricingBodyHead, PricingCard, PricingItemWrapper, PricingHead, PricingItem } from 'flowbite-svelte-blocks';
  import { Button } from 'flowbite-svelte';
</script>

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
