<script>
    import {Card, Button, Search, Popover} from 'flowbite-svelte';
    import {ArrowRightOutline } from 'flowbite-svelte-icons';
    import skills from '../../data/skills.json';
  
    let image;
    let choix = "all"; // Valeur pour les boutons de catégorie
    let searchTexte = ""; // Valeur pour la search bar
  
    /**
	 * @param {string[]} liste
	 */
    function montrerCategory(liste){
    let texte = "";
    for (const categorie of liste) {
      texte += categorie + " ";
    }
    return texte.trim();
  }
  
    /**
	 * @param {{ target: { value: string; }; }} event
	 */
    function updateSearchText(event) {
      searchTexte = event.target.value;
    }
  
</script>



<section id="competences" class="p-8">
  <div class="flex items-center justify-center text-4xl text-gray-100 font-black">
      Compétences
  </div>
    <div class="flex items-center justify-center py-4 md:py-8 flex-wrap gap-3 mb-3 mx-auto">
      <Search size="lg" placeholder="Rechercher compétence" on:input={updateSearchText}></Search>
    </div>
    
    
    <div id="gallery" class="flex flex-wrap justify-center space-y-4">
      <Card class="hidden"/>
      {#each skills as skill (skill.alt)}
      {#if skill.alt && (skill.alt.toLowerCase().includes(searchTexte.toLowerCase()) || searchTexte === "")}
        {#if skill.category && (skill.category.includes(choix) || choix === "all")}
            <Card class="max-w-xs mx-auto w-full md:w-1/2 lg:w-1/4 h-64">
              <img src={skill.src} alt={skill.alt} class="w-24 h-24 mx-auto mb-3" />
              <h5 class="mb-2 text-lg font-bold text-gray-900 dark:text-white">{skill.alt}</h5>
              <p class="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">{montrerCategory(skill.category)}</p>
              {#if skill.alt === "C++"}
                <Button class="text-sm" id="lecplusplus" href={skill.href}> 
                    En savoir plus <ArrowRightOutline class="w-3 h-3 ms-1 text-white" />
                </Button>
                <Popover class="w-64 text-base font-light" title="{skill.alt}" triggeredBy="#lecplusplus">{skill.text}</Popover>
              {:else}
                <Button class="text-sm" id="{skill.alt}-id" href={skill.href}> En savoir plus <ArrowRightOutline class="w-3 h-3 ms-1 text-white" />
                </Button>
                <Popover class="w-64 text-base font-light" title="{skill.alt}" triggeredBy="#{skill.alt}-id">{skill.text}</Popover>
              {/if}
            </Card>
          {/if}
        {/if}
      {/each}
      </div>
  </section>

