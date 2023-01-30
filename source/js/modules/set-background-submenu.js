const setBackgroundSubmenu = () => {
  const header = document.querySelector('.header');
  const navigationItems= header.querySelectorAll('.header__navigation-item');
  const headerHeight = header.clientHeight

  if(navigationItems.length === 0) {
    return
  }

  const showBackground = (el) => {
    const subMenu = el.querySelector('.header__sub-navigation');

    if (!subMenu) {
      return
    }

    header.style.height = header.clientHeight + subMenu.clientHeight + 'px';
  }

  const hideBackground = (el) => {
    header.style.height = 'auto'
  }

  navigationItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      showBackground(item);
    });

    item.addEventListener('mouseleave', () => {
      hideBackground(item);
    })
  })
}

export {setBackgroundSubmenu}
