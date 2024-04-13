<script>
// @ts-nocheck

  import Presentation from './pages/Presentation.svelte';
  import Competence from './pages/Competence.svelte';
  import Projet from './pages/Projet.svelte';
  import Footer from './pages/Footer.svelte';
  import Header from './Header.svelte';
	import { onMount } from 'svelte';
  import './styles.css';

  const startAnimation = (entries, observer) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("slide-in-from-right", entry.isIntersecting);
      });
    };
    
    let observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: '0px', threshold: 1 }; 

    const cards = document.querySelectorAll('.card');
    cards.forEach(el => {
      observer.observe(el, options);
    });


</script>

<html lang="fr" class="bg-beige dark:bg-slate-800">
  <Header />
  <section id="presentation"><Presentation /></section>  
  <section id="competence"><Competence /></section>
  <section id="projet"><Projet /></section>
  <section id="contact"><Footer /></section>
</html>
