let btn = document.getElementById("claim-btn");

let firstName = document.getElementById("first-name");
let secondName = document.getElementById("last-name");
let mail = document.getElementById("email");
let password = document.getElementById("password");

let noFirstName = document.getElementById("no-name");
let noSecondName = document.getElementById("no-second-name");
let noMail = document.getElementById("no-mail");
let noPass = document.getElementById("no-password");



noFirstName.style.display="none";
noSecondName.style.display="none";
noMail.style.display="none";
noPass.style.display="none";


btn.addEventListener("click", function(){
    emptyPass();
    emptyFirst();
    emptySecond();
    emptyMail();
    validMail();
});

function emptyFirst(){
    
        if(firstName.value.length == 0){
            noFirstName.style.display="flex";
            firstName.classList.add("no");
            firstName.style.backgroundSize = "25px"
        }
        
}
function emptySecond(){
    if(secondName.value.length == 0){
        noSecondName.style.display="flex";
        secondName.classList.add("no");
        secondName.style.backgroundSize = "25px"
    }
}
function emptyMail(){
    if(mail.value.length == 0){
        noMail.style.display="flex";
        mail.classList.add("no");
        mail.style.backgroundSize = "25px"
    }
}
function emptyPass(){
    if(password.value.length == 0){
        noPass.style.display="flex";
        password.classList.add("no");
        password.style.backgroundSize = "25px"
    }
}

function validMail(){
    let valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.value.match(valid)){
        return true;
    }else{
        noMail.style.display="flex";
        mail.classList.add("no");
        mail.style.backgroundSize = "25px"
    }
}

/*
const btn = document.getElementById("claim-btn");
const inputs = document.getElementsByTagName("input");
const errors = document. getElementsByClassName("error");


btn.addEventListener("click", function(){
    validate();
});

 for(const error of errors){
    error.style.display="none"
};

not working

function validate(){
    for (let i = 0; i< input.length; i++){
        

        
        if(input.value==0){


               this.classList.add('no');
                errors[i].style.display="flex";
                errors[i].style.backgroundSize = "25px"

        }else{
            this.classList.remove('no');
                errors[i].style.display="none";
                errors[i].style.backgroundSize = "0"
        }
    
    }
}*/


