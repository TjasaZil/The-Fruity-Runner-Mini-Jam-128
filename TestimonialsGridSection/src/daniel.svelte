
<style>
    .daniel-container{
        width: 327px;
        height: 444px;
        background-color: var(--violet);
        color: var(--white);
        border-radius: 10px;
        z-index: -4;
    }
    #quote-img{
        height: 102px;
        width: 104px;
        position: absolute;
        margin-left: 12rem;
        z-index: -3;
    }
    h1{
        margin-bottom: 1.7rem;
    }
    p{
        font-size: 0.825rem;
        color:hsla(0, 0%, 100%,70%);
    }
    .img{
    border:2px solid white;
}

    @media only screen and (min-width: 1200px) {
        .daniel-container{
            height:282px;
            width: 540px;
            grid-column: 1/3;
            grid-row: 1/2;
        }
        h1{
            width: 472px;
            font-size: 1.2rem;
            margin-bottom: 1.2rem;
        }
        #quote-img{
            margin-left: 22rem;
        }
        p{
            width: 476px;
        }
    }

</style>


<section class="daniel-container">
    <img src="images/bg-pattern-quotation.svg" alt="quotation" id="quote-img">
<div class="header-container daniel-header">
    <img class="img daniel-img" src="images/image-daniel.jpg" alt="daniel avatar">
        <div class="header-text daniel-header-text">
    <h2>Daniel Clifford</h2>
    <span>Verified Graduate</span>
        </div>
    </div>
<h1>I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</h1>
<p>“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
</section>



<!--<div id="header-container">
<img src="images/image-daniel.jpg" alt="daniel avatar">
    <div id="header-text">
<h2>Daniel Clifford</h2>
<span>Verified Graduate</span>
    </div>
</div>-->