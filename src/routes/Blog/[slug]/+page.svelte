<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  export let data: {
    frontmatter: {
      title: string;
      date?: string;
      image?: string;
      description?: string;
    };
    content: string;
  };
</script>

<div class="bg-amber-50 min-h-screen flex flex-col justify-between">
  <Navbar />
  <main class="max-w-screen-md mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-4">{data.frontmatter.title}</h1>
    {#if data.frontmatter.image}
      <img src={data.frontmatter.image} alt={data.frontmatter.title} class="rounded mb-6" />
    {/if}
    <p class="text-gray-600 mb-8">{data.frontmatter.description}</p>
    <article class="prose dark:prose-invert">
      {@html data.content}
    </article>
  </main>
  <Footer />
</div>
