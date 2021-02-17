

setTimeout(function () {
    location.reload();
}, 900000);


//about bvmces- to show hidden paragraph
let btnAbout = document.querySelector('#read-btn-about')
let aboutExpand = document.querySelector("#about-div")
let hidePara = document.querySelector(".hide-about-paragraph")
btnAbout.addEventListener('click', ()=>{
	aboutExpand.classList.toggle('about-active')
	hidePara.classList.toggle('show')
	btnAbout.innerHTML ="Show less"
})
















