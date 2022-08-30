<script>
    import { HtmlTag } from "svelte/internal";
    
    function toggle() {
        
          window.document.body.classList.toggle('dark-mode');    
        
    }
    
    </script>
    <style>
        hr{
        max-width: 750px;
        width:80vw;
        height: 2px;
        background-color: var(--secondary);
        border: none;
    }
    h1, h2{
        margin-left: 10vw;
    }
    h1{
        color: var(--primary);
        font-size: 1.3rem;
        margin-top: 2rem;
    }
    h2{
        color: var(--secondary);
        font-size: 0.95rem;
    }
    
    
      /*------this is a switch------*/
         .switch {
      position: relative;
      display: inline-block;
      width: 48px;
      height: 24px;
      
    }
    .switch:hover{
      cursor: pointer;
    }
    
    /* Hide default HTML checkbox */
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--toggle-light);
      -webkit-transition: .4s;
      transition: .4s;
    }
    .slider:before {
      position: absolute;
      content: "";
      height: 17px;
      width: 17px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    input:checked + .slider {
      background: linear-gradient( hsl(210, 78%, 56%), hsl(146, 68%, 55%));
      background-color:transparent;
    }
    
    
    input:checked + .slider:before {
      -webkit-transform: translateX(22px);
      -ms-transform: translateX(22px);
      transform: translateX(22px);
    }
    
    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }
    
    .slider.round:before {
      border-radius: 50%;
    }
    
    .container{
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      align-items: center;
      width: 80vw;
      max-width: 750px;
      margin: auto;
      column-gap: 40vw;
      z-index: 787;
      
    }
    #p{
      color: var(--secondary);
      font-size: 0.9rem;
      font-weight: var(--bold);
    }
    @media only screen and (min-width: 800px) {
        hr{
            width: 80vw;
            max-width: 1000px;
        }
        .topy{
            width: 100vw;
        }
    }
    @media only screen and (min-width: 1400px) {
        hr{
            opacity: 0;
        }
        .header{
            display: grid;
            grid-template-columns: 830px auto;
            grid-template-rows: auto;
            width:1150px;
            margin: auto;
            
        }
        .container{
            grid-row:1/2;
            grid-column: 2/3;
            column-gap: 0rem;
            width: 170px;
     /* max-width: 750px;*/
     margin-right: 1rem;
           
        }
        .topy{
            width: 100vw;
        }
        h1, h2{
          margin-left: 2rem;
        }
        h1{
          font-size: 1.7rem;
          margin-bottom: -0.7rem;
        }
        
       
    }
    
    </style>
    
        <div class="topy">
            <div class="header">
                <div class="container-text">
                    <h1>Social Media Dashboard</h1>
                <h2>Total Followers: 23,004</h2>
                </div>
                <hr>
                <div class="container">
                  <div id="p">Dark Mode</div>
                <label class="switch">
                    <input on:click={toggle} id="switch-theme" type="checkbox">
                    <span  class="slider round"></span>
                  </label>
                </div>
            </div>
        </div>
   

    
    