<script>
    import { page } from '$app/stores';
    import logo from '$lib/images/svelte-logo.svg';
    import github from '$lib/images/github.svg';
    import { DarkMode } from 'flowbite-svelte';

    // @ts-ignore
    function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 100;
    // @ts-ignore
    const y = targetElement.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

</script>

<header class="fixed top-0 w-full z-10 bg-darker-beige dark:bg-slate-900 transition-all duration-300 ease-in-out">
    <nav class="flex justify-between items-center py-4 px-6 ">
        <div class="corner absolute top-4 left-6">
            <DarkMode class="dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-[#D9B382] dark:hover:bg-gray-700 rounded-lg text-xl p-2" />
       </div>
        <svg viewBox="0 0 2 3" aria-hidden="true" class="fill-current dark:text-white" >
            <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
        </svg>
        <ul class="flex items-center text-white dark:text-white">
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a href="#presentation" on:click={scrollToSection} class="nav-link">Présentation</a>
            </li>
            <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
                <a href="#competence" on:click={scrollToSection} class="nav-link">Compétences</a>
            </li>
            <li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
                <a href="#projet" on:click={scrollToSection} class="nav-link">Projet</a>
            </li>
            <li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
                <a href="#contact" on:click={scrollToSection} class="nav-link">Me contacter</a>
            </li>
        </ul>
        <svg viewBox="0 0 2 3" aria-hidden="true">
            <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
        </svg>
    </nav>

    <div class="corner absolute top-4 right-6">
        <a href="https://github.com/Jemery-Dev">
            <img src={github} alt="GitHub" class="dark:filter dark:invert" />
        </a>
    </div>
    
</header>

<style>
    .corner {
        width: 3em;
        height: 3em;
    }

    .corner a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .corner img {
        width: 2em;
        height: 2em;
        object-fit: contain;
    }

    nav {
        display: flex;
        justify-content: center;
        position: sticky;
        top: 0;
        --background: rgba(0, 0, 0, 0.7);
    }

    :global(section){
        scroll-behavior: smooth;
    }

    svg {
        width: 2em;
        height: 3em;
        display: block;
    }

    path {
        
        fill: var(--background);
    }

    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background: var(--background);
        background-size: contain;
    }

    li {
        position: relative;
        height: 100%;
    }

    li[aria-current='page']::before {
        --size: 6px;
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: calc(50% - var(--size));
        border: var(--size) solid transparent;
        border-top: var(--size) solid var(--color-theme-1);
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        color: var(--color-text);
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }

    a:hover {
        color: var(--color-theme-1);
    }
</style>
