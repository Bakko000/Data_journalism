let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}