<script>
  // @ts-nocheck
  import ColorfulTitle from '../../components/TitleColor.svelte';
  import SousTitre from '../../components/Undertitle.svelte'
  import {Carousel, Avatar, DarkMode} from  'flowbite-svelte'
  import images from '../../data/projects.json';
  import { onMount } from 'svelte';
  import MiniPartie from '../../components/MiniPartie.svelte';
 
  
  let image;
  const textePresentation = `Salut, je suis Jérémy Girard, étudiant en deuxième année de BUT INFO à Lyon, passionné par le développement sous toutes ses facettes. J'adore créer et apprendre continuellement de nouvelles technologies pour affiner mes compétences.<br><br>
Ayant déjà réalisé plusieurs projets, dont ce portfolio que vous explorez actuellement, je vous invite à découvrir quelques-unes de mes créations en parcourant les différentes sections. Mon plaisir réside dans la concrétisation de projets concrets et significatifs, alors n'hésitez pas à plonger dans mon travail pour en savoir plus !<br><br>
En dehors du développement, je joue de la basse électrique depuis bientôt 3 ans, et je suis un grand fan de musique, surtout les styles Funk et Jazz. Comme tout le monde, j'aime le sport, mais plus spécialement le Volley !`;
  images.sort(() => Math.random() - 0.5);

</script>
<section id="presentation" class="py-20 text-white dark:bg-slate-800">
  <div class="container mx-auto text-center">
    <div class="context-square">
      <ColorfulTitle text="Jérémy Girard"/>
      <SousTitre undertext="18 ans . Français . Développeur Web . Etudiant" />
      <div class="text-lg mb-6 space-x-">
      </div>
    </div>
    <div class="area-square p-24">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
      <div class="flex items-center justify-center space-x-4 rtl:space-x-reverse">
        <div class="bg-cyan-100 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 rounded-lg p-8">
          <MiniPartie text="Présentation"/>
          <p class="dark:text-gray-100 mt-2 mb-4 lg:mb-8 text-xs lg:text-lg font-bold text-slate-700 dark:text-white">
            Salut, je suis Jérémy Girard, étudiant en deuxième année de BUT INFO à Lyon, passionné par le développement sous toutes ses facettes. J'adore créer et apprendre continuellement de nouvelles technologies pour affiner mes compétences.
          </p>
          <p class="dark:text-gray-100 mb-4 lg:mb-8 text-xs lg:text-lg font-bold text-slate-700 dark:text-white">
            Ayant déjà réalisé plusieurs projets, dont ce portfolio que vous explorez actuellement, je vous invite à découvrir quelques-unes de mes créations en parcourant les différentes sections. Mon plaisir réside dans la concrétisation de projets concrets et significatifs, alors n'hésitez pas à plonger dans mon travail pour en savoir plus !
          </p>
          <p class="dark:text-gray-100 mb-4 lg:mb-8 text-xs lg:text-lg font-bold text-slate-700 dark:text-white">
            En dehors du développement, je joue de la basse électrique depuis bientôt 3 ans, et je suis un grand fan de musique, surtout les styles Funk et Jazz. Comme tout le monde, j'aime le sport, mais plus spécialement le Volley !
          </p>
        </div>
      </div>
    </div>
</section>
