const initMobileSlider = () => {
  const mobileSliderContainer = document.querySelector('[data-mobile-slider]');
  const breakpoint = window.matchMedia('(max-width:767px)');
  let mobileSlider

  if(!mobileSliderContainer) {
    return
  }

  const initSwiper = () => {
    mobileSlider = new Swiper(mobileSliderContainer, {
      slidesPerView: 'auto',
      spaceBetween: 15,
    })
  }

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      initSwiper();
    } else if ( mobileSlider) {
      mobileSlider.destroy(true, true);
    }
  }

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

export {initMobileSlider}
