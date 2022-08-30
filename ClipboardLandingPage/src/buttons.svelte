<style>
    button{
        border:none;
        height:56px;
        width:311px;
        border-radius: 30px;
        color: white;
        font-family: var(--font-family);
        font-size: 1.1rem;
        letter-spacing: 1px;
        font-weight: var(--bold);
        margin:0.6rem auto;
    }
    button:hover{
        cursor:pointer;
        transform: scale(0.95);
        transition: 0.7s;
        background-position: right;
    }
    .ios-btn{
        background: linear-gradient(to right, var(--strong-cyan) 50%, var(--cyan) 50%) left;
        background-size: 200% 100%;
        border-bottom:3px solid var(--cyan);
    }
    .mac-btn{
        background: linear-gradient(to right, var(--light-blue) 50%, var(--blue) 50%) left;
        background-size: 200% 100%;
        border-bottom:3px solid var(--blue);
    }
    .buttons{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
    }
    @media only screen and (min-width:1200px) {
        .buttons{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width:470px;
    }
    button{
        width: 227px;
    }
    }
</style>

<div class="buttons">
    <button class="ios-btn">Download for iOS</button>
    <button class="mac-btn">Download for Mac</button>
</div>