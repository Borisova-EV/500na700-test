const setBackgroundSubmenu = () => {
  const header = document.querySelector('.header');
  const navigationItems= header.querySelectorAll('.header__navigation-item');
  const breakpoint = window.matchMedia('(min-width:768px)');

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

  const hideBackground = () => {
    header.style.height = 'auto'
  }

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      navigationItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          showBackground(item);
        });

        item.addEventListener('mouseleave', () => {
          hideBackground();
        })
      })
    } else  {
      hideBackground();
    }
  }

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

export {setBackgroundSubmenu}
