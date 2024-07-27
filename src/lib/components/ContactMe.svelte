<script lang="ts">
  import { Section, Contact } from 'flowbite-svelte-blocks';
  import { Label, Input, Textarea, Button } from 'flowbite-svelte';
</script>

<Section name="contact">
  <Contact>
    <svelte:fragment slot="h2">Contact Me !!</svelte:fragment>
    <svelte:fragment slot="paragraph">Got a question? Want to send feedback about me? Let me know.</svelte:fragment>
    <form class="space-y-6"> <!-- Adjusted spacing -->
      <div>
        <Label for="email" class="block mb-2 bg-amber-50">Your email</Label>
        <Input id="email" name="email" class="bg-amber-50" placeholder="name@gmail.com" required />
      </div>
      <div>
        <Label for="subject" class="block mb-2 "  >Subject</Label>
        <Input id="subject" class="bg-amber-50" name="subject" placeholder="Let me know how I can help you" required />
      </div>
      <div>
        <Label for="message" class="block mb-2">Your message</Label>
        <Textarea id="message" name="message" class="bg-amber-50" placeholder="Leave a comment..." required />
      </div>
      <div class="">
        <Button color="green">Send</Button>
      </div>
    </form>
  </Contact>
</Section>
