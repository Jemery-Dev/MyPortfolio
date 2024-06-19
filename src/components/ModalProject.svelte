<script>
  // @ts-nocheck
  import { Modal } from 'flowbite-svelte';
  import { writable } from 'svelte/store';

  export let open;
  export let project;

  const skillLogos = {
    "HTML": "/imageProjet/skills/icons8-html-5-96.png",
    "C": "/imageProjet/skills/icons8-c-96.png",
    "CSS": "/imageProjet/skills/icons8-css3-96.png",
    "Java": "/imageProjet/skills/icons8-java-96.png",
    "PHP": "/imageProjet/skills/icons8-php-96.png",
    "SQL": "/imageProjet/skills/icons8-sql-96.png",
    "SYMFONY": "/imageProjet/skills/icons8-symfony-96.png",
    "TAILWINDCSS": "/imageProjet/skills/icons8-tailwindcss-96.png",
    "PYTHON": "/imageProjet/skills/icons8-python-96.png",
    "DJANGOPYTHON": "/imageProjet/skills/icons8-django-96.png",
    "SVELTE": "/imageProjet/skills/icons8-svelte-96.png",
    "JS": "/imageProjet/skills/icons8-javascript-96.png",
    "RUST": "/imageProjet/skills/icons8-langage-de-programmation-rust-96.png",
    "ANGULAR": "/imageProjet/skills/icons8-angularjs-96.png",
  };

  let isOpen = writable(open);

  function getSkillLogo(skill) {
    return skillLogos[skill] || "/imageProjet/skills/default.png";
  }

  $: isOpen.set(open);
  isOpen.subscribe(value => open = value);

  let color = 'blue';
</script>

<div class="zikette">
  <Modal title="{project.alt}" {color} bind:open={$isOpen} autoclose outsideclose>
    <p class="text-base leading-relaxed text-slate-700 dark:text-gray-200">{project.longdescription}</p>
    <div class="mt-4 flex flex-wrap justify-center">
      {#each project.competences as skill}
        <img src="{getSkillLogo(skill)}" alt="{skill}" class="h-8 w-8 m-2" title="{skill}">
      {/each}
    </div>
    <h3>Si la croix ne marche pas, cliquez en dehors</h3>
  </Modal>
</div>