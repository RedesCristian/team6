document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.carousel-img');
  let currentImageIndex = 0;
  const totalImages = images.length;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
  }

  setInterval(nextImage, 4000);

  showImage(currentImageIndex); 
});
