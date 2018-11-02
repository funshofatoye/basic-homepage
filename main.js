// connect-nigeria javascript

var btn = document.getElementById('menu');
var x = window.matchMedia("(max-width: 768px)");

btn.addEventListener("click", toggleNav);

// Function to toggle navigation on mobile screens/////////////////////////////////////////////////////
function toggleNav(){
     var collapsible = document.getElementById("mobile-nav-collapsible");
     var icon = document.getElementById("toggle-nav-icon");

     //Get the style property of collapsible
     var display = window.getComputedStyle(collapsible, null).getPropertyValue("display");

     if (x.matches) {
        if (display == "none") {
            collapsible.style.display = "block";
            icon.className = "fas fa-times";
        } else {
            collapsible.style.display = "none";
            icon.className = "fas fa-bars";
        }
     } 
    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Carousel for business ads ///////////////////////////////////////////////////////////////////////

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-item");
    //var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";
    //dots[slideIndex-1].className += " active";
  }







