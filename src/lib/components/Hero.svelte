<script>
    import { Button } from 'flowbite-svelte';
    import { GithubSolid, LinkedinSolid, EnvelopeSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<section class="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
  <!-- Background Glow Effect -->
  <div class="absolute inset-0 bg-primary-50/20 opacity-50 pointer-events-none"></div>



  <!-- Main Heading -->
  <h1 class="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in-up">
    Hi, I'm Enes
    
  </h1>

  <!-- Subheading -->
  <p class="max-w-2xl text-lg md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-10 animate-fade-in-up delay-100">
    Software Developer crafting <strong class="font-semibold text-gray-900 dark:text-white">AI/ML systems</strong> and <strong class="font-semibold text-gray-900 dark:text-white">data infrastructure</strong> that power real-world solutions.
  </p>

  <!-- CTA Buttons -->
  <div class="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-200">
    <Button href="/MoreMe" class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all rounded-xl">
      Learn More <ArrowRightOutline class="w-5 h-5 ml-2" />
    </Button>
    <Button href="/Projects" class="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-3 text-lg font-medium hover:bg-white hover:shadow-lg transition-all rounded-xl">
      View Projects
    </Button>
  </div>

  <!-- Social Icons -->
  <div class="flex gap-4 animate-fade-in-up delay-300">
    <a href="https://github.com/enesyesil" target="_blank" class="p-3 rounded-xl bg-white/60 backdrop-blur-sm text-gray-600 hover:text-primary-600 hover:bg-white hover:shadow-md transition-all hover:scale-105">
      <GithubSolid class="w-6 h-6" />
    </a>
    <a href="https://linkedin.com/in/enesyesil" target="_blank" class="p-3 rounded-xl bg-white/60 backdrop-blur-sm text-gray-600 hover:text-primary-600 hover:bg-white hover:shadow-md transition-all hover:scale-105">
      <LinkedinSolid class="w-6 h-6" />
    </a>
    <a href="mailto:enesy@my.yorku.ca" class="p-3 rounded-xl bg-white/60 backdrop-blur-sm text-gray-600 hover:text-primary-600 hover:bg-white hover:shadow-md transition-all hover:scale-105">
      <EnvelopeSolid class="w-6 h-6" />
    </a>
  </div>

  <!-- Scroll Indicator -->
  <div class="absolute bottom-10 animate-bounce cursor-pointer opacity-40 hover:opacity-70 transition-opacity">
      <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div class="w-1 h-2 bg-primary-500 rounded-full"></div>
      </div>
  </div>
</section>

<style>
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
  }

  .animate-fade-in-down {
    animation: fadeInDown 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(-20px);
  }

  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }

  @keyframes fadeInUp {
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeInDown {
    to { opacity: 1; transform: translateY(0); }
  }

  .bg-gradient-radial {
      background-image: radial-gradient(var(--tw-gradient-stops));
  }
</style>

