<script>
  import { Card, Button, Toggle } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  let hCard = false;
</script>

<div class="flex justify-center items-center bg-amber-50 py-12">
  <div class="w-full max-w-4xl">
    <Card href="/" horizontal={hCard} size="none" reverse={hCard} class="bg-amber-50 hover:bg-amber-100">
      <div class="flex flex-col md:flex-row items-center md:items-start">
        <img src="/images/my_profile.JPG" alt="Profile Image" class="w-48 h-48 md:w-48 md:h-48 object-cover rounded-full mb-4 md:mb-0 md:mr-6">
        <div class="flex-1">
          <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Who Am I?</h5>
          <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">Hello, I'm Enes Yesil! 👋. I'm a passionate software developer with a keen interest in AI and financial technology. Currently, I'm pursuing a Computer Science degree at York University and working on exciting projects that leverage my skills in AI, machine learning, and full-stack development. My tech stack includes TypeScript, Java, JavaScript, and Python, along with libraries such as the MERN stack, and tools like React, Node.js</p>
          <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">⚡ Fun Fact: I love solving complex financial problems and making technology accessible to everyone. In my free time, I enjoy exploring new tech gadgets and following soccer/football.</p>
          <Button color="green" href="/MoreMe">Learn more<ArrowRightOutline/></Button>
        </div>
      </div>
    </Card>
    <div class="flex justify-center mt-4">
      <Toggle bind:checked={hCard} class="italic dark:text-gray-500">Reverse</Toggle>
    </div>
  </div>
</div>
