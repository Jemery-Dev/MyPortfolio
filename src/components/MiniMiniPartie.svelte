<script>
    // @ts-nocheck
    export let text = "Titre";
  
    let delay = 0.05;
  </script>
  
  <h2>
    {#each text.split('') as char, i}
      <span style="animation-delay: {delay * i}s" class="dark:text-white text-black">{char}</span>
    {/each}
  </h2>
  
  <style>
    @import url(https://fonts.googleapis.com/css?family=Signika:700,300,600);
  
    h2 {
      font-size: 3em;
      font-weight: bold;
      font-family: 'Signika', sans-serif;
      user-select: none;
    }
  
    h2 span {
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
  
    :hover span{
      animation: bounce 0.6s;
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

  </style>
  