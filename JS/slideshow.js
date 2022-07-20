let slideIndex = 1;
let flag = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n){
  slideIndex+=n;
  flag = 1;
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex)
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("perSlide");
  var dots = document.getElementsByClassName("dot");
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  if(flag == 0){
    slideIndex++;
  }
  else{
    flag = 0;
  }
  if(slideIndex > slides.length){
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

setInterval(()=> {
  showSlides(slideIndex);
},5000);