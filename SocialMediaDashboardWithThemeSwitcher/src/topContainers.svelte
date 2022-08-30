

<style>

.container{
    height:216px;
    width:250px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    /*background-color: var(--card-light);*/
    background-color: var(--card-background);
    border-radius: 10px;
    margin: auto;  
}
.container:hover{
    cursor:pointer;
    transform: scale(0.95);
    transition: 0.3s;
    background-color: var(--card-background-hover);
}
.facebook-container{
    border-top:4px solid var(--facebook);
    margin-top: 1.5rem;
}
.facebook-container:hover{
    border:4px solid var(--facebook);
}
.twitter-container{
    border-top:4px solid var(--twitter);
    margin-top: 1.5rem;
}
.twitter-container:hover{
    border:4px solid var(--twitter);
}
.youtube-container{
    margin-top: 1.5rem;
    border-top:4px solid var(--youtube);
}
.youtube-container:hover{
    border:4px solid var(--youtube);
}

.container-top, .statistics{
    display: flex;
    
    justify-content: center;
    align-items: center;
    text-align: center;
}
.ini{
    background: 
    linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%)) padding-box,
    linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%)) border-box;
    border-radius: 10px;
    border-top: 4px solid transparent;
   width:250px;
   
    height:216px;
    margin-top: 1.5rem;
}

.container-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 250px;
    
    margin: auto;
    padding:1rem;
    margin-top: 10rem;
    z-index: 23;
}
.statistics{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    color: var(--lime-green);
    font-weight: var(--bold);
    width:80px;
    font-size: 0.7rem;
    margin-top: 1.5rem;
}
.stats-today{
    padding-left: 0.2rem;
}

.youtube-container .statistics{
    color: var(--bright-red);
}
.container-top{
    width: 86px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    font-size: 0.75rem;
    font-weight:var(--bold);
    color: var(--secondary);
    margin-bottom: 1.2rem;
    margin-top:1rem;
}
.name-container{
    padding-left: 0.2rem;
}
.container-top img{
height: 20px;
}

.numbers-paragraph{
    color: var(--primary);
    font-size: 3.2rem;
    font-weight: var(--bold);
    margin-top: -1rem;
    margin-bottom: -1rem;
    padding: 1rem;
}
span{
    text-transform: uppercase;
    font-size: 0.9rem;
    color: var(--secondary);
    letter-spacing: 2px;
    
}
.container-div{
    margin-top: 1rem;
}

@media only screen and (min-width: 800px) {
    .container-div{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        justify-items: center;
        align-items: center;
        column-gap: 1.5rem;
        width: 100vw;
        margin: auto;
        margin-top: 0rem;        
    }
    
        
    }
    @media only screen and (min-width: 1400px) {
        .container-div{
        display: grid;
        grid-template-columns: 250px 250px 250px 250px;
        
        justify-items: center;
        align-items: center;
        column-gap: 2.2rem;
        width: 1000px;
        margin: auto;
        height: 216px;
        margin-top: -1.3rem;
        
    }
    .container, .ini{
        width:250px;
        height: 216px;
    }
    }


</style>

<div class="container-div">
    <div class="facebook-container container">
        <div class="container-top">
            <img src="/images/icon-facebook.svg" alt="facebook icon" class="facebook-icon">
            <div class="name-container">@nathanf</div>
        </div>
        <div class="numbers">
            <p class="numbers-paragraph">1987</p>
            <span>followers</span>
        </div>
        <div class="statistics">
            <img src="/images/icon-up.svg" alt="green icon up" class="arrow-up-img">
            <p class="stats-today">12 Today</p>
        </div>
    </div>
    
    <div class="twitter-container container">
        <div class="container-top">
            <img src="/images/icon-twitter.svg" alt="twitter icon" class="twitter-icon">
            <div class="name-container">@nathanf</div>
        </div>
        <div class="numbers">
            <p class="numbers-paragraph">1044</p>
            <span>followers</span>
        </div>
        <div class="statistics">
            <img src="/images/icon-up.svg" alt="green icon up" class="arrow-up-img">
            <p class="stats-today">99 Today</p>
        </div>
    </div>
    
    <div class="ini">
        <div class="instagram-container container">
            <div class="container-top">
                <img src="/images/icon-instagram.svg" alt="instagram icon" class="instagram-icon">
                <div class="name-container">@realnathanf</div>
            </div>
            <div class="numbers">
                <p class="numbers-paragraph">11k</p>
                <span>followers</span>
            </div>
            <div class="statistics">
                <img src="/images/icon-up.svg" alt="green icon up" class="arrow-up-img">
                <p class="stats-today">1099 Today</p>
            </div>
        </div>
    </div>
    
    
    
    <div class="youtube-container container">
        <div class="container-top">
            <img src="/images/icon-youtube.svg" alt="youtube icon" class="youtube-icon">
            <div class="name-container">@Nathan.F</div>
        </div>
        <div class="numbers">
            <p class="numbers-paragraph">8239</p>
            <span>subscribers</span>
        </div>
        <div class="statistics">
            <img src="/images/icon-down.svg" alt="green icon up" class="arrow-down-img">
            <p class="stats-today">144 Today</p>
        </div>
    </div>
</div>


