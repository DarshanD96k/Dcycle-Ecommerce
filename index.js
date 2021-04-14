const hamberger=document.querySelector(".hamberger");
const navlinks=document.querySelector(".nav-links");
const links =document.querySelector(".nav-links li");

hamberger.addEventListener("click", () =>{
    navlinks.classList.toggle("open");
});