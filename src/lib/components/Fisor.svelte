<script>
  import { Button } from 'flowbite-svelte';
  import { ArrowRightOutline, LinkOutline, EnvelopeSolid, LinkedinSolid } from 'flowbite-svelte-icons';
</script>

<div class="min-h-screen bg-transparent py-10">
  <div class="max-w-4xl mx-auto px-4">
    
    <!-- Header -->
    <div class="text-center mb-12 mt-8 animate-fade-in-up">
      <h1 class="heading-primary mb-6">
        Fisor <span class="heading-accent">Analytics</span>
      </h1>
      <p class="text-xl font-light text-gray-600 max-w-2xl mx-auto">
        Predictive Intelligence for Modern Businesses
      </p>
    </div>

    <!-- Image -->
    <div class="bg-white/50 p-2 rounded-3xl mb-12 shadow-soft animate-fade-in-up delay-100">
       <img class="w-full rounded-2xl" src="/images/new-fisor.png" alt="Fisor Analytics" />
    </div>

    <!-- Content Blocks -->
    <div class="space-y-12 animate-fade-in-up delay-200">
      
      <!-- Intro -->
      <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
        <p class="text-lg text-gray-600 leading-relaxed">
          Fisor Analytics empowers Canadian SMEs with predictive, AI-powered insights that uncover revenue opportunities, reduce waste, and drive strategic decision-making — without requiring a full data team.
        </p>
      </div>

      <!-- About / Mission / Vision Grid -->
      <div class="grid md:grid-cols-2 gap-6">
         <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft md:col-span-2">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
            <p class="text-gray-600 leading-relaxed">
              Built for SMEs, Fisor Analytics combines open public data, operational signals, and AI models to offer actionable intelligence. Our modular engines provide insights tailored to industries like logistics, construction, and real estate.
            </p>
         </div>

         <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p class="text-gray-600 leading-relaxed">
              Democratize predictive analytics for businesses that have outgrown spreadsheets but can’t afford enterprise BI tools.
            </p>
         </div>

         <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p class="text-gray-600 leading-relaxed">
              We envision a Canadian business landscape where every company can access the same level of data intelligence as large enterprises.
            </p>
         </div>
      </div>

      <!-- Tech Stack -->
      <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
         <h2 class="text-2xl font-bold text-gray-900 mb-6">Tools & Technologies</h2>
         <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
             {#each ['Go (Golang)', 'Python', 'SvelteKit', 'PostgreSQL', 'Apache Iceberg', 'Apache Spark', 'Redis', 'Azure Blob', 'Cohere + Perplexity'] as tech}
             <div class="flex items-center gap-2 text-gray-700 bg-amber-50 px-4 py-3 rounded-xl border border-amber-100">
                <span class="w-2 h-2 rounded-full bg-primary-500"></span>
                <span class="font-medium text-sm">{tech}</span>
             </div>
             {/each}
         </div>
      </div>

      <!-- Links Grid -->
      <div>
        <h2 class="heading-primary text-2xl md:text-3xl text-center mb-8">Connect & Explore</h2>
        <div class="grid md:grid-cols-3 gap-6">
           <a href="https://fisoranalytics.org/" target="_blank" class="group bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center">
              <div class="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                 <LinkOutline class="w-6 h-6" />
              </div>
              <h3 class="font-bold text-gray-900 mb-2">Website</h3>
              <p class="text-sm text-gray-500 mb-4">Visit our showcase</p>
              <span class="text-primary-600 font-medium text-sm mt-auto group-hover:underline">Visit Site &rarr;</span>
           </a>

           <a href="mailto:enesy@my.yorku.ca" class="group bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center">
              <div class="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                 <EnvelopeSolid class="w-6 h-6" />
              </div>
              <h3 class="font-bold text-gray-900 mb-2">Email</h3>
              <p class="text-sm text-gray-500 mb-4">Get in touch</p>
              <span class="text-amber-600 font-medium text-sm mt-auto group-hover:underline">Send Email &rarr;</span>
           </a>

           <a href="https://www.linkedin.com/company/fisoranalytics" target="_blank" class="group bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center">
              <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                 <LinkedinSolid class="w-6 h-6" />
              </div>
              <h3 class="font-bold text-gray-900 mb-2">LinkedIn</h3>
              <p class="text-sm text-gray-500 mb-4">Connect with us</p>
              <span class="text-blue-600 font-medium text-sm mt-auto group-hover:underline">Connect &rarr;</span>
           </a>
        </div>
      </div>

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
  @keyframes fadeInUp {
    to { opacity: 1; transform: translateY(0); }
  }
</style>
