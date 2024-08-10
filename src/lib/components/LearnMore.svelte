<script>
    import { Button, Card, Avatar } from 'flowbite-svelte';
  </script>
  
  <div class="min-h-screen bg-white-100 dark:bg-gray-900 py-10">
    <div class="max-w-screen-lg mx-auto px-4">
      <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-6 mt-12">About Me</h1>
  
      <!-- Introduction Section -->
      <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-14">
        I am Enes, and I am a computer science student at York University. I come from Turkey.
        My hobbies and interests are Football,(I mean Soccer) and History.
        What makes me unique is that I am able to adapt in an environment very easily and fast.
        Thanks to my life story and background, I have always been able to adapt in a new city or country throughout my childhood.
        Thus, I believe that this will make me one step ahead in my career.
      </p>
  
      <!-- Mission Section -->
      <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">My Background</h2>
      <h4 class="text-xl font-semibold text-gray-800 dark:text-white mb-6">💼 Professional Background:</h4>
      <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
        Current Position: Computing Support Assistant at York University
      </p>
      <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
        Recent Internship: Software Developer Intern at Zyfera
      </p>
      <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
        Interests: AI application development, full-stack development, interface design.
      </p>
  
      <!-- Vision Section -->
      <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">My Vision</h2>
      <h4 class="text-xl font-semibold text-gray-800 dark:text-white mb-6">Creating a Positive Impact</h4>
      <p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-12">
        As a junior engineer, my vision is to harness the power of technology to create innovative solutions that not only address current challenges but also anticipate future needs. 
        My ultimate goal is to make a meaningful impact on the world and contribute to society in a positive way. The idea of making people's lives easier, more efficient, and more connected is central to my vision. 
        I believe that technology has the potential to transform lives, and I am dedicated to being part of that transformation.
      </p>
  
      <!-- My Projects Section -->
      <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-4">My Projects</h2>
      <div class="grid grid-cols-1 bg-amber-50 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <!-- Example Project -->
        <Card class="dark:bg-gray-800 bg-amber-50 ">
         
          <h3 class="text-xl font-medium text-gray-800 dark:text-white">Fisor</h3>
          <p class="text-gray-500 dark:text-gray-400">Revolutionize financial management with our advanced calculator, powered by AI and data analytics to simplify complex financial calculations across buying homes, purchasing cars, managing investments, and planning for retirement.. </p>
        </Card>
        <Card class="dark:bg-gray-800 bg-amber-50">
          
          <h3 class="text-xl font-medium text-gray-800 dark:text-white ">Weddify</h3>
          <p class="text-gray-500 dark:text-gray-400">Weddify is a personalized wedding RSVP and invitation website .
            It offers to create customized invitations, manage guest lists, and collect RSVPs effortlessly. </p>
        </Card>
        <Card class="dark:bg-gray-800 bg-amber-50">
          
          <h3 class="text-xl font-medium text-gray-800 dark:text-white">Moneyball-Scout-ML</h3>
          <p class="text-gray-500 dark:text-gray-400"> Developed a Python-based, Moneyball-inspired machine learning model to analyze football player metrics. 
            The model identifies undervalued talent by aligning on-field performance with market valuations..</p>
        </Card>
        <!-- Add more projects similarly -->
      
      </div>
  
      <div class="text-center">
        <Button href="/Projects" size="xl" class="bg-green-600 hover:bg-green-700 text-white ">
          My Projects
        </Button>
       
      </div>
      </div>
  </div>
  