const formSection = document.querySelector('.order');
const buttonOrder = document.querySelector('.nav__link-button-order');
const buttonOrderPromo = document.querySelector('.promo__button--order')

buttonOrder.addEventListener('submit', function(evt) {
  evt.preventDefault();
});

function handleButtonclick() {
  formSection.scrollIntoView({
    block: 'start', inline: "nearest", behavior: "smooth"
  });
};

buttonOrder.addEventListener('click', handleButtonclick);

function handleButtonclick() {
  formSection.scrollIntoView({
    block: 'start', inline: "nearest", behavior: "smooth"
  });
};

buttonOrderPromo.addEventListener('click', handleButtonclick);
