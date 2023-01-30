const initSlider = () => {
  const slider = document.querySelector('[data-slider]');

  if (!slider) {
    return
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    initialSlide: 2,

    navigation: {
      nextEl: slider.querySelector('[data-slider-next]'),
      prevEl: slider.querySelector('[data-slider-prev]'),
    }
  });

}

export {initSlider}
