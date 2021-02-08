const scroll = new SmoothScroll('nav a[href*="#"]', {
	speed: 500
});

let btn = document.querySelector('i');
let sideMenu = document.querySelector(".nav-container-bar")
let btnclose = document.querySelector(".btn-close")




btn.addEventListener("click", ()=>{
	console.log("hello")
	sideMenu.style.marginRight = "0px";
	
});

btnclose.addEventListener("click", ()=>{

	sideMenu.style.marginRight = "-250px";

});


sideMenu.addEventListener('click', ()=>{
	
	sideMenu.style.marginRight = "-250px";
	
})
