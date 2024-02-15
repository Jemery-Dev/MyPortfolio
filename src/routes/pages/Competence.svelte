<script>
    import {Card, Button, Search} from 'flowbite-svelte';
    import {ArrowRightOutline } from 'flowbite-svelte-icons';
    import skills from '../../data/skills.json';
  
    let image;
    let choix = "all"; // Valeur pour les boutons de catégorie
    let searchTexte = ""; // Valeur pour la search bar
  
    function montrerCategory(liste){
    let texte = "";
    for (const categorie of liste) {
      texte += categorie + " ";
    }
    return texte.trim();
  }
  
    function updateSearchText(event) {
      searchTexte = event.target.value;
    }
  
</script>

<section id="competences" class="p-8">
  <div class="flex items-center justify-center text-4xl text-gray-100 font-black">
      Compétences
  </div>
    <div class="flex items-center justify-center py-4 md:py-8 flex-wrap gap-3 mb-3 mx-auto">
      <Button pill size="xl" on:click={() => choix = "all"} outline>Tous</Button>
      <Button pill size="xl" on:click={() => choix = "Front-End"} color="alternative">Front-End</Button>
      <Button pill size="xl" on:click={() => choix = "Back-End"} color="alternative">Back-End</Button>
      <Search size="lg" placeholder="Rechercher compétence" on:input={updateSearchText}></Search>
    </div>
    
    
    <div id="gallery" class="flex flex-wrap justify-center space-y-4">
      <Card class="hidden"/>
      {#each skills as skill (skill.alt)}
      {#if skill.alt && (skill.alt.toLowerCase().includes(searchTexte.toLowerCase()) || searchTexte === "")}
        {#if skill.category && (skill.category.includes(choix) || choix === "all")}
            <Card class="max-w-xs mx-auto w-full md:w-1/2 lg:w-1/4 h-64 front__card">
              <img src={skill.src} alt={skill.alt} class="w-24 h-24 mx-auto mb-3" />
              <h5 class="mb-2 text-lg font-bold text-gray-900 dark:text-white">{skill.alt}</h5>
              <p class="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">{montrerCategory(skill.category)}</p>
              <Button class="text-sm" href={skill.href}> 
                En savoir plus <ArrowRightOutline class="w-3 h-3 ms-1 text-white" />
              </Button>
            </Card>

            <Card class="max-w-xs mx-auto w-full md:w-1/2 lg:w-1/4 h-64 back__card">
              <h5 class="mb-2 text-lg font-bold text-gray-900 dark:text-white">{skill.alt}</h5>
              <p class="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">{montrerCategory(skill.category)}</p>
            </Card>
          {/if}
        {/if}
      {/each}
      </div>
  </section>