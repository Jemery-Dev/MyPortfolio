<script>
    // @ts-nocheck
    export let text = "Titre";
  
    let delay = 0.05;
  </script>
  
  <h2>
    {#each text.split('') as char, i}
      <span style="animation-delay: {delay * i}s">{char}</span>
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
      animation: float 0.2s ease-in-out infinite;
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
  
    :global(body:hover span) {
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
  
    span:nth-child(4n) {
      color: hsl(50, 75%, 55%);
      text-shadow: 1px 1px hsl(50, 75%, 45%), 2px 2px hsl(50, 45%, 45%), 3px 3px hsl(50, 45%, 45%), 4px 4px hsl(50, 75%, 45%);
    }
    span:nth-child(4n-1) {
      color: hsl(135, 35%, 55%);
      text-shadow: 1px 1px hsl(135, 35%, 45%), 2px 2px hsl(135, 35%, 45%), 3px 3px hsl(135, 35%, 45%), 4px 4px hsl(135, 35%, 45%);
    }
    span:nth-child(4n-2) {
      color: hsl(155, 35%, 60%);
      text-shadow: 1px 1px hsl(155, 25%, 50%), 2px 2px hsl(155, 25%, 50%), 3px 3px hsl(155, 25%, 50%), 4px 4px hsl(140, 25%, 50%);
    }
    span:nth-child(4n-3) {
      color: hsl(30, 65%, 60%);
      text-shadow: 1px 1px hsl(30, 45%, 50%), 2px 2px hsl(30, 45%, 50%), 3px 3px hsl(30, 45%, 50%), 4px 4px hsl(30, 45%, 50%);
    }
  </style>
  