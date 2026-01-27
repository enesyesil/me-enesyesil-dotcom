<script>
  import { Button } from 'flowbite-svelte';
  import { 
    GithubSolid, LinkedinSolid, EnvelopeSolid, ArrowRightOutline, 
    CodeBranchSolid, DatabaseSolid, BrainSolid,
    BriefcaseSolid, BookOpenSolid, CloudArrowUpSolid, UsersGroupSolid,
    CodeBranchOutline, ArrowUpRightFromSquareOutline
  } from 'flowbite-svelte-icons';
</script>

<div class="bg-amber-50 overflow-hidden">
  
  <!-- HERO SECTION -->
  <section class="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
    <!-- Background Glow Effect -->
    <div class="absolute inset-0 bg-primary-50/20 opacity-50 pointer-events-none"></div>

    <!-- Main Heading -->
    <h1 class="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in-up">
      Hi, I'm Enes
    </h1>

    <!-- Subheading -->
    <p class="max-w-2xl text-lg md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-10 animate-fade-in-up delay-100">
      Software Developer specializing in <strong class="font-semibold text-gray-900 dark:text-white">distributed systems</strong> and <strong class="font-semibold text-gray-900 dark:text-white">infra & data</strong> with a focus on performance and reliability.
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
      <a href="https://linkedin.com/in/me-enesyesil" target="_blank" class="p-3 rounded-xl bg-white/60 backdrop-blur-sm text-gray-600 hover:text-primary-600 hover:bg-white hover:shadow-md transition-all hover:scale-105">
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

 <!-- ABOUT ME SECTION -->
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
      
      <!-- Left Column: Interactive Profile Card -->
      <div class="relative flex justify-center group order-1">
        <!-- Background decoration -->
        <div class="absolute w-80 h-80 bg-amber-100/40 rounded-full blur-3xl scale-110"></div>
        
        <!-- Main Profile Card -->
        <div class="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2 max-w-sm w-full border border-amber-100/50">
          <div class="w-48 h-48 mx-auto rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
            <span class="text-6xl font-bold text-primary-600 tracking-tighter">EY</span>
          </div>
          
          <!-- Info badges -->
          <div class="flex flex-wrap justify-center gap-2">
            <span class="px-4 py-2 bg-amber-100/80 text-gray-700 rounded-full text-sm font-medium">
              York University
            </span>
            <span class="px-4 py-2 bg-primary-100/80 text-primary-700 rounded-full text-sm font-medium">
              CS Final Year
            </span>
          </div>
        </div>
      </div>

      <!-- Right Column: Content -->
      <div class="space-y-8 order-2 text-center lg:text-left flex flex-col items-center lg:items-start">
        <div class="space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">

          <p>
            I'm a software developer interested in 
            <strong class="text-gray-900 dark:text-white">distributed systems, data infrastructure, and AI/ML</strong>.
            I enjoy turning complex systems into powerful and usable tools, especially when it comes to automation,
            reliability, and platform-style engineering.
          </p>

          <p>
            Currently in my final year of Computer Science at 
            <strong class="text-gray-900 dark:text-white">York University</strong>, 
            I spend most of my time working on backend and systems-focused projects, exploring how distributed systems
            and data platforms behave in real environments, often with a focus on production-ready systems and real-world scenarios.
          </p>

          <p class="flex items-center justify-center lg:justify-start gap-3">
            <span class="text-xl">⚡</span>
            <span>
              Outside of code, I enjoy following football, reading about history, and exploring new tech concepts.
            </span>
          </p>
        </div>

        <!-- Interactive Skill Cards (Grid) -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-2 w-full max-w-lg">
          <!-- AI / ML Systems -->
<div class="group/card bg-white/60 backdrop-blur-sm p-4 rounded-2xl text-center shadow-soft 
            hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer 
            border border-amber-50">
  <div class="mx-auto w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center 
              text-primary-600 mb-2 group-hover/card:scale-110 transition-transform">
    <BrainSolid class="w-5 h-5" />
  </div>
  <h3 class="font-bold text-gray-900 text-sm mb-0.5">AI / ML</h3>
  <p class="text-[10px] text-gray-500 uppercase tracking-wide">Systems</p>
</div>

       
          <!-- Distributed Systems -->
          <div class="group/card bg-white/60 backdrop-blur-sm p-4 rounded-2xl text-center shadow-soft 
                      hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer 
                      border border-amber-50">
            <div class="mx-auto w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center 
                        text-primary-600 mb-2 group-hover/card:scale-110 transition-transform">
              <CodeBranchSolid class="w-5 h-5" />
            </div>
            <h3 class="font-bold text-gray-900 text-sm mb-0.5">Distributed</h3>
            <p class="text-[10px] text-gray-500 uppercase tracking-wide">Systems</p>
          </div>

          <!-- Backend Engineering -->
          <div class="group/card bg-white/60 backdrop-blur-sm p-4 rounded-2xl text-center shadow-soft 
                      hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer 
                      border border-amber-50">
            <div class="mx-auto w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center 
                        text-primary-600 mb-2 group-hover/card:scale-110 transition-transform">
              <BrainSolid class="w-5 h-5" />
            </div>
            <h3 class="font-bold text-gray-900 text-sm mb-0.5">Backend</h3>
            <p class="text-[10px] text-gray-500 uppercase tracking-wide">Engineering</p>
          </div>

          <!-- Cloud Infrastructure -->
          <div class="group/card bg-white/60 backdrop-blur-sm p-4 rounded-2xl text-center shadow-soft 
                      hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer 
                      border border-amber-50">
            <div class="mx-auto w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center 
                        text-primary-600 mb-2 group-hover/card:scale-110 transition-transform">
              <CloudArrowUpSolid class="w-5 h-5" />
            </div>
            <h3 class="font-bold text-gray-900 text-sm mb-0.5">Cloud & Data</h3>
            <p class="text-[10px] text-gray-500 uppercase tracking-wide">Infrastructure</p>
          </div>



        </div>
      </div>
    
    </div>
  </div>
</section>


  <!-- TIMELINE SECTION -->
  <section class="section-padding relative overflow-hidden">
    <div class="max-w-4xl mx-auto relative px-6">
      <div class="text-center mb-16">
        <h2 class="heading-primary">
          My <span class="heading-accent">Timeline</span>
        </h2>
        <p class="text-gray-500 mt-4 max-w-lg mx-auto text-lg">
          A journey through my education, experiences, and growth as a developer.
        </p>
      </div>

      <!-- Vertical Line -->
      <div class="absolute left-1/2 top-48 bottom-32 w-px bg-primary-200/50 -translate-x-1/2 hidden md:block"></div>

      <div class="space-y-16 relative">
        <!-- Item 1: York U -->
        <div class="relative flex flex-col items-center md:block">
          <!-- Icon -->
          <div class="md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-2 z-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-soft mb-6 md:mb-0">
             <BookOpenSolid class="w-7 h-7"/>
          </div>

          <!-- Content Left -->
          <div class="md:grid md:grid-cols-2 md:gap-20 items-center">
             <div class="md:text-right bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft w-full hover:shadow-soft-lg transition-all">
                <span class="text-primary-600 font-medium text-sm mb-2 block">September 2021</span>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Started Computer Science at York University</h3>
                <p class="text-gray-600 leading-relaxed text-sm">
                   Began BSc in Computer Science at York University, Toronto.
                </p>
             </div>
             <div class="hidden md:block"></div>
          </div>
        </div>

        <!-- Item 2: Arise -->
        <div class="relative flex flex-col items-center md:block">
           <!-- Icon -->
           <div class="md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-2 z-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-soft mb-6 md:mb-0">
              <UsersGroupSolid class="w-7 h-7"/>
           </div>
   
           <!-- Content Right -->
           <div class="md:grid md:grid-cols-2 md:gap-20 items-center">
              <div class="hidden md:block"></div>
              <div class="md:text-left bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft w-full hover:shadow-soft-lg transition-all">
                 <span class="text-primary-600 font-medium text-sm mb-2 block">September 2022</span>
                 <h3 class="text-xl font-bold text-gray-900 mb-2">Co-Founded Arise Student Club</h3>
                 <p class="text-gray-600 leading-relaxed text-sm">
                    Founded a student organization focused on career development, inclusion, and leadership.
                 </p>
              </div>
           </div>
         </div>

         <!-- Item 3: Zyfera -->
         <div class="relative flex flex-col items-center md:block">
           <!-- Icon -->
           <div class="md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-2 z-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-soft mb-6 md:mb-0">
              <BriefcaseSolid class="w-7 h-7"/>
           </div>
   
           <!-- Content Left -->
           <div class="md:grid md:grid-cols-2 md:gap-20 items-center">
              <div class="md:text-right bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft w-full hover:shadow-soft-lg transition-all">
                 <span class="text-primary-600 font-medium text-sm mb-2 block">January 2024</span>
                 <h3 class="text-xl font-bold text-gray-900 mb-2">Started Internship at Zyfera</h3>
                 <p class="text-gray-600 leading-relaxed text-sm">
                    Joined as Software Developer Intern, building AI-powered tools.
                 </p>
              </div>
              <div class="hidden md:block"></div>
           </div>
         </div>

         <!-- Item 4: Research Assistant -->
         <div class="relative flex flex-col items-center md:block">
           <!-- Icon -->
           <div class="md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-2 z-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-soft mb-6 md:mb-0">
              <BookOpenSolid class="w-7 h-7"/>
           </div>
   
           <!-- Content Right -->
           <div class="md:grid md:grid-cols-2 md:gap-20 items-center">
              <div class="hidden md:block"></div>
              <div class="md:text-left bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft w-full hover:shadow-soft-lg transition-all">
                 <span class="text-primary-600 font-medium text-sm mb-2 block">March 2024</span>
                 <h3 class="text-xl font-bold text-gray-900 mb-2">Started as Research Assistant</h3>
                 <p class="text-gray-600 leading-relaxed text-sm">
                    Conducted accessibility-focused software research at York University, translating inclusive design principles into functional applications.
                 </p>
              </div>
           </div>
         </div>

         <!-- Item 5: Fisor Analytics -->
         <div class="relative flex flex-col items-center md:block">
           <!-- Icon -->
           <div class="md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-2 z-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-soft mb-6 md:mb-0">
              <CodeBranchSolid class="w-7 h-7"/>
           </div>
   
           <!-- Content Left -->
           <div class="md:grid md:grid-cols-2 md:gap-20 items-center">
              <div class="md:text-right bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft w-full hover:shadow-soft-lg transition-all">
                 <span class="text-primary-600 font-medium text-sm mb-2 block">April 2025</span>
                 <h3 class="text-xl font-bold text-gray-900 mb-2">Launched Fisor Analytics</h3>
                 <p class="text-gray-600 leading-relaxed text-sm">
                    Developed a platform combining open data, AI, and business intelligence for predictive insights.
                 </p>
              </div>
              <div class="hidden md:block"></div>
           </div>
         </div>

         <!-- Item 6: Graduation -->
         <div class="relative flex flex-col items-center md:block">
           <!-- Icon -->
           <div class="md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-2 z-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-soft mb-6 md:mb-0">
              <UsersGroupSolid class="w-7 h-7"/>
           </div>
   
           <!-- Content Right -->
           <div class="md:grid md:grid-cols-2 md:gap-20 items-center">
              <div class="hidden md:block"></div>
              <div class="md:text-left bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft w-full hover:shadow-soft-lg transition-all">
                 <span class="text-primary-600 font-medium text-sm mb-2 block">December 2025</span>
                 <h3 class="text-xl font-bold text-gray-900 mb-2">Graduation</h3>
                 <p class="text-gray-600 leading-relaxed text-sm">
                    Graduated with a BSc in Computer Science from York University.
                 </p>
              </div>
           </div>
         </div>

      <!-- Gradient Fade Bottom -->
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-50 to-transparent pointer-events-none"></div>
    </div>
  </section>

  <!-- FEATURED PROJECTS SECTION -->
  <section class="section-padding" id="projects">
    <div class="max-w-7xl mx-auto px-6">
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
