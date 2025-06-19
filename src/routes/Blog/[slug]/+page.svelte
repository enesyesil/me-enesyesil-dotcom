<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  export let data;
</script>

<Navbar />

<main class="bg-amber-50 min-h-screen py-16 px-4">
  <article class="prose dark:prose-invert lg:prose-xl mx-auto">
    <h1>{data.data.title}</h1>
    <p class="text-sm text-gray-600">{data.data.date}</p>

    {#if data.data.image}
      <img src={data.data.image} alt={data.data.title} class="rounded-lg mb-4" />
    {/if}

    <p class="italic text-gray-600">{data.data.description}</p>

    <div class="mt-8">
      {@html data.content}
    </div>
  </article>
</main>

<Footer />
