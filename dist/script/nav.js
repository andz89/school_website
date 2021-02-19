


//navigation bar
let btn = document.querySelector('.burger');
let sideMenu = document.querySelector(".nav-container-bar")
let btnclose = document.querySelector(".btn-close")

btn.addEventListener("click", ()=>{
	sideMenu.classList.toggle('nav-active-open');
    
});

btnclose.addEventListener("click", ()=>{
	sideMenu.classList.toggle('nav-active-open');
});








