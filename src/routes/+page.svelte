<script>
  import './styles.css';
  import Presentation from './pages/Presentation.svelte'
  import Competence from './pages/Competence.svelte'
  import Projet from './pages/Projet.svelte'
 
  /*function jouerMusique(){
      var audio = new Audio('enmodefeuj.mp3');
      audio.play();
    }*/
</script>
<html class="dark" lang="fr">
  <!-- <button on:click={jouerMusique()}>f</button>-->
  <Presentation />
  <Competence />
  <Projet />
</html>

