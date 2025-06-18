<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';

    let post: any = null;
    $: id = $page.params.id;

    onMount(async () => {
        const res = await fetch(`/api/posts/${id}`);
        if (res.ok) {
            post = await res.json();
        }
    });
</script>
<Navbar />
{#if post}
<div class="bg-amber-50 min-h-screen p-8">
    <div class="max-w-2xl mx-auto">
        <img src={post.image} alt={post.title} class="mb-8 rounded" />
        <h1 class="text-4xl font-bold mb-4">{post.title}</h1>
        <p class="mb-6">{post.excerpt}</p>
        <div class="whitespace-pre-wrap">{post.content}</div>
    </div>
</div>
{/if}
<Footer />
