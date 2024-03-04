<script>
    // Propriétés du composant
    export let gitlink = "";
</script>

<style>
    .github-icon {
        display: inline-block;
    }

    .github-icon a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    .github-icon img {
        width: 24px; /* Taille de l'image */
        height: 24px;
        margin-right: 8px; /* Marge à droite de l'image */
    }
</style>

<div class="github-icon">
    <a href={gitlink} target="_blank">
        <img src="/imageProjet/icons8-github-96.png" alt="GitHub Logo">
        <span>Github</span>
    </a>
</div>
