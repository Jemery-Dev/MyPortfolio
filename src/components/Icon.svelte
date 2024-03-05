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
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
</style>

<div class="github-icon">
    <a href={gitlink} target="_blank">
        <img src="/imageProjet/icons8-github-96.png" alt="GitHub Logo">
        <span class="font-bold">Github</span>
    </a>
</div>
