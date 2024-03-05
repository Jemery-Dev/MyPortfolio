
<script>
// @ts-nocheck
    import { Button, Modal } from 'flowbite-svelte';
    export let open;
    export let project;

    let color = 'blue';
  </script>

<Modal title="{project.alt}"  {color} bind:open autoclose outsideclose>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400"></p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">{project.description}</p>
    <svelte:fragment slot="footer">
      <Button>I accept</Button>
      <Button color="alternative">Decline</Button>
    </svelte:fragment>
  </Modal>