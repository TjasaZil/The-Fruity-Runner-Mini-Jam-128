<script>
    import Logos from "./logos.svelte";
    import TextSections from "./textSections.svelte";
</script>

<style>
 @media only screen and (min-width:1200px) {
    .logo-text{
        width: 1110px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
        margin-top: 2.4rem;
    }
 }
</style>

<div class="logo-text">
<TextSections/>

<Logos/>
</div>