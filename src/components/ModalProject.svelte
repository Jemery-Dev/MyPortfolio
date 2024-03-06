<script>
  // @ts-nocheck
  import { Button, Modal } from 'flowbite-svelte';
  export let open;
  export let project;

  let color = 'blue';

  function handleClose() {
      open = false; // Mettre à jour la valeur de open pour fermer le modal
  }
</script>

<Modal title="{project.alt}" {color} bind:open={open} autoclose outsideclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400"></p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">{project.longdescription}</p>
  <svelte:fragment slot="footer">
      <!-- Add event handler to call handleClose function when the button is clicked -->
      <Button color="alternative" on:click={handleClose}>Fermer</Button>
  </svelte:fragment>
</Modal>
