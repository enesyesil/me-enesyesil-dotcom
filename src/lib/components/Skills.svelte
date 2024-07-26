<script>
  import { Progressbar } from 'flowbite-svelte';
</script>

<section class="bg-white p-6 rounded-lg shadow-md">
  <h2 class="text-3xl font-bold mb-4">Key Facts or Skills</h2>
  <div class="mb-4">
    <label for="javascript" class="block text-lg font-medium text-gray-700">JavaScript</label>
    <Progressbar progress="80" id="javascript" />
  </div>
  <div class="mb-4">
    <label for="python" class="block text-lg font-medium text-gray-700">Python</label>
    <Progressbar progress="70" id="python" />
  </div>
  <div class="mb-4">
    <label for="css" class="block text-lg font-medium text-gray-700">CSS</label>
    <Progressbar progress="60" id="css" />
  </div>
  <div class="mb-4">
    <label for="html" class="block text-lg font-medium text-gray-700">HTML</label>
    <Progressbar progress="90" id="html" />
  </div>
  <!-- Add more skills as needed -->
</section>
