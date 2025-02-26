// Carousel Functionality
const carouselTrack = document.querySelector(".carousel-track");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let currentIndex = 0;
const totalItems = carouselItems.length;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselTrack.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1;
  }
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

// Auto-play Carousel (Optional)
setInterval(() => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}, 5000);