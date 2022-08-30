<style>
        .preview-icon{
          width: 49.61px;
          height: 31.89px;  
        }
        .text-snippet{
            width: 36px;
            height: 32px;
            
        }
        .leaf{
            width: 44px;
            height: 40px;
            
        }
        img{
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        .text-container{
            width: 311px;
            margin: auto;
        }
        @media only screen and (min-width:1200px) {
            .text-container{
                display: grid;
                grid-template-columns: 350px 350px 350px;
                width: 1110px;
                height: 216px;
                align-self: center;
                justify-self: center;
                margin: auto;
                column-gap: 1.5rem;
                
            }
            p{
                font-size: 1rem;
                line-height: 1.8rem;
            }
            h3{
                font-size: 1.5rem;
            }
                       
        }
    
</style>

<div class="text-container">
    <section class="blacklists">
        <img src="images/icon-blacklist.svg" alt="" class="leaf">
        <h3>Create blacklists</h3>
        <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources. </p>
    </section>
    <section class="snippets">
        <img src="images/icon-text.svg" alt="" class="text-snippet">
        <h3>Plain text snippets </h3>
        <p>Remove unwanted formatting from copied text for a consistent look. </p>
    </section>
    <section class="sneak">
        <img src="images/icon-preview.svg" alt="" class="preview-icon">
        <h3>Sneak preview</h3>
        <p>Quick preview of all snippets on your Clipboard for easy access.</p>
    </section>

</div>