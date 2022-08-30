    let share = document.getElementById("share-icon");
    let back = document.getElementById("shr-icon");
    let darkShare = document.getElementById("share-container");
    
    darkShare.style.display="none";

    share.addEventListener("click", function(){

        if(darkShare.style.display==="none"){
            darkShare.style.display="flex";
        }else{
            darkShare.style.display="none"
        }
            });
        
    back.addEventListener("click", function(){
        darkShare.style.display="none";
        });




