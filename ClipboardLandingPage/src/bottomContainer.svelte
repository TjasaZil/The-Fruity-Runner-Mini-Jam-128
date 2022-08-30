<script>
    import Buttons from "./buttons.svelte";
</script>

<style>
    .bottom-container{
        width: 311px;
        margin: auto;
        margin-top: 5rem;
    }
    h3{
        font-size: 1.6rem;
    }
    p{
        font-size: 1.0125rem;
        line-height: 1.3rem;
        margin-bottom: 3rem;
    }
    @media only screen and (min-width:1200px) {
        .bottom-container{
            margin: auto;
            width: 730px;
            margin-top: -4rem;
        }
        p{
            font-size: 1.2rem;
            line-height: 1.8;
            margin-top: -1rem;
            margin-bottom: 1.6rem;
        }
        h3{
            font-size: 2.2rem;
        }
    }
    
</style>

<div class="bottom-container">
    <h3>Clipboard for iOS and Mac OS </h3>
    <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re 
        ready to start adding to your clipboard.</p>
    <Buttons/>
    </div>