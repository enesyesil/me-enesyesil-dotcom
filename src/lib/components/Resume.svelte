<script>
    import { onMount } from 'svelte';
  </script>
  
  <div class="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold mb-4">My Resume</h1>
    <iframe title="Resume" src="/enesyesil-resume-25.pdf" class="w-full h-screen max-w-4xl border-2 border-gray-300 mb-4"></iframe>
    <a href="/images/enesyesil-resume.pdf" download="enesyesil-resume.pdf" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
      Download Resume
    </a>
  </div>
  
  <style>
    iframe {
      height: 80vh; /* Adjust this value based on your preference */
    }
  </style>
  