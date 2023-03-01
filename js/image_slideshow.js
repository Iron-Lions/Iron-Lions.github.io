document.addEventListener("DOMContentLoaded", function() {
  var slideIndex = 0;
  var slides = document.getElementsByClassName("slide");
  var prev = document.getElementsByClassName("prev")[0];
  var next = document.getElementsByClassName("next")[0];

  function showSlides() {
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  var slideInterval = setInterval(showSlides, 3000);

  prev.addEventListener("click", function() {
    slideIndex -= 2;
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    showSlides();
  });

  next.addEventListener("click", function() {
    showSlides();
  });

  document.addEventListener("keydown", function(event) {
    if (event.code == "ArrowLeft") {
      slideIndex -= 2;
      if (slideIndex < 0) { slideIndex = slides.length - 1 }
      showSlides();
    } else if (event.code == "ArrowRight") {
      showSlides();
    }
  });
});