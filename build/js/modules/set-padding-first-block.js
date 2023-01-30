const setPaddingFirstBlock = () => {
  const firstBlock = document.querySelector('[data-first-block]');
  const header = document.querySelector('.header');

  if (!firstBlock) {
    return;
  }

  firstBlock.style.marginTop = header.clientHeight + 'px';

  window.addEventListener('resize', () => {
    firstBlock.style.marginTop = header.clientHeight + 'px';
  });
};

export {setPaddingFirstBlock};
