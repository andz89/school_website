


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


//navigation page
let nav = document.querySelector('nav')
let newsPage = document.querySelector(".news-page")
let homePage = document.querySelector(".home-page")
let contactPage = document.querySelector(".contact-page")
let learningPage = document.querySelector(".learning-page")

nav.addEventListener('click', (e)=>{

pageDisplay(e.target)
hidenavigation(e.target)

})


//hide nav when click in menu
function hidenavigation(e){

    if(e.classList.contains("hide-nav")){
        console.log('active')
        sideMenu.classList.toggle('nav-active-open');
    }
}

//page display when click to menu
function pageDisplay(e){

    let allPageDisplay = document.querySelectorAll(".page-display")
  
	if(e.classList.contains("page")){

        //the li will have background when active
        let pages = document.querySelectorAll(".active-menu")
        pages.forEach((page)=>{
            page.parentElement.classList.remove("active")
            if(e.classList.contains("active-menu")){e.parentElement.classList.add("active")}
        })

      
        allPageDisplay.forEach((page)=>{
            page.classList.remove("active-display")
            if(e.classList.contains("home-page-nav")){homePage.classList.add("active-display")}
            if(e.classList.contains('news-page-nav')){newsPage.classList.add("active-display")}
            if(e.classList.contains("contact-page-nav")){contactPage.classList.add("active-display")}
            if(e.classList.contains("learning-page-nav")){learningPage.classList.add("active-display")}
        })
	}
  
}


