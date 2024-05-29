<script>
  import {Card, Button, Search, Popover} from 'flowbite-svelte';
  import {ArrowRightOutline } from 'flowbite-svelte-icons';
  import skills from '../../data/skills.json';
  import MiniPartie from '../../components/MiniPartie.svelte';

  // @ts-ignore
  let image;
  let choix = "all"; // Valeur pour les boutons de catégorie
  let searchTexte = ""; // Valeur pour la search bar

  // @ts-ignore
  function montrerCategory(liste){
  let texte = "";
  for (const categorie of liste) {
    texte += categorie + " ";
  }
  return texte.trim();
}

  // @ts-ignore
  function updateSearchText(event) {
    searchTexte = event.target.value;
  }

</script>



<section id="competences">
  <MiniPartie text="Compétences" />

  <div class="flex items-center justify-center py-4 md:py-8 flex-wrap gap-3 mb-3 mx-auto">
    <Search size="lg" placeholder="Rechercher compétence" on:input={updateSearchText} class="bg-teal-50 text-left"></Search>
  </div>
  
  
  <div id="gallery" class="grid  gap-4 md:grid-cols-2 lg:grid-cols-5">
    <Card class="hidden"/>
    {#each skills as skill (skill.alt)}
      {#if skill.alt && (skill.alt.toLowerCase().includes(searchTexte.toLowerCase()) || searchTexte === "")}
        {#if skill.category && (skill.category.includes(choix) || choix === "all")}
          <Card class="max-w-xs mx-auto md:w-full lg:w-full h-64 bg-cyan-100" id="{skill.alt}-id">
            <img src={skill.src} alt={skill.alt} class="w-24 h-24 mx-auto mb-3" />
            <h5 class="mb-2 text-lg font-bold text-gray-900 dark:text-white">{skill.alt}</h5>
            <p class="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">{montrerCategory(skill.category)}</p>
            <Popover class="w-96 text-justify font-medium z-10 !dark:text-slate-300 ease-in-out duration-500" title="{skill.alt}" triggeredBy="#{skill.alt}-id">{skill.text}</Popover>
          </Card>
        {/if}
      {/if}
    {/each}
  </div>
</section>

