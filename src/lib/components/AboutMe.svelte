<script>
  import { Card, Button, Toggle } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  let hCard = false;
</script>

<div class="space-y-8 bg-amber-50 mx-80 mt-12">
  <Card img="/images/my_profile.JPG" href="/" horizontal size="none" reverse={hCard} class="bg-amber-50 hover:bg-amber-100 inline-flex">
    <h5 class="mb-4 mx-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Who Am I?</h5>
    <p class="mb-6 mx-6 font-normal text-gray-700 dark:text-gray-400 ">Hello, I'm Enes Yesil! 👋. I'm a passionate software developer with a keen interest in AI and financial technology. Currently, I'm pursuing a Computer Science degree at York University and working on exciting projects that leverage my skills in AI, machine learning, and full-stack development. My tech stack includes TypeScript, Java, JavaScript, and Python, along with libraries such as the MERN stack, and tools like React, Node.js</p>
    <p class="mb-6 mx-6 font-normal text-gray-700 dark:text-gray-400 ">⚡ Fun Fact: 
      I love solving complex financial problems and making technology accessible to everyone. In my free time, I enjoy hiking and exploring new tech gadgets.</p>
    <Button color="green" href="/MoreMe" class="mx-6">Learn more<ArrowRightOutline/></Button>
  </Card>
  <Toggle bind:checked={hCard} class="italic dark:text-gray-500">Reverse</Toggle>
</div>