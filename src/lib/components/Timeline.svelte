<script>
  import { Timeline, TimelineItem } from 'flowbite-svelte';
</script>

<section class="bg-amber-50 px-4 py-12 rounded-lg w-full flex justify-center">
  <div class="max-w-4xl w-full flex flex-col items-center">
    <h2 class="text-3xl font-bold mb-8 text-center">My Timeline</h2>
    <Timeline class="w-full">
      <TimelineItem title="Started Computer Science at York University" date="September 2021">
        <p class="text-base text-gray-500 dark:text-gray-400">
          Began BSc in Computer Science at York University, Toronto.
        </p>
      </TimelineItem>

      <TimelineItem title="Co-Founded Arise Student Club" date="September 2022">
        <p class="text-base text-gray-500 dark:text-gray-400">
          Founded a student organization focused on career development, inclusion, and leadership.
        </p>
      </TimelineItem>

      <TimelineItem title="Started Internship at Zyfera" date="January 2024">
        <p class="text-base text-gray-500 dark:text-gray-400">
          Joined as Software Developer Intern, building AI-powered tools.
        </p>
      </TimelineItem>

      <TimelineItem title="Started as Research Assistant" date="March 2024">
        <p class="text-base text-gray-500 dark:text-gray-400">
          Conducted accessibility-focused software research at York University, translating inclusive design principles into functional applications and reusable components.
        </p>
      </TimelineItem>

      <TimelineItem title="Launched Fisor Analytics" date="April 2025">
        <p class="text-base text-gray-500 dark:text-gray-400">
          Developed a platform combining open data, AI, and business intelligence for predictive insights.
        </p>
      </TimelineItem>

      <TimelineItem title="Expected Graduation" date="December 2025">
        <p class="text-base text-gray-500 dark:text-gray-400">
          Anticipated graduation with a BSc in Computer Science from York University.
        </p>
      </TimelineItem>
    </Timeline>
  </div>
</section>
