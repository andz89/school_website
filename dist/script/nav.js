


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


//navigation page

let newsPage = document.querySelector(".news-page")
let homePage = document.querySelector(".home-page")
let contactPage = document.querySelector(".contact-page")
let learningPage = document.querySelector(".learning-page")
let nav = document.querySelector('nav')

nav.addEventListener('click', (e)=>{

pageDisplay(e.target)

})

function pageDisplay(e){

    let allPageDisplay = document.querySelectorAll(".page-display")

	if(e.classList.contains("news-page-nav")){
       
        allPageDisplay.forEach((page)=>{
            page.style.display = 'none'
            newsPage.style.display="block"
        })
	}

    if(e.classList.contains("home-page-nav")){
        allPageDisplay.forEach((page)=>{
            page.style.display = 'none'
            homePage.style.display="block"
        })
	}

    if(e.classList.contains("contact-page-nav")){
        allPageDisplay.forEach((page)=>{
            page.style.display = 'none'
            contactPage.style.display="block"
        })
	}

    if(e.classList.contains("learning-page-nav")){
        allPageDisplay.forEach((page)=>{
            page.style.display = 'none'
            learningPage.style.display="block"
        })
	}
}


