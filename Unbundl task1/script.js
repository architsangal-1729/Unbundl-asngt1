const carousel = document.querySelector('.product-list');
const products = document.querySelectorAll('.product-item');
const numProducts = products.length;
let currentIndex = 0;

function rotateCarousel() {
  currentIndex = (currentIndex + 1) % 3;
  updateCarousel();
}

function updateCarousel() {
  const translateValue = -currentIndex * 100 + '%';
  carousel.style.transform = `translateX(${translateValue})`;
}

// Set interval for automatic rotation (adjust the duration as needed)
let intervalId = setInterval(rotateCarousel, 5000);

// Optional: Add event listeners for manual navigation
document.querySelector('.prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + numProducts) % numProducts;
  updateCarousel();
});

document.querySelector('.next-btn').addEventListener('click', () => {
  rotateCarousel();
});

// Clear interval on hover to prevent abrupt changes during manual navigation
carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
carousel.addEventListener('mouseleave', () => {
  intervalId = setInterval(rotateCarousel, 5000);
});
