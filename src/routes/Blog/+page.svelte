<script lang="ts">
    import { Card, Button } from 'flowbite-svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import { onMount } from 'svelte';

    let hCard = false;
    let authorized = false;

    onMount(() => {
        authorized = localStorage.getItem('admin') === 'true';
    });
</script>
<Navbar />
<div class="flex flex-col justify-center items-center bg-amber-50 py-12">
    <div class="w-full max-w-4xl my-4">
        <Card href="/Blog/Jan-24" horizontal={hCard} size="none" reverse={hCard} class="bg-amber-50 hover:bg-amber-100">
            <div class="flex flex-col md:flex-row items-center md:items-start">
                <img src="/images/duck-rabbit.png" alt="Profile Image" class="w-48 h-48 md:w-48 md:h-48 object-cover mb-4 md:mb-0 md:mr-6 rounded-lg" />
                <div class="flex-1 mb-4">
                    <h1 class="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Rabbit or Duck?</h1>
                    <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">Exploring the intersection of computer science and philosophy through Bayes' Theorem, examining how minds and machines process probability and perception.</p>
                    <Button color="green" href="/Blog/Jan-24">Read<ArrowRightOutline /></Button>
                </div>
            </div>
        </Card>
    </div>
    <div class="w-full max-w-4xl my-4">
        <Card href="/Blog/J-25" horizontal={hCard} size="none" reverse={hCard} class="bg-amber-50 hover:bg-amber-100">
            <div class="flex flex-col md:flex-row items-center md:items-start">
                <img src="/images/brain.jpg" alt="Profile Image" class="w-48 h-48 md:w-48 md:h-48 object-cover mb-4 md:mb-0 md:mr-6 rounded-lg" />
                <div class="flex-1 mb-4">
                    <h1 class="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">The Human Brain: Complexity in Thought and Experience</h1>
                    <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">Exploring the concepts of access and phenomenal consciousness, the challenges of understanding subjective experiences, and the parallels between brains and computers.</p>
                    <Button color="green" href="/Blog/J-25">Read<ArrowRightOutline /></Button>
                </div>
            </div>
        </Card>
    </div>
    {#if authorized}
        <Button color="green" href="/Blog/new">Write New Post</Button>
    {/if}
</div>
<Footer />
