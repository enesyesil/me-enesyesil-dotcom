<script>
  import { CodeBranchSolid, DatabaseSolid, BrainSolid } from 'flowbite-svelte-icons';
</script>

<section class="section-padding items-center overflow-hidden" id="about">
  <div class="max-w-6xl mx-auto px-6">
    
    <!-- Section Header (Centered) -->
    <div class="text-center mb-12 lg:mb-16">
      <div class="flex items-center justify-center gap-2 text-primary-600 font-semibold tracking-wide text-sm uppercase mb-3">
        <span class="text-xl">✨</span> About Me
      </div>
      <h2 class="heading-primary">
        Who Am I<span class="heading-accent">?</span>
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      
      <!-- Left Column: Interactive Profile Card (Aligns Right towards Center) -->
      <div class="relative flex justify-center lg:justify-end group order-1">
        <!-- Background decoration -->
        <div class="absolute w-80 h-80 bg-amber-100/40 rounded-full blur-3xl scale-110"></div>
        
        <!-- Main Profile Card -->
        <div class="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2 max-w-sm w-full border border-amber-100/50">
          <div class="w-48 h-48 mx-auto rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
            <span class="text-6xl font-bold text-primary-600 tracking-tighter">EY</span>
          </div>
          
          <!-- Info badges -->
          <div class="flex flex-wrap justify-center gap-2">
            <span class="px-4 py-2 bg-amber-100/80 text-gray-700 rounded-full text-sm font-medium">York University</span>
            <span class="px-4 py-2 bg-primary-100/80 text-primary-700 rounded-full text-sm font-medium">CS Final Year</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Content (Aligns Left but nudged Right) -->
      <div class="space-y-8 order-2 text-center lg:text-left lg:pl-10">
        <div class="space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            I'm a software developer passionate about <strong class="text-gray-900 dark:text-white">AI/ML and data infrastructure</strong>. I enjoy turning complex systems into powerful, usable tools—especially when it comes to automation and platform engineering.
          </p>
          <p>
            Currently in my final year of Computer Science at <strong class="text-gray-900 dark:text-white">York University</strong>, I'm building <a href="/Projects/Fisor" class="text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors">Fisor Analytics</a>—a multi-tenant AI analytics platform powered by LLMs, Spark, and Iceberg.
          </p>
          <p class="flex items-center justify-center lg:justify-start gap-3">
             <span class="text-xl">⚡</span>
             <span>Outside of code, I enjoy following football, reading about history, and exploring new tech gadgets.</span>
          </p>
        </div>

        <!-- Interactive Skill Cards (Grid) -->
        <div class="grid grid-cols-3 gap-3 pt-2">
          <div class="group/card bg-white/60 backdrop-blur-sm p-4 rounded-2xl text-center shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-amber-50">
            <div class="mx-auto w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-2 group-hover/card:scale-110 transition-transform">
              <BrainSolid class="w-5 h-5" />
            </div>
            <h3 class="font-bold text-gray-900 text-sm mb-0.5">AI/ML</h3>
            <p class="text-[10px] text-gray-500 uppercase tracking-wide">Analytics</p>
          </div>

          <div class="group/card bg-white/60 backdrop-blur-sm p-4 rounded-2xl text-center shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-amber-50">
            <div class="mx-auto w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-2 group-hover/card:scale-110 transition-transform">
               <CodeBranchSolid class="w-5 h-5" />
            </div>
            <h3 class="font-bold text-gray-900 text-sm mb-0.5">Full Stack</h3>
            <p class="text-[10px] text-gray-500 uppercase tracking-wide">React/Node</p>
          </div>

          <div class="group/card bg-white/60 backdrop-blur-sm p-4 rounded-2xl text-center shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-amber-50">
            <div class="mx-auto w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-2 group-hover/card:scale-110 transition-transform">
               <DatabaseSolid class="w-5 h-5" />
            </div>
            <h3 class="font-bold text-gray-900 text-sm mb-0.5">Data</h3>
            <p class="text-[10px] text-gray-500 uppercase tracking-wide">Pipelines</p>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</section>

