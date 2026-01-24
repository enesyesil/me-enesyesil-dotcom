<script>
  import { Button, Card } from 'flowbite-svelte';
  import { BriefcaseSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<div class="min-h-screen bg-transparent py-10">
  <div class="max-w-4xl mx-auto px-4">
    
    <!-- Hero Section -->
    <div class="text-center mb-16 mt-8 animate-fade-in-up">
      <div class="flex items-center justify-center gap-2 text-primary-600 font-semibold tracking-wide text-sm uppercase mb-3">
         <span class="text-xl">👋</span> Introduction
      </div>
      <h1 class="heading-primary mb-6">
        About <span class="heading-accent">Me</span>
      </h1>
      <p class="text-xl font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
        Hi, I'm <strong class="text-primary-700">Enes</strong> — a final-year Computer Science student at York University with a passion for building resilient systems and turning complex problems into simple, automated solutions.
      </p>
    </div>

    <!-- Personal Story / Mission -->
    <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft mb-16 animate-fade-in-up delay-100">
       <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span class="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-xl">🚀</span>
          My Journey
       </h2>
       <div class="prose prose-lg text-gray-600 prose-headings:text-gray-900 prose-strong:text-primary-700">
          <p>
            Originally from Turkey, my journey has been defined by adaptability. Growing up moving between cities and countries taught me resilience—a trait I carry into my code.
          </p>
          <p>
            I don't just write software; I build systems. From optimizing data pipelines to crafting accessible user interfaces, I believe technology should be an enabler, effectively "invisible" while making a massive impact.
          </p>
       </div>
    </div>

    <!-- Professional Background -->
    <div class="mb-16 animate-fade-in-up delay-200">
       <h2 class="text-3xl font-bold text-center text-gray-900 mb-10">Professional <span class="text-primary-600">Background</span></h2>
       
       <div class="space-y-6">
          <div class="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-primary-500">
             <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-gray-900">Founder & Software Engineer</h3>
                <span class="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">Fisor Analytics</span>
             </div>
             <p class="text-gray-600 leading-relaxed">
                Building a multi-tenant AI analytics platform using <strong>Go, Python, Apache Spark</strong>, and <strong>LLM agents</strong>. Focused on public+private data pipelines and automated insight generation.
             </p>
          </div>

          <div class="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-amber-400">
             <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-gray-900">Software Developer Intern</h3>
                <span class="text-sm font-medium text-amber-700 bg-amber-100 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">Zyfera</span>
             </div>
             <p class="text-gray-600 leading-relaxed">
                Developed an AI-powered financial calculator using <strong>Svelte, TypeScript</strong>, and <strong>PostgreSQL</strong>. Contributed to API prompt optimization, CI/CD pipelines, and edge function performance.
             </p>
          </div>

          <div class="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-primary-300">
             <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-gray-900">Research Assistant</h3>
                <span class="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">York University</span>
             </div>
             <p class="text-gray-600 leading-relaxed">
                Built accessibility tools with <strong>React</strong> and <strong>Next.js</strong> based on user research. Created adaptive components and resources for students with disabilities.
             </p>
          </div>
       </div>
    </div>

    <!-- Vision / Impact -->
    <div class="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-10 text-white shadow-soft-lg text-center mb-16 animate-fade-in-up delay-300 relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div class="relative z-10">
          <h2 class="text-3xl font-bold mb-6">My Vision</h2>
          <p class="text-lg text-primary-50 leading-relaxed max-w-2xl mx-auto mb-8">
            "As a junior software engineer, my vision is to simplify complex systems and make technology accessible for everyone. I don't just want to keep up with change—I want to drive it."
          </p>
          <div class="flex justify-center gap-4">
             <span class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">Simplification</span>
             <span class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">Accessibility</span>
             <span class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">Impact</span>
          </div>
        </div>
    </div>

    <!-- CTA -->
    <div class="text-center animate-fade-in-up delay-300">
      <Button href="/Projects" class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
        View My Projects <ArrowRightOutline class="w-5 h-5 ml-2" />
      </Button>
    </div>

  </div>
</div>

<style>
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
  }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  @keyframes fadeInUp {
    to { opacity: 1; transform: translateY(0); }
  }
</style>
