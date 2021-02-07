const scroll = new SmoothScroll('nav a[href*="#"]', {
	speed: 500
});

let btn = document.querySelector('i');
let sideMenu = document.querySelector(".nav-container-bar")
let btnclose = document.querySelector(".btn-close")




btn.addEventListener("click", ()=>{
	console.log("hello")
	sideMenu.style.width = "300px";
	
});

btnclose.addEventListener("click", ()=>{

	sideMenu.style.width = "0";

});


sideMenu.addEventListener('click', ()=>{
	
	sideMenu.style.width = "0";
	
})
