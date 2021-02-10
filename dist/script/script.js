const scroll = new SmoothScroll('nav a[href*="#"]', {
	speed: 500
});

let btn = document.querySelector('.burger');
let sideMenu = document.querySelector(".nav-container-bar")
let btnclose = document.querySelector(".btn-close")
let li = document.querySelectorAll('li')

btn.addEventListener("click", ()=>{
	sideMenu.style.transform = "translateX(0%)";
});

btnclose.addEventListener("click", ()=>{
	sideMenu.style.transform = "translateX(100%)";
	
});

setTimeout(function () {
    location.reload();
}, 900000);






