const scroll = new SmoothScroll('nav a[href*="#"]', {
	speed: 500
});

let btn = document.querySelector('.burger');
let sideMenu = document.querySelector(".nav-container-bar")
let btnclose = document.querySelector(".btn-close")

btn.addEventListener("click", ()=>{
	// sideMenu.classList.toggle('nav-active');
	console.log('print')
	sideMenu.style.transform = "translateX(0%)";
});



btnclose.addEventListener("click", ()=>{
	sideMenu.style.transform = "translateX(100%)";
	
});


// sideMenu.addEventListener('click', ()=>{
	
// 	// sideMenu.style.marginRight = "-250px";
	
// })
