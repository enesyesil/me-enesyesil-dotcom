<script>
  import { Progressbar } from 'flowbite-svelte';
</script>

<div class="max-w-full flex items-center justify-center mb-8 mt-8 px-2 sm:px-4 lg:px-4">
  <section class="p-12 rounded-lg w-full max-w-4xl mx-auto">
    <h2 class="text-3xl text-center font-bold mb-4">Key Facts or Skills</h2>
    <div class="mb-6">
      <label for="javascript" class="block text-lg font-medium text-gray-700">JavaScript</label>
      <Progressbar progress="80" id="javascript" color="green"/>
    </div>
    <div class="mb-6">
      <label for="python" class="block text-lg font-medium text-gray-700">Python</label>
      <Progressbar progress="70" id="python" color="green" />
    </div>
    <div class="mb-6">
      <label for="css" class="block text-lg font-medium text-gray-700">CSS</label>
      <Progressbar progress="60" id="css" color="green"/>
    </div>
    <div class="mb-6">
      <label for="html" class="block text-lg font-medium text-gray-700">HTML</label>
      <Progressbar progress="90" id="html" color="green"/>
    </div>
    <div class="mb-6">
      <label for="sub" class="block text-lg font-medium text-gray-700">Java</label>
      <Progressbar progress="90" id="html" color="green"/>
    </div>
    <!-- Add more skills as needed -->
  </section>
</div>
