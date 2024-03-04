<script>
    import { Card, Pagination } from 'flowbite-svelte';
    import { chunkArray } from '../utils/utils'; // Importer la fonction chunkArray depuis un fichier utilitaire
	import Projet from '../routes/pages/Projet.svelte';

    export let projects = []; // Propriété pour passer la liste de projets au composant
    export let titreListe = "";

    // Définir la taille des mini-listes de projets
    const chunkSize = 4;

    // Pagination
    let currentPage = 0;

    function previous() {
        if (currentPage > 0) {
            currentPage--;
        }
    }

    function next() {
        if (currentPage < miniLists.length - 1) {
            currentPage++;
        }
    }

    // Diviser la liste de projets en mini-listes
    let miniLists = chunkArray(projects, chunkSize);

    // Générer les pages pour la pagination
    function generatePages(totalPages) {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push({ name: i.toString() });
        }
        return pages;
    }

    // Mettre à jour la pagination lors du changement de page
    function handlePageChange(event) {
        console.log(event.target.textContent);
        currentPage = event.target.textContent;
        currentPage--;
    }

    // Calculer le nombre total de pages
    const totalPages = miniLists.length;

    // Générer les pages initiales
    let pages = generatePages(totalPages);
</script>

<div class="flex flex-col items-center mx-4 mb-8">
    <div class="text-4xl text-gray-100 font-black mb-8">
        {titreListe}
    </div>
    <div class="rounded border border-gray-400">
        <div class="space-y-8 gap-x-4 md:grid-cols-1 lg:grid-cols-2 grid">
            <Card class="hidden"></Card>
            {#each miniLists[currentPage] as project, index (project.alt)}
                <Card class="max-w-96 mb-3 flex items-center mx-4 !border-gray-400 !bg-slate-800 hover:!bg-slate-900">
                    <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{project.alt}</h5>
                    <p class="mb-3 font-normal text-2xl !text-gray-300 dark:text-gray-400 leading-normal">{project.description}</p>
                </Card>
            {/each}
        </div>
        <div class="mb-4 mt-4">
            <Pagination
                bind:currentPage={currentPage}
                totalPages={totalPages}
                pages={pages}
                on:previous={previous}
                on:next={next}
                on:click={handlePageChange}>

                <span slot="next">Suivant</span>
                <span slot="prev">Précédent</span>
            </Pagination>
        </div>
    </div>
</div>