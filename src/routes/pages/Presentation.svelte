<script>
      import ColorfulTitle from '../../components/TitleColor.svelte';
      import SousTitre from '../../components/Undertitle.svelte'
      import {Carousel, Avatar} from  'flowbite-svelte'
      import images from '../../data/projects.json';
      let image;
      const textePresentation = `Salut, je suis Jérémy Girard, étudiant en deuxième année de BUT INFO à Lyon, passionné par le développement sous toutes ses facettes. J'adore créer et apprendre continuellement de nouvelles technologies pour affiner mes compétences. Ayant déjà réalisé plusieurs projets, dont ce portfolio que vous explorez actuellement, je vous invite à découvrir quelques-unes de mes créations en parcourant les différentes sections. Mon plaisir réside dans la concrétisation de projets concrets et significatifs, alors n'hésitez pas à plonger dans mon travail pour en savoir plus !`;

           
    function jouerMusique(){
        var audio = new Audio('enmodefeuj.mp3');
        audio.play();
      }
</script>

<button on:click={jouerMusique()}></button>
<section id="presentation" class="py-20 text-white">
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
      <p class="text-gray-300 mt-32 mb-8 border-sky-700 text-lg font-bold bg-gray-800 rounded-md">{textePresentation} </p>
    </div>
  
    <div id="liste-projets" class="mt-16">
      <div class="max-w-4xl mx-auto space-y-4">
        <link rel="preload" href="{image?.src}" as="image" />
    
        <Carousel {images} let:Indicators let:Controls  duration="10000" on:change={({ detail }) => (image = detail)}>
          <Controls />
          <Indicators />
        </Carousel>

        
        <div class="rounded h-10 bg-gr  ay-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center">
          {image?.alt}
        </div>
      </div>
    </div>
  </section>