<script>
  import Presentation from './pages/Presentation.svelte';
  import Competence from './pages/Competence.svelte';
  import Projet from './pages/Projet.svelte';
  import Footer from './pages/Footer.svelte';
  import Header from './Header.svelte';
  import Experience from './pages/Experience.svelte';
  import './styles.css';


</script>

<div class="bg-cyan-50 dark:bg-slate-800">
  <Header />
  <section id="presentations"><Presentation /></section>
  <section id="competence"><Competence /></section>
  <section id="projet"><Projet /></section>
  <section id="experience"><Experience /></section>
  <section id="contact"><Footer /></section>
</div>