<script>
    import Buttons from "./buttons.svelte";
</script>

<style>
  .top-container{
    width: 311px;
    margin: auto;
  }
    .copy-img{
        height:125px;
    }
    h1{
        margin-top:3rem;
    }
    p{
        height: 78px;
    }
    h2{
        margin-top: 7rem;
    }
    
    @media only screen and (min-width:1200px) {
      .top-container{
        width: 730px;
        margin: auto;
      }
      p{
        font-size: 1.25rem;
        line-height: 1.8rem;
        margin-bottom: 1rem;
      }
      h1{
        margin-top: 3.6rem;
        margin-bottom: 0.2rem;
      }
      #paragraph-two{
        font-size: 1.15rem;
      }
      h2{
        margin-top: 8.9rem;
      }
    }
</style>

<div class="top-container">
    
    <img src="images/logo.svg" alt="copyright logo in green colour" class="copy-img">
    <h1>A history of everything you copy</h1>
    <p>Clipboard allows you to track and organize everything you copy. 
        Instantly access your clipboard on all your devices.</p>
    <Buttons/>
    <h2>Keep track of your snippets </h2>
    <p id="paragraph-two">Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately 
    on all your devices. Our Mac and iOS apps will help you organize everything. </p>
    </div>