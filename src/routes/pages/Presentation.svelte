<script>
  // @ts-nocheck
  import ColorfulTitle from '../../components/TitleColor.svelte';
  import SousTitre from '../../components/Undertitle.svelte'
  import {Carousel, Avatar, DarkMode} from  'flowbite-svelte'
  import images from '../../data/projects.json';
  import { onMount } from 'svelte';
 
  
  let image;
  const textePresentation = `Salut, je suis Jérémy Girard, étudiant en deuxième année de BUT INFO à Lyon, passionné par le développement sous toutes ses facettes. J'adore créer et apprendre continuellement de nouvelles technologies pour affiner mes compétences. Ayant déjà réalisé plusieurs projets, dont ce portfolio que vous explorez actuellement, je vous invite à découvrir quelques-unes de mes créations en parcourant les différentes sections. Mon plaisir réside dans la concrétisation de projets concrets et significatifs, alors n'hésitez pas à plonger dans mon travail pour en savoir plus !`;
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
    <div class="area-square" >
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
      <div class="flex items-center justify-center space-x-4 rtl:space-x-reverse ">
        <p class="dark:text-gray-300 mt-32 mb-8 border-sky-700 text-xs lg:text-lg font-bold text-slate-700 rounded-md mx-12">{textePresentation} </p>
      </div>z
    </div>
  </div>
</section>
