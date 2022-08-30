let hidden= document.getElementById("footer-hidden");
/*hidden.style.display="none";*/
let share = document.getElementById("share-btn");

share.addEventListener("click", () => {

    if(hidden.style.display="none"){
        hidden.style.display="flex";
        share.classList.add("active-btn");
        hidden.classList.add("active-hidden")
    } 
    
})