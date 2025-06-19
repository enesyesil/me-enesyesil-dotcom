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
          <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">
            I'm a software developer passionate about building AI/ML and data infrastructure. I enjoy turning complex systems into powerful, usable tools—especially when it comes to automation and platform engineering.
          </p>
          <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">
            I’m in my final year of Computer Science at York University and currently building real-world systems like Fisor Analytics—a multi-tenant AI analytics platform powered by LLMs, Spark, and Iceberg.
          </p>
          <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">
            ⚡ Outside of code, I enjoy following football, reading about history, exploring new tech gadgets, and thinking about how cultures and technologies shape each other over time.
          </p>
          <Button color="green" href="/MoreMe">Learn more<ArrowRightOutline/></Button>
        </div>
      </div>
    </Card>
  
  </div>
</div>
