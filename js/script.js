// SWIPER

const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/* work-tabs */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs-nav__btn').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__item').forEach(function (e) {
        e.classList.remove('tabs__item--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('tabs__item--active');
      })
    })
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs-nav__btn').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__item').forEach(function (e) {
        e.classList.remove('tabs__item--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('tabs__item--active');
      })
    })

e.addEventListener('click', function (e) {
  const tabDefault = e.currentTarget.dataset.default;
  document.querySelectorAll('.work__link').forEach(function (e) {
    e.classList.remove('work__link--default')
    document.querySelector(`[data-path='${tabDefault}']`).classList.add('work__link--default');
  });
});
})
});

/* accordion */
new Accordion('.accordion-container');

/* burger*/

let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__nav');
let navLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
burger.classList.toggle('burger--active');

nav.classList.toggle('header__nav--active');

document.body.classList.toggle('stop-scroll');
})

navLinks.forEach(function (el) {
el.addEventListener('click', function () {
  burger.classList.remove('burger--active');

  nav.classList.remove('header__nav--active');

  document.body.classList.remove('stop-scroll');
})
})

/* search */

let btn = document.querySelector('.header__button');
let search = document.querySelector('.header__search');
let searchClosed = document.querySelector('.header__closed');

btn.addEventListener('click', function () {
search.classList.add('header__search--active');

btn.classList.add('header__button--active');

document.body.classList.toggle('stop-scroll');
})

searchClosed.addEventListener('click', function () {
search.classList.remove('header__search--active');

btn.classList.remove('header__button--active');

document.body.classList.remove('stop-scroll');
})

