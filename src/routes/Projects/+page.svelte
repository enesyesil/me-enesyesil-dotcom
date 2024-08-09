<script lang="ts">
    import { Section, Portfolio, PortfolioItem } from 'flowbite-svelte-blocks';
  
    const portfolios = [
      {
        customer: 'Business',
        title: 'AI Powered Financial Calculator',
        description: 'Advanced financial calculator, powered by AI and data analytics to simplify complex financial calculations across buying homes, purchasing cars, managing investments, and planning for retirement.',
        href: '/Projects/Fisor',
        linkTitle: 'View case study'
      },
      {
        customer: 'Fun Project',
        title: 'Weddify',
        description: 'Weddify is a personalized wedding RSVP and invitation website . It offers to create customized invitations, manage guest lists, and collect RSVPs effortlessly.',
        href: '/Projects/Weddify',
        linkTitle: 'View case study'
      },
      {
        customer: 'School Project',
        title: 'Machine Learning Model',
        description: 'Developed a Python-based, Moneyball-inspired machine learning model to analyze football player metrics. The model identifies undervalued talent by aligning on-field performance with market valuations..',
        href: '/Projects/Moneyball',
        linkTitle: 'View case study'
      }
    ];
  </script>
  
  <Section name="portfolio" sectionClass="bg-white dark:bg-gray-900 antialiased">
    <Portfolio title="Our work" subtitle="Crafted with skill and care to help our clients grow their business!">
      {#each portfolios as item}
        <PortfolioItem {item} />
      {/each}
    </Portfolio>
  </Section>