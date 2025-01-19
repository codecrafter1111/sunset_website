const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});



                // ADDING EVENTS
function imageAnimation(){

let elem = document.querySelector("#elem_container")
let fixed = document.querySelector("#fixed_container")

elem.addEventListener("mouseenter",()=>{
    fixed.style.display = "block"
})
elem.addEventListener("mouseleave",()=>{
    fixed.style.display = "none"
})

// logic of showing the image when the cursor hover on the elem_contianer
let elem1 = document.querySelectorAll(".elem")
elem1.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        let image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

}
imageAnimation();


//SWIPER JS
function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}
swiper();



//FULL SCR
function fullsrc(){
let fullsrc = document.querySelector("#full_scr");
let menu = document.querySelector("#menu");
let navlogo = document.querySelector("#nav_logo");
let i = 0
menu.addEventListener("click", ()=>{
    if (i == 0){
        fullsrc.style.top = 0
        navlogo.style.opacity = 0
        i = 1
    }else{
        fullsrc.style.top = "-100%"
        navlogo.style.opacity = 1
        i = 0
    }
})
}
fullsrc();


// LoaderAnimation
function LoaderAnimation(){
    let loader = document.querySelector("#loader")
setTimeout(function(){
     loader.style.top ="-100%"
},3800)
}
LoaderAnimation();