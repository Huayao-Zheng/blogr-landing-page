const hamOrX = document.querySelector('.header__hamburger-or-close');

hamOrX.addEventListener('click', () => {
  if (hamOrX.alt === 'hamburger') {
    hamOrX.src = '/images/icon-close.svg';
    hamOrX.alt = 'close';
  } else {
    hamOrX.src = '/images/icon-hamburger.svg';
    hamOrX.alt = 'hamburger';
  }
});
