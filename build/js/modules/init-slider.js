const initSlider = () => {
  const slider = document.querySelector('[data-slider]');
  console.log(slider);

  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true
  });

}

export {initSlider}
