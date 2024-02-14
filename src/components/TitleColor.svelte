<script>
    export let text = " ";
    export let undertext = "";
</script>

<style>
    .title-word {
        animation: color-animation 4s linear infinite;
        display: inline-block;
    }

    .title-word-1 {
        --color-1: #DF8453;
        --color-2: #3D8DAE;
        --color-3: #E4A9A8;
    }

    .title-word-2 {
        --color-1: #DBAD4A;
        --color-2: #ACCFCB;
        --color-3: #17494D;
    }

    .title-word-3 {
        --color-1: #ACCFCB;
        --color-2: #E4A9A8;
        --color-3: #ACCFCB;
    }

    .title-word-4 {
        --color-1: #3D8DAE;
        --color-2: #DF8453;
        --color-3: #E4A9A8;
    }

    @keyframes color-animation {
        0% { color: var(--color-1) }
        32% { color: var(--color-1) }
        33% { color: var(--color-2) }
        65% { color: var(--color-2) }
        66% { color: var(--color-3) }
        99% { color: var(--color-3) }
        100% { color: var(--color-1) }
    }

    .container {
        display: grid;
        place-items: center;
        text-align: center;
        height: 80vh;
    }

    .title {
        font-family: "Montserrat", sans-serif;
        font-weight: 800;
        font-size: 8.5vw;
        text-transform: uppercase;
    }

    .undertext {
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 2vw;
        color: #555;
    }

    :global(body) {
        background-color: #fdf9fd;
        color: #011a32;
        font: 16px/1.25 'Raleway', sans-serif;
        text-align: center;
    }

    :global(#wrapper) {
        margin-left: auto;
        margin-right: auto;
        max-width: 80em;
    }

    :global(#container) {
        display: flex;
        flex-direction: column;
        float: left;
        justify-content: center;
        min-height: 100vh;
        padding: 1em;
        width: 100%;
    }

    :global(h3) {
        animation: text-shadow 5s ease-in-out infinite;
        font-size: 5em;
        font-weight: 900;
        line-height: 1;
    }

    :global(h3:hover) {
        animation-play-state: paused;
    }

    :global(a) {
        color: #024794;
    }

    :global(a:hover) {
        text-decoration: none;
    }

    @keyframes text-shadow {
    0% {  
        transform: translateY(0);
        text-shadow: 
            0 0 0 #0c2ffb, 
            0 0 0 #2cfcfd, 
            0 0 0 #fb203b, 
            0 0 0 #fefc4b;
    }

    20% {  
        transform: translateY(-1em);
        text-shadow: 
            0 0.125em 0 #0c2ffb, 
            0 0.25em 0 #2cfcfd, 
            0 -0.125em 0 #fb203b, 
            0 -0.25em 0 #fefc4b;
    }

    40% {  
        transform: translateY(0.5em);
        text-shadow: 
            0 -0.0625em 0 #0c2ffb, 
            0 -0.125em 0 #2cfcfd, 
            0 0.0625em 0 #fb203b, 
            0 0.125em 0 #fefc4b;
    }
    
   60% {
        transform: translateY(-0.25em);
        text-shadow: 
            0 0.03125em 0 #0c2ffb, 
            0 0.0625em 0 #2cfcfd, 
            0 -0.03125em 0 #fb203b, 
            0 -0.0625em 0 #fefc4b;
    }

    80% {  
        transform: translateY(0);
        text-shadow: 
            0 0 0 #0c2ffb, 
            0 0 0 #2cfcfd, 
            0 0 0 #fb203b, 
            0 0 0 #fefc4b;
    }
}

    @media (prefers-reduced-motion: reduce) {
        * {
            animation: none !important;
            transition: none !important;
        }
    }
</style>

<div class="container">
    <h2 class="title">
        {#each text.split(' ') as word, i}
        <span class={`title-word title-word-${i + 1}`}>{word}</span>
        {i !== text.split('').length - 1 && ' '}
        {/each}
    </h2>
    <h3 class="undertext">
        <span>{undertext}</span>
    </h3>
</div>

