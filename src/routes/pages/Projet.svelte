<script>
    import projets from '../../data/projects.json';
    import ProjectHolder from '../../components/ProjectHolder.svelte'

    const projetsUniversitaires = projets.filter(projet => projet.category === 'Universitaire');
    const projetsPersonnels = projets.filter(projet => projet.category === 'Personnel');
 
</script>

<div class="flex items-center justify-center text-4xl text-gray-100 font-black mb-12 mt-12">
    Projets
</div>
    <div class="lg:grid lg:grid-cols-2 md:grid md:grid-cols-1">
    <ProjectHolder projects={projetsUniversitaires} titreListe="Universitaire"> </ProjectHolder>
    <ProjectHolder projects={projetsPersonnels} titreListe="Personnel"> </ProjectHolder>
</div>
