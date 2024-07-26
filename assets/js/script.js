let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
    });
}

function moveSlide(n) {
    let slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

function autoScroll() {
    moveSlide(1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    setInterval(autoScroll, 2000); // Change slide every 1 second
});




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true, // Enable looping mode
    autoplay: {
      delay: 2000, // Autoplay delay in milliseconds
      disableOnInteraction: false, // Enable/disable autoplay on user interaction
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // Responsive breakpoints
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });