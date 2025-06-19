<script>
  import { Button, Card, Avatar } from 'flowbite-svelte';
</script>

<div class="min-h-screen bg-white-100 dark:bg-gray-900 py-10">
  <div class="max-w-screen-lg mx-auto px-4">
    <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-6 mt-12">About Me</h1>

    <!-- Introduction Section -->
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-14">
      Hi, I'm Enes — a final-year Computer Science student at York University, originally from Turkey.
      I'm passionate about software development, and in my free time, I enjoy following football (I mean, soccer 😄) and reading history.
      What makes me unique is my ability to adapt quickly to new environments. 
      Growing up, I moved between cities and countries, and this has shaped my resilience and flexibility — something I carry into both life and work.
    </p>

    <!-- Mission Section -->
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">My Background</h2>
    <h4 class="text-xl font-semibold text-gray-800 dark:text-white mb-6">💼 Professional Background:</h4>
    
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      <strong>Founder & Software Engineer – Fisor Analytics:</strong> Building a multi-tenant AI analytics platform using Go, Python, Apache Spark, and LLM agents. Focused on public+private data pipelines and automated insight generation.
    </p>
    
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      <strong>Research Assistant – York University:</strong> Built accessibility tools with React and Next.js based on user research. Created adaptive components and resources for students with disabilities.
    </p>
    
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      <strong>Software Developer Intern – Zyfera:</strong> Developed an AI-powered financial calculator, using Svelte, TypeScript, and PostgreSQL. Contributed to API prompt optimization, CI/CD, and edge function performance.
    </p>
    
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      <strong>Computing Support Assistant – York University:</strong> Delivered hands-on technical support across classrooms and departments. Helped resolve hardware, network, and software issues in fast-paced academic settings.
    </p>
    
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      <strong>Interests:</strong> AI infrastructure, LLM agent systems, full-stack development, cloud-native platforms, data engineering, and simplifying complex backend systems through automation and orchestration.
    </p>
    
    <!-- Vision Section -->
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">My Vision</h2>
    <h4 class="text-xl font-semibold text-gray-800 dark:text-white mb-6">Creating a Positive Impact</h4>
    <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
      As a junior software engineer, my vision is to simplify complex systems and make technology accessible for everyone.
      I’m passionate about breaking down intricate problems and building user-friendly solutions that improve everyday life.
      In a fast-evolving world, I want to contribute meaningfully — not just keeping up with change but actively driving it forward to make a real impact.
    </p>

    <!-- My Projects Section -->
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-4">My Projects</h2>
    <div class="grid grid-cols-1 bg-amber-50 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      <Card class="dark:bg-gray-800 bg-amber-50">
        <h3 class="text-xl font-medium text-gray-800 dark:text-white">Fisor</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Revolutionizing financial management with an advanced calculator powered by AI and data analytics.
          It simplifies complex calculations across home buying, car purchases, investments, and retirement planning.
        </p>
      </Card>
      <Card class="dark:bg-gray-800 bg-amber-50">
        <h3 class="text-xl font-medium text-gray-800 dark:text-white">Weddify</h3>
        <p class="text-gray-500 dark:text-gray-400">
          A personalized wedding RSVP and invitation platform. Create custom invitations, manage guest lists, and collect RSVPs seamlessly.
        </p>
      </Card>
      <Card class="dark:bg-gray-800 bg-amber-50">
        <h3 class="text-xl font-medium text-gray-800 dark:text-white">Moneyball-Scout-ML</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Built a Python-based, Moneyball-inspired machine learning model to analyze football player metrics and identify undervalued talent by comparing on-field performance with market value.
        </p>
      </Card>
    </div>

    <div class="text-center">
      <Button href="/Projects" size="xl" class="bg-green-600 hover:bg-green-700 text-white">
        My Projects
      </Button>
    </div>
  </div>
</div>
