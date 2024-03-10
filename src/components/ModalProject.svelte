<script>
  // @ts-nocheck
  import { Button, Modal } from 'flowbite-svelte';
  export let open;
  export let project;

  let color = 'green';

  function handleClose() {
      open = false;
  }
</script>

<Modal title="{project.alt}" {color} bind:open={open} autoclose outsideclose>
  <p class="text-base leading-relaxed text-slate-700 dark:text-gray-200"></p>
  <p class="text-base leading-relaxed text-slate-700 dark:text-gray-200">{project.longdescription}</p>
  <svelte:fragment slot="footer">
      <!-- Add event handler to call handleClose function when the button is clicked -->
      <Button color="alternative" on:click={handleClose}>Fermer</Button>
  </svelte:fragment>
</Modal>