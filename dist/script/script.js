const scroll = new SmoothScroll('nav a[href*="#"]', {
	speed: 500
});

let btn = document.querySelector('i');
let sideMenu = document.querySelector(".nav-container-bar");
let btnclose = document.querySelector(".btn-close")




btn.addEventListener("click", ()=>{
	console.log("hello")
	sideMenu.style.marginLeft = "0px";
	btn.classList.toggle('active')
	
});

btnclose.addEventListener("click", ()=>{
	console.log("hello")
	sideMenu.style.marginLeft = "-1300px";
	// btn.classList.toggle('active')
});


sideMenu.addEventListener('click', ()=>{
	btn.classList.toggle('active');
	sideMenu.style.marginLeft="-1300px";
	
})
