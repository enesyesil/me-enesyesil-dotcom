<script>
  import { Button } from 'flowbite-svelte';
  import { FilePdfSolid, ArrowDownToBracketOutline } from 'flowbite-svelte-icons';
</script>

<div class="min-h-screen bg-transparent py-12 px-4">
  <div class="max-w-5xl mx-auto">
    
    <!-- Hero / Header -->
    <div class="text-center mb-10 mt-4 animate-fade-in-up">
      <h1 class="heading-primary mb-4">
        My <span class="heading-accent">Resume</span>
      </h1>
      <p class="text-xl font-light text-gray-600 max-w-2xl mx-auto mb-8">
        A snapshot of my professional journey, skills, and projects.
      </p>

      <div class="flex justify-center gap-4">
         <Button href="/enes_yesil_resume.pdf" download="enes_yesil_resume.pdf" class="bg-primary-600 hover:bg-primary-700 text-white shadow-soft group">
            <ArrowDownToBracketOutline class="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform" />
            Download PDF
         </Button>
      </div>
    </div>

    <!-- PDF Viewer Container -->
    <div class="bg-white/90 backdrop-blur-md rounded-3xl shadow-soft p-2 md:p-4 animate-fade-in-up delay-100 h-[80vh] border border-amber-100/50">
       <!-- 
          Using Google Docs Viewer as a fallback or object embed. 
          For best cross-browser PDF embedding, <object> or <iframe> is standard.
       -->
       <object data="/enes_yesil_resume.pdf" type="application/pdf" class="w-full h-full rounded-2xl">
          <div class="flex flex-col items-center justify-center h-full text-center p-8 bg-amber-50 rounded-2xl">
             <FilePdfSolid class="w-16 h-16 text-primary-400 mb-4" />
             <p class="text-gray-600 mb-4">
                It appears you don't have a PDF plugin for this browser.
                No biggie... you can <a href="/enes_yesil_resume.pdf" class="text-primary-600 font-bold hover:underline">click here to download the PDF file.</a>
             </p>
          </div>
       </object>
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
  @keyframes fadeInUp {
    to { opacity: 1; transform: translateY(0); }
  }
</style>
