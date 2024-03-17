<script>
// @ts-nocheck

    import { Card, Pagination } from 'flowbite-svelte';
    import { chunkArray } from '../utils/utils';
    import Icon from '../components/Icon.svelte';
    import ModalProject from './ModalProject.svelte';
	import { onMount } from 'svelte';
    import MiniMiniPartie from './MiniMiniPartie.svelte';


    export let projects = [];
    export let titreListe = "";

    let modalOpen = [];

    const chunkSize = 4;

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

    let miniLists = chunkArray(projects, chunkSize);

    function generatePages(totalPages) {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push({ name: i.toString() });
        }
        return pages;
    }

    function handlePageChange(event) {
        console.log(event.target.textContent);
        currentPage = event.target.textContent;
        currentPage--;
    }

    const totalPages = miniLists.length;

    let pages = generatePages(totalPages);

    onMount(() => {
        modalOpen = Array.from({ length: projects.length }, () => false);
    });

    function openModal(index) {
        modalOpen[index] = true;
    }
</script>

<div class="flex flex-col items-center mx-4 mb-8">
    <div class=" mb-8 flex flex-wrap items-center gap-8">
        <MiniMiniPartie text="{titreListe}" />
        
    </div>
        <div class="space-y-8 gap-x-4 md:grid-cols-1 lg:grid-cols-2 grid">
            <Card class="hidden"></Card>
            {#each miniLists[currentPage] as project, index (project.alt)}
                <Card class="max-w-96 h-[500px] !mr-0 !ml-0 mx-4 border-yellow-500 dark:border-slate-900 bg-beige hover:!bg-rose-50 !border-2 !dark:bg-slate-800 dark:hover:!bg-slate-900" on:click={() => openModal(index)}>
                    <ModalProject bind:open={modalOpen[index]} project={project}></ModalProject>
                    <div class="grid grid-col-1 col-start-1">
                        <Icon gitlink={project.gitlink}></Icon>
                        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{project.alt}</h5>
                        <div class="bg-slate-700 dark:bg-gray-100 max-w-full h-1"></div>
                    </div>
                    <div class="flex items-center flex-wrap">
                        <img src="{project.src}" alt="{project.alt}" class="my-8 card-image hover:scale-105 ease-in-out duration-300">
                        <p class="mb-3 font-normal text-2xl text-slate-700 dark:text-gray-400">{project.description}</p>
                        <div class="flex items-center w-full h-full">
                     </div>
                    </div>
                </Card>
            {/each}
        </div>
        <div class="my-8">
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

<style>
    .card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
</style>