
//for smooth scroll
// const scroll = new SmoothScroll('nav a[href*="#"]', {
// 	speed: 500
// });
setTimeout(function () {
    location.reload();
}, 900000);








//about bvmces- to show hidden paragraph
let btnAbout = document.querySelector('#read-btn-about')
let about = document.querySelector("#about-div")
let hide = document.querySelector(".hide-about-paragraph")
let sliderimg = document.querySelector(".slider")
btnAbout.addEventListener('click', ()=>{
	about.classList.add('about-active')
	hide.classList.add('show')
	btnAbout.style.display ="none"
	sliderimg.classList.add('slider-active')
})


//image slider

var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
	next("next");
}
prevSlide.onclick=function () {
	next("prev");
}

function next(direction){

  if(direction=="next"){
	 index++;
	  if(index==totalSlides){
	   index=0;
	  }
  } 
  else{
		  if(index==0){
		   index=totalSlides-1;
		  }
		  else{
		   index--;
		  }
   }

 for(i=0;i<slides.length;i++){
		 slides[i].classList.remove("active");
 }
 slides[index].classList.add("active");     

}















