let monday = document.getElementById("monday");
let mondayHover = document.querySelector(".monday");

let tuesday = document.getElementById("tuesday");
let tuesdayHover = document.querySelector(".tuesday");

let wednesday = document.getElementById("wednesday");
let wednesdayHover = document.querySelector(".wednesday");

let thursday = document.getElementById("thursday");
let thursdayHover = document.querySelector(".thursday");

let friday = document.getElementById("friday");
let fridayHover = document.querySelector(".friday");

let saturday = document.getElementById("saturday");
let saturdayHover = document.querySelector(".saturday");

let sunday = document.getElementById("sunday");
let sundayHover = document.querySelector(".sunday");

monday.style.display="none";
tuesday.style.display="none";
wednesday.style.display="none";
thursday.style.display="none";
friday.style.display="none";
saturday.style.display="none";
sunday.style.display="none";


function clickListener(day){
    if(day.style.display==="none"){
        day.style.display="flex";
    }else{
        day.style.display="none"
    }
}
    

mondayHover.addEventListener("click",()=>{
    clickListener(monday)
});
tuesdayHover.addEventListener("click",()=>{
    clickListener(tuesday)
});
wednesdayHover.addEventListener("click",()=>{
    clickListener(wednesday)
});
thursdayHover.addEventListener("click",()=>{
    clickListener(thursday)
});
fridayHover.addEventListener("click",()=>{
    clickListener(friday)
});
saturdayHover.addEventListener("click",()=>{
    clickListener(saturday)
});
sundayHover.addEventListener("click",()=>{
    clickListener(sunday)
});

