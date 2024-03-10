<script>
  import { DarkMode } from 'flowbite-svelte';
  import Presentation from './pages/Presentation.svelte';
  import Competence from './pages/Competence.svelte';
  import Projet from './pages/Projet.svelte';
  import Footer from './pages/Footer.svelte';
</script>

<html lang="fr" class="bg-beige dark:bg-slate-800">
  <DarkMode class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2" />
  <Presentation />
  <Competence />
  <Projet />
  <Footer />
</html>
