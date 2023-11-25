import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
Swiper.use([Navigation]);

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.slider-btn--next',
    prevEl: '.slider-btn--prev',
  },
});
