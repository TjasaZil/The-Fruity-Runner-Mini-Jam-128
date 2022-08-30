
<style>
h3{
    color:var(--primary);
    font-size: 1.5rem;
    font-weight: var(--bold);
    text-align: center;
  
}
.container{
    width: 250px;
    height: 125px;
   margin: auto;
    background-color: var(--card-background);
    border: none;
    border-radius: 10px;
    display: grid;
    align-self: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 4rem;
    font-weight: var(--bold);
}
.container:hover{
    border:3px solid;
    cursor: pointer;
    background-color: var(--card-background-hover);
    transition: 0.3s;
    transform: scale(1.05);
}
.container-fb-views:hover, .container-fb-likes:hover{
    border-color: var(--facebook);
}
.container-retweet:hover, .container-tw-likes:hover{
    border-color: var(--twitter);
}
.container-yt-likes:hover, .container-yt-views:hover{
    border-color: var(--youtube);
}
.container-in-likes:hover, .container-in-views:hover{
    border-color: hsl(329, 70%, 58%);
}
.bottom-containers{
    min-width: 250px;
    
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-self: center;
    margin: auto;
    row-gap: 1.5rem;
}
.stats-num{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.icon{
    height: 20px;
    margin: auto;
}
.text, .number{
    margin: auto;
    text-align: left;
}
.num-div{
    font-size: 0.8rem;
    margin-left: 0.2rem;
}
.number{
    font-size: 2rem;
    color: var(--primary);
    margin-top: 0.2rem;
}
.text{
    color: var(--secondary);
    font-size: 0.9rem;
}


@media only screen and (min-width: 800px) {
    .bottom-containers{
        width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-self: center;
    margin: auto;
    
    }
    .container{
        width: 250px;
    }
    .bottom{
        width: auto;
        margin: auto;
    } 
    }
    @media only screen and (min-width: 1400px) {
    .bottom-containers{
    width: 1110px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-self: center;
    margin: auto;
    row-gap: 1.5rem;
    column-gap: 2.2rem;
    }
    .container{
        width: 250px;
        height: 125px;
    }
    .bottom{
        width: 1110px;
        margin: auto;
        margin-top: 3rem;
    }
    h3{
        margin-left: -56rem;
    }
        
    }
    

</style>
<div class="bottom">
    <h3>Overview - Today</h3>
    <div class="bottom-containers">
    <div class="container-fb-views container">
       <p class="text">Page View</p>
        <img src="/images/icon-facebook.svg" alt="facebook icon" class="facebook-icon icon">
      <p class="number">87</p>
        <div class="stats-num">
            <img src="/images/icon-up.svg" alt="up arrow" class="arrow">
            <div class="num-div"style="color:var(--lime-green);">3%</div>
        </div>
    </div>
    
    <div class="container-fb-likes container">
        <p class="text">Likes</p>
        <img src="/images/icon-facebook.svg" alt="facebook icon" class="facebook-icon icon">
        <p class="number">52</p>
        <div class="stats-num">
            <img src="/images/icon-down.svg" alt="down arrow" class="arrow">
            <div class="num-div" style="color:var(--bright-red);">2%</div>
        </div>
    </div>
    
        <div class="container-in-likes container">
            <p class="text">Likes</p>
            <img src="/images/icon-instagram.svg" alt="instagram icon" class="in-icon icon">
            <p class="number">5462</p>
            <div class="stats-num">
                <img src="/images/icon-up.svg" alt="up arrow" class="arrow">
                <div class="num-div"style="color:var(--lime-green);">2257%</div>
            </div>
        </div>
    
        <div class="container-in-views container">
            <p class="text">Profile Views</p>
            <img src="/images/icon-instagram.svg" alt="instagram icon" class="in-icon icon">
            <p class="number">52k</p>
            <div class="stats-num">
                <img src="/images/icon-up.svg" alt="up arrow" class="arrow">
                <div class="num-div"style="color:var(--lime-green);">1375%</div>
            </div>
        </div>
    
    
    
    <div class="container-retweet container">
        <p class="text">Retweets</p>
        <img src="/images/icon-twitter.svg" alt="twitter icon" class="tw-icon icon">
        <p class="number">117</p>
        <div class="stats-num">
            <img src="/images/icon-up.svg" alt="up arrow" class="arrow">
            <div class="num-div"style="color:var(--lime-green);">303%</div>
        </div>
    </div>
    
    <div class="container-tw-likes container">
        <p class="text">Likes</p>
        <img src="/images/icon-twitter.svg" alt="twitter icon" class="tw-icon icon">
        <p class="number">507</p>
        <div class="stats-num">
            <img src="/images/icon-up.svg" alt="up arrow" class="arrow">
            <div class="num-div"style="color:var(--lime-green);">553%</div>
        </div>
    </div>
    
    <div class="container-yt-likes container">
        <p class="text">Likes</p>
        <img src="/images/icon-youtube.svg" alt="youtube icon" class="yt-icon icon">
        <p class="number">107</p>
        <div class="stats-num">
            <img src="/images/icon-down.svg" alt="down arrow" class="arrow">
            <div class="num-div" style="color:var(--bright-red);">19%</div>
        </div>
    </div>
    
    <div class="container-yt-views container">
        <p class="text">Views</p>
        <img src="/images/icon-youtube.svg" alt="youtube icon" class="yt-icon icon">
        <p class="number">1047</p>
        <div class="stats-num">
            <img src="/images/icon-down.svg" alt="down arrow" class="arrow">
            <div class="num-div" style="color:var(--bright-red);">12%</div>
            
        </div>
    </div>
</div>
</div>
