<script>
  import {Card, Button, Search, Popover} from 'flowbite-svelte';
  import skills from '../../data/skills.json';
  import MiniPartie from '../../components/MiniPartie.svelte';
  import { AccordionItem, Accordion } from 'flowbite-svelte';


  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  let image;
  let choix = "all";
  let searchTexte = "";

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

  function updateChoix(categorie) {
    choix = categorie;
  }

</script>



<section id="competences">
  <MiniPartie text="Compétences" />

  <div class="flex items-center justify-center py-4 md:py-8 flex-wrap gap-3 mb-3 mx-auto">
    <Search size="lg" placeholder="Rechercher compétence" on:input={updateSearchText} class="bg-teal-50 text-left"></Search>
  </div>

  <div class="flex items-center justify-center py-4 md:py-8 flex-wrap gap-3 mb-3 mx-auto">
    <Button on:click={() => updateChoix('all')} class="dark:bg-gray-200 bg-gray-100 text-black">Tous</Button>
    <Button on:click={() => updateChoix('Front-End')} class="bg-blue-500 text-white">Front-End</Button>
    <Button on:click={() => updateChoix('Back-End')} class="bg-green-500 text-white">Back-End</Button>
    <Button on:click={() => updateChoix('Base de données')} class="bg-yellow-500 text-white">Base de données</Button>
    <Button on:click={() => updateChoix('Framework')} class="bg-indigo-500 text-white">Framework</Button>
    <Button on:click={() => updateChoix('Outil')} class="bg-pink-500 text-white">Outil</Button>
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

  <MiniPartie text="Universitaire"></MiniPartie>
  <div class="flex justify-center items-center">
    <div class="w-6/12">
      <Accordion class="">
        <AccordionItem>
          <span slot="header">Réaliser des applications</span>
            <li>Maîtrise des concepts de la programmation orientée objet et événementielle.</li>
            <li>Compétence dans divers langages : Java, PHP, JavaScript/Typescript, C, Python, PL/SQL, HTML, CSS.</li>
            <li>Écriture de code de qualité avec tests unitaires et documentation.</li>
            <li>Création d'algorithmes pour la résolution de problèmes.</li>
        </AccordionItem>
        <AccordionItem>
          <span slot="header">Optimiser des applications informatiques</span>
          <li>Analyse et optimisation d'algorithmes.</li>
          <li>Utilisation d'outils mathématiques pour l'optimisation.</li>
          <li>Utilisation d'outils de profiling pour optimiser les applications.</li>
        </AccordionItem>
        <AccordionItem>
          <span slot="header">Administrer des systèmes informatiques communicants complexes</span>
          <li>Installation, configuration et gestion des systèmes d'exploitation (Windows et Linux).</li>
          <li>Maîtrise des concepts de base des réseaux et de la sécurité informatique.</li>
          <li>Maîtrise des concepts de base de la virtualisation</li>
          <li>Résolution des problèmes sur un système d'exploitation.</li>
        </AccordionItem>
        <AccordionItem>
          <span slot="header">Gérer des données de l'information</span>
          <li>Maîtrise des langages PL/SQL.</li>
          <li>Utilisation de différents SGBD : Oracle, MySQL, MariaDB, SQLite.</li>
          <li>Conception d'un MCD et d'un MLD.</li>
          <li>Conception d'API pour manipuler des données dans une base de données.</li>
        </AccordionItem>
        <AccordionItem>
          <span slot="header">Conduire un projet</span>
          <li>Planification d'un projet.</li>
          <li>Réalisation d'un projet en équipe.</li>
          <li>Rédaction de documents de projet (cahier des charges, spécifications techniques, etc.).</li>
          <li>Communication avec un client et une équipe.</li>
        </AccordionItem>
        <AccordionItem>
          <span slot="header">Travailler dans une équipe informatique</span>
          <li>Gestion d'une petite équipe informatique.</li>
          <li>Communication efficace au sein d'une équipe.</li>
          <li>Connaissance des différentes méthodes de développement et leur application.</li>
          <li>Gestion du temps de chaque membre de l'équipe et supervision du bon fonctionnement du projet.</li>
          <li>Résolution des conflits au sein de l'équipe.</li>
          <li>Veille constante sur les nouveautés dans le domaine de l'informatique.</li>
        </AccordionItem>
      </Accordion>
    </div>
  </div>

</section>

