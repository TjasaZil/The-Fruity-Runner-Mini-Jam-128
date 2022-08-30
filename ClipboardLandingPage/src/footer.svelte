<style>

    .footer-container{
        background-color: var(--grayish);
        margin-top: 5rem;
        width: 100vw;
    }
    .icon-img{
        width: 55px;
        padding:2rem;
    }
    .grid-container{
        width: 160px;
        height: 230px;
        display: grid;
        justify-content: center;
        align-self: center;
        margin: auto;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        font-size:0.9rem;
        color: var(--dark-grayish-blue);
    }
    .social-media{
        width: 160px;
        display: grid;
        align-self: center;
        justify-items: center;
        margin: auto;
        grid-template-columns: 1fr 1fr 1fr;
        
        margin-top: 2rem;
        
    }
    img{
        width: 24px;
    }
    img:hover{
        cursor: pointer;
        transform: scale(1.05);
        transition: 0.7s;
    }
    .faq:hover{
        cursor: pointer;
        transform: scale(1.05);
        transition: 0.7s;
        color: var(--cyan);
        text-transform: uppercase;
    }
    .contact:hover{
        cursor: pointer;
        transform: scale(1.05);
        transition: 0.7s;
        color: var(--cyan);
        text-transform: uppercase;
    }
    .privacy-policy:hover{
        cursor: pointer;
        transform: scale(1.05);
        transition: 0.7s;
        color: var(--cyan);
        text-transform: uppercase;
    }
    .press-kit:hover{
        cursor: pointer;
        transform: scale(1.05);
        transition: 0.7s;
        color: var(--cyan);
        text-transform: uppercase;
    }
    .install-guide:hover{
        cursor: pointer;
        transform: scale(1.05);
        transition: 0.7s;
        color: var(--cyan);
        text-transform: uppercase;
    }
  

@media only screen and (min-width:1200px) {

    .footer-container{
        height: 150px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 9rem;
        position: absolute;
    }
    .grid-container{
        width: 700px;
        height: 72px;
        display: grid;
        justify-content: center;
        align-self: center;
        margin: auto;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        font-size:1.1rem;
        color: var(--dark-grayish-blue);
        text-align: left;
    }
    .icon-img{
        margin: auto;
    }
    .social-media{
        width: 120px;
        margin: auto;
    }
    .faq{
        grid-row: 1/2;
        grid-column: 1/2;
    }
    .contact{
        grid-row:2/3;
        grid-column:1/2;
    }
    .privacy-policy{
        grid-row:1/2;
        grid-column: 2/3;
    }
    .press-kit{
        grid-row:2/3;
        grid-column: 2/3;
    }
    .install-guide{
        grid-row:1/2;
        grid-column: 3/4;
    }
    #inner-container{
        width: 1250px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center
    }
}

</style>

<footer class="footer-container">
    <div id="inner-container">
    <img src="images/logo.svg" alt="" class="icon-img">
    
    <div class="grid-container">
        <div class="faq">FAQs</div>
        <div class="contact">Contact Us</div>
        <div class="privacy-policy">Privacy Policy</div>
        <div class="press-kit">Press Kit</div>
        <div class="install-guide">Install Guide</div>
    </div>
    <div class="social-media">
        <img src="images/icon-facebook.svg" alt="" class="facebook-icon">
        <img src="images/icon-twitter.svg" alt="" class="twitter-icon">
        <img src="images/icon-instagram.svg" alt="" class="insta-icon">
    </div>
</div>
</footer>