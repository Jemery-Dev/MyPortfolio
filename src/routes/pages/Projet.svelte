<script>
    // @ts-nocheck
    import projets from '../../data/projects.json';
    import ProjectHolder from '../../components/ProjectHolder.svelte'
    import MiniPartie from '../../components/MiniPartie.svelte';


    const projetsUniversitaires = projets.filter(projet => projet.category === 'Universitaire');
    const projetsPersonnels = projets.filter(projet => projet.category === 'Personnel');
 
</script>

    <MiniPartie text="Projet"/>

    <div class="lg:grid lg:grid-cols-2 md:grid md:grid-cols-1">
        <div class="lg:border-r md: border-gray-400">
            <ProjectHolder projects={projetsUniversitaires} titreListe="Universitaire"> </ProjectHolder>
        </div>
        <div class="lg:border-l md: border-gray-400">
            <ProjectHolder projects={projetsPersonnels} titreListe="Personnel"> </ProjectHolder>
        </div>
    </div>