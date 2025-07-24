let slideIndex = 1;
showNatureSlides(slideIndex);

function plusSlides(n) {
    showNatureSlides(slideIndex += n);
}

function currentSlide(n) {
    showNatureSlides(slideIndex = n);
}

function showNatureSlides(n) {
    let i;
    let slides = document.getElementsByClassName("nature-slide");
    let dots = document.getElementsByClassName("dot-nature");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide");
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }

    slides[slideIndex - 1].classList.add("active-slide");
    dots[slideIndex - 1].classList.add("active-dot");
}
