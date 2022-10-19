const toggleMenu = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.nav__list');

mobileMenu.classList.add('nav__list--close');
toggleMenu.classList.remove('menu-toggle--nojs')

function openMobMenu() {
  if(mobileMenu.classList.toggle('nav__list--close')) {
    toggleMenu.classList.remove('open')
    mobileMenu.classList.remove('nav__list--open')
  }else {
    toggleMenu.classList.add('open')
    mobileMenu.classList.add('nav__list--open')
  }
}

toggleMenu.addEventListener('click', openMobMenu);
