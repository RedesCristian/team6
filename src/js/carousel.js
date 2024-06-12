

document.addEventListener('DOMContentLoaded', function () {
  const mobileImages = document.querySelectorAll('.mobile-carousel-img');
  let currentMobileImageIndex = 0;
  const totalMobileImages = mobileImages.length;


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

});
