const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector("ul");
hamburger.addEventListener("click",()=>{
navlinks.classList.toggle("slide");
});
var typed = new Typed (".autotype",{
    strings: ["Web-Developer","Front-End Developer","Web-Designer","Software-Developer","Data-Scientist"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
    });