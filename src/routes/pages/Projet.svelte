<script>
    // @ts-nocheck
    import projets from '../../data/projects.json';
    import ProjectHolder from '../../components/ProjectHolder.svelte'


    const projetsUniversitaires = projets.filter(projet => projet.category === 'Universitaire');
    const projetsPersonnels = projets.filter(projet => projet.category === 'Personnel');
 
</script>

<div class="flex flex-wrap items-center justify-center text-4xl text-gray-100 font-black mb-12 mt-12">
    Projets
</div>
    <div class="lg:grid lg:grid-cols-2 md:grid md:grid-cols-1">
    <ProjectHolder projects={projetsUniversitaires} titreListe="Universitaire" srcTitre="/imageProjet/icons8-universite-96.png" class="lg: border-r-8 border-gray-950"> </ProjectHolder>
    <ProjectHolder projects={projetsPersonnels} titreListe="Personnel" srcTitre="/imageProjet/icons8-la-programmation-96.png"> </ProjectHolder>
</div>
