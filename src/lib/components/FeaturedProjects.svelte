<script>
  import { Button } from 'flowbite-svelte';
  import { CodeBranchOutline, ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
</script>

<section class="section-padding" id="projects">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
       <div class="flex items-center justify-center gap-2 text-primary-600 font-semibold tracking-wide text-sm uppercase mb-3">
           <span class="text-xl">✨</span> Portfolio
       </div>
      <h2 class="heading-primary">
        Featured <span class="heading-accent">Projects</span>
      </h2>
      <p class="text-gray-500 mt-4 max-w-lg mx-auto">Some of the things I've built that I'm proud of.</p>
    </div>

    <!-- Bento Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      <!-- Featured Project: Fisor (Large Card) -->
      <div class="md:col-span-2 group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="flex-shrink-0 w-full md:w-64 h-48 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100">
            <span class="text-4xl font-bold text-primary-600/30">Fisor</span>
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-3 py-1 bg-primary-600 text-white text-xs rounded-full font-medium">Featured</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Fisor Analytics</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              A multi-tenant AI analytics platform powered by LLMs, Spark, and Apache Iceberg for enterprise-scale data processing.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
               <span class="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Python</span>
               <span class="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Spark</span>
               <span class="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">LLMs</span>
               <span class="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Iceberg</span>
            </div>
            <div class="flex gap-3">
               <Button href="/Projects/Fisor" class="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all">
                  View Project <ArrowUpRightFromSquareOutline class="w-4 h-4 ml-1" />
               </Button>
            </div>
          </div>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
        <div class="h-40 bg-amber-50 rounded-2xl mb-5 flex items-center justify-center border border-amber-100">
           <span class="text-2xl font-bold text-primary-600/30">AI Tools</span>
        </div>
        
        <h3 class="text-xl font-bold text-gray-900 mb-2">AI-Powered Tools</h3>
        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
          Suite of developer tools leveraging machine learning for automation and productivity enhancement.
        </p>

        <div class="flex flex-wrap gap-2 mb-5">
           <span class="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">React</span>
           <span class="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Node.js</span>
           <span class="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">ML</span>
        </div>

        <div class="flex gap-2">
           <Button href="#" class="flex-1 bg-white text-gray-700 shadow-sm hover:shadow-md px-4 py-2 rounded-lg text-sm font-medium transition-all">
              <CodeBranchOutline class="w-4 h-4 mr-1" /> Code
           </Button>
           <Button href="#" class="flex-1 bg-white text-gray-700 shadow-sm hover:shadow-md px-4 py-2 rounded-lg text-sm font-medium transition-all">
              <ArrowUpRightFromSquareOutline class="w-4 h-4 mr-1" /> Demo
           </Button>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
        <div class="h-40 bg-amber-50 rounded-2xl mb-5 flex items-center justify-center border border-amber-100">
           <span class="text-2xl font-bold text-primary-600/30">Weddify</span>
        </div>
        
        <h3 class="text-xl font-bold text-gray-900 mb-2">Weddify</h3>
        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
          Personalized wedding RSVP and invitation website with custom themes.
        </p>

        <div class="flex flex-wrap gap-2 mb-5">
           <span class="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">SvelteKit</span>
           <span class="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Supabase</span>
        </div>

        <div class="flex gap-2">
           <Button href="/Projects/Weddify" class="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
              View <ArrowUpRightFromSquareOutline class="w-4 h-4 ml-1" />
           </Button>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
        <div class="h-40 bg-amber-50 rounded-2xl mb-5 flex items-center justify-center border border-amber-100">
           <span class="text-2xl font-bold text-primary-600/30">Moneyball</span>
        </div>
        
        <h3 class="text-xl font-bold text-gray-900 mb-2">Moneyball Scout ML</h3>
        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
          Statistical analysis to identify undervalued football players using ML.
        </p>

        <div class="flex flex-wrap gap-2 mb-5">
           <span class="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Python</span>
           <span class="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Scikit-learn</span>
        </div>

        <div class="flex gap-2">
           <Button href="/Projects/Moneyball" class="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
              View <ArrowUpRightFromSquareOutline class="w-4 h-4 ml-1" />
           </Button>
        </div>
      </div>
    </div>

    <div class="text-center">
       <Button href="/Projects" class="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-3 rounded-xl font-medium shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-0.5">
           View All Projects
       </Button>
    </div>
  </div>
</section>

