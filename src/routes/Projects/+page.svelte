<script lang="ts">
    import { Card, Button, Toggle } from 'flowbite-svelte';
    let hCard = false;
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
  
  </script>
  <Navbar/>
  <div class="flex flex-col justify-center items-center bg-amber-50 py-12">
    <div class="w-full max-w-4xl my-4">
      <Card href="/Projects/Fisor/" horizontal={hCard} size="none" reverse={hCard} class="bg-amber-50 hover:bg-amber-100">
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <img src="/images/Fisor.jpg" alt="Profile Image" class="w-48 h-48 md:w-48 md:h-48 object-cover mb-4 md:mb-0 md:mr-6">
          <div class="flex-1">
            <h1 class="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Fisor</h1>
            <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">Revolutionize financial management with our advanced calculator, powered by AI and data analytics to simplify complex financial calculations across buying homes, purchasing cars, managing investments, and planning for retirement.</p>
            <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">Navigate your financial landscape with ease, thanks to our user-friendly interface and straightforward insights.</p>
            <Button color="green" href="/Projects/Fisor">Learn More<ArrowRightOutline/></Button>
          </div>
        </div>
      </Card>
      
    </div>
    <div class="w-full max-w-4xl my-4">
      <Card href="/Projects/Weddify/" horizontal={hCard} size="none" reverse={hCard} class="bg-amber-50 hover:bg-amber-100">
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <img src="/images/s4.png" alt="Profile Image" class="w-48 h-48 md:w-48 md:h-48 object-cover mb-4 md:mb-0 md:mr-6">
          <div class="flex-1">
            <h1 class="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Weddify</h1>
            <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">Weddify is a personalized wedding RSVP and invitation website . It offers to create customized invitations, manage guest lists, and collect RSVPs effortlessly.</p>
            <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">. Initially created for a personal wedding, Weddify will soon allows others to create their own custom wedding websites.</p>
            <Button color="green" href="/Projects/Weddify">Learn More<ArrowRightOutline/></Button>
          </div>
        </div>
      </Card>
      
    </div>
    <div class="w-full max-w-4xl my-4">
      <Card href="/Projects/Moneyball/" horizontal={hCard} size="none" reverse={hCard} class="bg-amber-50 hover:bg-amber-100">
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <img src="/images/Soccer.jpg" alt="Profile Image" class="w-48 h-48 md:w-48 md:h-48 object-cover mb-4 md:mb-0 md:mr-6">
          <div class="flex-1">
            <h1 class="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Moneyball-Scout-ML</h1>
            <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">This project taps into the Moneyball philosophy, applying it to football by using statistical analysis to identify undervalued players. </p>
            <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">Utilizing datasets, which details comprehensive player performance metrics, our goal is to uncover players whose market values do not reflect their on-field contributions.</p>
            <Button color="green" href="/Projects/Moneyball">Learn More<ArrowRightOutline/></Button>
          </div>
        </div>
      </Card>
      <Card href="/Projects/Moneyball/" horizontal={hCard} size="none" reverse={hCard} class="bg-amber-50 hover:bg-amber-100">
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <img src="/images/mycom.png" alt="Profile Image" class="w-48 h-48 md:w-48 md:h-48 object-cover mb-4 md:mb-0 md:mr-6">
          <div class="flex-1">
            <h1 class="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">My Commerce</h1>
            <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">A modern, fully functional e-commerce platform that enables customers to browse products, manage a shopping cart, and complete orders.  </p>
            <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">The platform features robust role-based access control, separating customer functionalities from administrative operations.</p>
            <Button color="green" href="/Projects/Moneyball">Learn More<ArrowRightOutline/></Button>
          </div>
        </div>
      </Card>
      
    </div>
  </div>
  
  <Footer/>