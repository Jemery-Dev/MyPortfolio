<script>
  import Presentation from './pages/Presentation.svelte';
  import Competence from './pages/Competence.svelte';
  import Projet from './pages/Projet.svelte';
  import Footer from './pages/Footer.svelte';
  import Header from './Header.svelte';
	import { onMount } from 'svelte';
  import './styles.css';


</script>

<html lang="fr" class="bg-beige dark:bg-slate-800">
  <Header />
  <section id="presentation"><Presentation /></section>  
  <section id="competence"><Competence /></section>
  <section id="projet"><Projet /></section>
  <section id="contact"><Footer /></section>
</html>
