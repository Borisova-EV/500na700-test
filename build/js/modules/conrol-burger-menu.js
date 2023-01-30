const controlBurgerMenu = () => {
  const header = document.querySelector('.header');
  const openButton = header.querySelector('.header__button--open');
  const closeButton = header.querySelector('.header__button--close');

  openButton.addEventListener('click', ()=> {
    header.classList.add('open-menu');
    document.body.classList.add('no-scroll');
  });
  closeButton.addEventListener('click', () => {
    header.classList.remove('open-menu');
    document.body.classList.remove('no-scroll');
  });
}

export {controlBurgerMenu}
