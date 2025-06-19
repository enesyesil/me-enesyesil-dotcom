<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  export let form: {
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
    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      {form.frontmatter.title}
    </h1>

    {#if form.frontmatter.image}
      <img
        src={form.frontmatter.image}
        alt={form.frontmatter.title}
        class="rounded-lg w-full mb-6"
      />
    {/if}

    {#if form.frontmatter.description}
      <p class="text-gray-600 text-lg mb-10">
        {form.frontmatter.description}
      </p>
    {/if}

    <article class="prose dark:prose-invert max-w-none text-lg leading-relaxed">
      {@html form.content}
    </article>
  </main>

  <Footer />
</div>
