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



<section id="competences" class="p-8">
<MiniPartie text="Compétences" />
  <div class="flex items-center justify-center py-4 md:py-8 flex-wrap gap-3 mb-3 mx-auto">
    <Search size="lg" placeholder="Rechercher compétence" on:input={updateSearchText} class="bg-yellow-50"></Search>
  </div>
  
  
  <div id="gallery" class="grid  gap-4 md:grid-cols-3 lg:grid-cols-5">
    <Card class="hidden"/>
    {#each skills as skill (skill.alt)}
      {#if skill.alt && (skill.alt.toLowerCase().includes(searchTexte.toLowerCase()) || searchTexte === "")}
        {#if skill.category && (skill.category.includes(choix) || choix === "all")}
          <Card class="max-w-xs mx-auto md:w-full lg:w-full h-64 bg-yellow-100">
            <img src={skill.src} alt={skill.alt} class="w-24 h-24 mx-auto mb-3" />
            <h5 class="mb-2 text-lg font-bold text-gray-900 dark:text-white">{skill.alt}</h5>
            <p class="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">{montrerCategory(skill.category)}</p>
            <Button class="text-sm !bg-green-400" id="{skill.alt}-id" href={skill.href} target="_blank"> 
              En savoir plus <ArrowRightOutline class="w-3 h-3 ms-1 text-white" />
            </Button>
            <Popover class="w-64 text-base font-light z-10" title="{skill.alt}" triggeredBy="#{skill.alt}-id">{skill.text}</Popover>
          </Card>
        {/if}
      {/if}
    {/each}
  </div>
</section>

