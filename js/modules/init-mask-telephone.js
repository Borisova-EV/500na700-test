const initMaskTelephone = () => {
  const telephoneInput = document.querySelector('[data-mask]');

  if (!telephoneInput) {
    return
  }

  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  const mask = IMask(telephoneInput, maskOptions);
}

export {initMaskTelephone}

