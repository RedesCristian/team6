<<<<<<< Updated upstream
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.carousel-img');
  let currentImageIndex = 0;
  const totalImages = images.length;
=======
document.addEventListener('DOMContentLoaded', function () {
  const mobileImages = document.querySelectorAll('.mobile-carousel-img');
  let currentMobileImageIndex = 0;
  const totalMobileImages = mobileImages.length;
>>>>>>> Stashed changes

  function showMobileImage(index) {
    mobileImages.forEach((img, i) => {
      const shouldBeActive = i === index;
      if (shouldBeActive) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });
  }

  function nextMobileImage() {
    currentMobileImageIndex = (currentMobileImageIndex + 1) % totalMobileImages;
    showMobileImage(currentMobileImageIndex);
  }

  setInterval(nextMobileImage, 4000); 
  showMobileImage(currentMobileImageIndex); 

<<<<<<< Updated upstream
  showImage(currentImageIndex); 
=======
>>>>>>> Stashed changes
});
