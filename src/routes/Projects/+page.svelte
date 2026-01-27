<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import { ArrowUpRightFromSquareOutline, CodeBranchOutline } from 'flowbite-svelte-icons';
</script>

<div class="min-h-screen py-24 px-4">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
       <div class="flex items-center justify-center gap-2 text-primary-600 font-semibold tracking-wide text-sm uppercase mb-3">
           <span class="text-xl">🚀</span> Portfolio
       </div>
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
        All <span class="text-primary-600">Projects</span>
      </h1>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        A collection of projects exploring AI/ML, data engineering, and web development.
      </p>
    </div>

    <!-- Bento Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <!-- Fisor Analytics -->
      <div class="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 md:col-span-2">
        <div class="flex flex-col lg:flex-row gap-10">
          <div class="flex-shrink-0 w-full lg:w-96 h-64 bg-amber-50 rounded-2xl flex items-center justify-center overflow-hidden border border-amber-100">
             <!-- Placeholder/Fallback -->
             <span class="text-5xl font-bold text-primary-600/30">Fisor</span>
             <img src="/images/new-fisor.png" alt="Fisor Analytics" class="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"/>
          </div>
          <div class="flex-1 flex flex-col justify-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Fisor Analytics</h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-6">
              Transform your business operations with Fisor Analytics — an intelligent insight engine built to deliver actionable financial and operational forecasts using AI and public-private data. Navigate complex decisions with confidence using intuitive dashboards tailored for Canadian SMEs.
            </p>
            <div class="flex flex-wrap gap-2 mb-8">
               <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">Python</span>
               <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">Spark</span>
               <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">LLMs</span>
               <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">Iceberg</span>
            </div>
            <div>
               <Button href="/Projects/Fisor" class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl text-base font-medium transition-all shadow-md hover:shadow-lg">
                  View Case Study <ArrowUpRightFromSquareOutline class="w-5 h-5 ml-2" />
               </Button>
            </div>
          </div>
        </div>
      </div>

      <!-- Weddify -->
      <div class="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
        <div class="h-56 bg-amber-50 rounded-2xl mb-6 overflow-hidden flex items-center justify-center relative border border-amber-100">
           <span class="text-4xl font-bold text-primary-600/30">Weddify</span>
           <img src="/images/s4.png" alt="Weddify" class="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"/>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-3">Weddify</h3>
        <p class="text-gray-600 leading-relaxed mb-6 flex-grow">
          A personalized wedding RSVP and invitation platform. Features customizable invitations, guest list management, and real-time RSVP tracking. Initially built for a personal wedding, now expanding to a SaaS model.
        </p>

        <div class="flex flex-wrap gap-2 mb-6">
           <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">SvelteKit</span>
           <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">Supabase</span>
           <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">Tailwind</span>
        </div>

        <div class="mt-auto">
           <Button href="/Projects/Weddify" class="w-full bg-white text-gray-800 hover:text-primary-600 shadow-soft hover:shadow-md px-4 py-3 rounded-xl font-medium transition-all border border-transparent hover:border-primary-100">
              View Project <ArrowUpRightFromSquareOutline class="w-4 h-4 ml-2" />
           </Button>
        </div>
      </div>

      <!-- Moneyball -->
      <div class="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
        <div class="h-56 bg-amber-50 rounded-2xl mb-6 overflow-hidden flex items-center justify-center relative border border-amber-100">
           <span class="text-4xl font-bold text-primary-600/30">Moneyball</span>
           <img src="/images/Soccer.jpg" alt="Moneyball" class="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"/>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-3">Moneyball Scout ML</h3>
        <p class="text-gray-600 leading-relaxed mb-6 flex-grow">
           Applying the Moneyball philosophy to football using statistical analysis and machine learning. Identifies undervalued players by analyzing performance metrics vs market value to uncover hidden gems.
        </p>

        <div class="flex flex-wrap gap-2 mb-6">
           <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">Python</span>
           <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">Scikit-learn</span>
           <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">Pandas</span>
        </div>

        <div class="mt-auto">
           <Button href="/Projects/Moneyball" class="w-full bg-white text-gray-800 hover:text-primary-600 shadow-soft hover:shadow-md px-4 py-3 rounded-xl font-medium transition-all border border-transparent hover:border-primary-100">
              View Project <ArrowUpRightFromSquareOutline class="w-4 h-4 ml-2" />
           </Button>
        </div>
      </div>

      <!-- My Commerce -->
      <div class="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
        <div class="h-56 bg-amber-50 rounded-2xl mb-6 overflow-hidden flex items-center justify-center relative border border-amber-100">
           <span class="text-4xl font-bold text-primary-600/30">Commerce</span>
           <img src="/images/mycom.png" alt="My Commerce" class="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"/>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-3">My Commerce</h3>
        <p class="text-gray-600 leading-relaxed mb-6 flex-grow">
          A modern, fully functional e-commerce platform with robust features including product browsing, shopping cart management, and secure order processing. Includes role-based access control for admin vs customer features.
        </p>

        <div class="flex flex-wrap gap-2 mb-6">
           <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">React</span>
           <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">Node.js</span>
           <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">MongoDB</span>
        </div>

        <div class="mt-auto">
           <Button href="/Projects/Moneyball" class="w-full bg-white text-gray-800 hover:text-primary-600 shadow-soft hover:shadow-md px-4 py-3 rounded-xl font-medium transition-all border border-transparent hover:border-primary-100">
              View Project <ArrowUpRightFromSquareOutline class="w-4 h-4 ml-2" />
           </Button>
        </div>
      </div>
      
    </div>
  </div>
</div>