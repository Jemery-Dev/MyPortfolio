<script>
    // @ts-nocheck
    export let text = "null";
</script>
    <h1 class="dark:text-white text-black ">
        {#each text.split('') as char}
            <span>{char}</span>
        {/each}
    </h1>
<style>
    @import url(https://fonts.googleapis.com/css?family=Signika:700,300,600);

    h1 {
        font: bold 7.5vw/1.6 'Signika', sans-serif;
        user-select: none;
    }

    h1 span {
        font-size: 50px;
        display: inline-block;
        animation: float 1s ease-in-out infinite;

    }

    @keyframes float {
        0%, 100% {
            transform: none;
        }

        33% {
            transform: translateY(-1px) rotate(-2deg);
        }

        66% {
            transform: translateY(1px) rotate(2deg);
        }
    }

    :hover span {
        animation: bounce .6s;
    }

    @keyframes bounce {
        0%, 100% {
            transform: translate(0);
        }

        25% {
            transform: rotateX(20deg) translateY(2px) rotate(-3deg);
        }

        50% {
            transform: translateY(-20px) rotate(3deg) scale(1.1);
        }
    }


    h1 span:nth-child(2) {
        animation-delay: .05s;
    }

    h1 span:nth-child(3) {
        animation-delay: .1s;
    }

    h1 span:nth-child(4) {
        animation-delay: .15s;
    }

    h1 span:nth-child(5) {
        animation-delay: .2s;
    }

    h1 span:nth-child(6) {
        animation-delay: .25s;
    }

    h1 span:nth-child(7) {
        animation-delay: .3s;
    }

    h1 span:nth-child(8) {
        animation-delay: .35s;
    }

    h1 span:nth-child(9) {
        animation-delay: .4s;
    }

    h1 span:nth-child(10) {
        animation-delay: .45s;
    }

    h1 span:nth-child(11) {
        animation-delay: .5s;
    }

    h1 span:nth-child(12) {
        animation-delay: .55s;
    }

    h1 span:nth-child(13) {
        animation-delay: .6s;
    }

    h1 span:nth-child(14) {
        animation-delay: .65s;
    }

</style>
