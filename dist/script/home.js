
//for smooth scroll
// const scroll = new SmoothScroll('nav a[href*="#"]', {
// 	speed: 500
// });


setTimeout(function () {
    location.reload();
}, 900000);

//navigation bar
let btn = document.querySelector('.burger');
let sideMenu = document.querySelector(".nav-container-bar")
let btnclose = document.querySelector(".btn-close")

btn.addEventListener("click", ()=>{
	sideMenu.style.transform = "translateX(0%)";
});

btnclose.addEventListener("click", ()=>{
	sideMenu.style.transform = "translateX(100%)";
	
});



//about bvmces- to show hidden paragraph
let btnAbout = document.querySelector('#read-btn-about')
let about = document.querySelector("#about-div")
let hide = document.querySelector(".hide-about-paragraph")

btnAbout.addEventListener('click', ()=>{
	about.classList.add('about-active')
	hide.classList.add('show')
	btnAbout.style.display ="none"
})






