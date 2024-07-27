<script>
  import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<section class="bg-amber-50 p-16 rounded-lg max-w-full flex flex-col items-center">
  <h2 class="text-3xl font-bold mb-4 text-center">My Timeline</h2>
  <Timeline>
    <TimelineItem title="Started University" date="September 2021">
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Began my journey in Computer Science at York University.
      </p>
    </TimelineItem>
    <TimelineItem title="Founded Arise Student Club" date="September 2022">
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        Established a student club called Arise, focusing on fostering community and innovation.
      </p>
    </TimelineItem>
    <TimelineItem title="Started Research Assistant Job" date="March 2024">
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        Joined as a Research Assistant, working on advanced computing projects.
      </p>
    </TimelineItem>
    <TimelineItem title="Started Internship at Zyfera" date="May 2024">
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        Began an internship at Zyfera, gaining hands-on experience in software development.
      </p>
    </TimelineItem>
  </Timeline>
</section>
