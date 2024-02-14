<script>
    export let text = " ";
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
        margin-bottom: -120px;
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
</div>

