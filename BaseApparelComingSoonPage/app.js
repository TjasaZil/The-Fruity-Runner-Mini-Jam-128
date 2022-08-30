let btn = document.getElementById("mail-btn");
let errorTxt = document.getElementById("error-text");
let mail = document.getElementById("email");
let color =	"hsl(0, 93%, 68%)";


errorTxt.style.display="none";
mail.style.backgroundImage="none";



btn.addEventListener("click", ()=>{
    validateMail();
})

function validateMail(){
    if(mail.value.length == 0){
        validateComponents();
    }
    let valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.value.match(valid)){
        return true;
    }else{
        validateComponents();
    }
}
 function validateComponents(){
    errorTxt.style.display="flex";
    mail.style.borderColor = color;
    mail.style.backgroundImage="url(images/icon-error.svg)";
    mail.style.borderWidth="2px";
 }