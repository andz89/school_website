const scroll = new SmoothScroll('nav a[href*="#"]', {
	speed: 500
});

let btn = document.querySelector('#btn');
let sideMenu = document.querySelector('ul');
let btnclose = document.querySelector(".btn-close")
let li = document.querySelectorAll("li")



btn.addEventListener("click", ()=>{
	console.log("hello")
	btn.classList.toggle('active');
	sideMenu.classList.toggle('show');
	
});



sideMenu.addEventListener('click', ()=>{
	btn.classList.toggle('active');
	sideMenu.classList.toggle('show');
	
})
