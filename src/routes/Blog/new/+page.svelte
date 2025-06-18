<script lang="ts">
    import { onMount } from 'svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { Button } from 'flowbite-svelte';

    let password = '';
    let authorized = false;
    let title = '';
    let excerpt = '';
    let content = '';
    let file: File | null = null;

    onMount(() => {
        authorized = localStorage.getItem('admin') === 'true';
    });

    async function login() {
        const res = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password })
        });
        if (res.ok) {
            authorized = true;
            localStorage.setItem('admin', 'true');
        } else {
            alert('Wrong password');
        }
    }

    async function submit() {
        if (!file) {
            alert('Select an image');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        formData.append('password', password);
        const upload = await fetch('/api/upload', { method: 'POST', body: formData });
        if (!upload.ok) {
            alert('Upload failed');
            return;
        }
        const { path } = await upload.json();
        const resp = await fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password, title, excerpt, content, image: path })
        });
        if (resp.ok) {
            alert('Posted');
            title = excerpt = content = '';
            file = null;
        } else {
            alert('Failed');
        }
    }
</script>
<Navbar />
<div class="bg-amber-50 min-h-screen p-8">
    {#if !authorized}
        <div class="max-w-md mx-auto flex flex-col space-y-4">
            <input type="password" placeholder="Password" bind:value={password} class="p-2 border" />
            <Button on:click={login}>Login</Button>
        </div>
    {:else}
        <div class="max-w-2xl mx-auto flex flex-col space-y-4">
            <input placeholder="Title" bind:value={title} class="p-2 border" />
            <input placeholder="Excerpt" bind:value={excerpt} class="p-2 border" />
            <textarea placeholder="Content" bind:value={content} class="p-2 border h-64"></textarea>
            <input type="file" accept="image/*" on:change={e => file = e.target.files[0]} />
            <Button on:click={submit}>Publish</Button>
        </div>
    {/if}
</div>
<Footer />
