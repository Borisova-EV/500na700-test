const initAccordeon = () => {
  const accordeonContainer = document.querySelector('[data-accordeon-parent]');

  if (!accordeonContainer) {
    return
  }

  const accordeonItems = accordeonContainer.querySelectorAll('[data-accordeon-item]');
  accordeonItems.forEach(item => {
    item.classList.remove('open');
    item.addEventListener('click', (evt) => {
      evt.currentTarget.classList.toggle('open');
      accordeonItems.forEach(item => {
        if (item !== evt.currentTarget) {
          item.classList.remove('open');
        }
      })
    })
  })
}

export { initAccordeon }
