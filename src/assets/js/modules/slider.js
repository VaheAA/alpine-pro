import Swiper from 'swiper';
import { Navigation, Mousewheel, Thumbs } from 'swiper/modules';
import 'swiper/css/bundle';

Swiper.use([Navigation, Mousewheel, Thumbs]);

const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 24,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 'auto',
      mousewheel: false,
      direction: 'horizontal',
    },
    768: {
      direction: 'vertical',
    },
  },
});

new Swiper('.slider__images .swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 32,
  slideThumbActiveClass: 'active-slide',
  mousewheel: true,
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
  grabCursor: true,
  thumbs: {
    swiper: sliderThumbs,
    autoScrollOffset: 1,
  },
  breakpoints: {
    0: {
      slidesPerView: 'auto',
      mousewheel: false,
      direction: 'horizontal',
    },
    768: {
      direction: 'vertical',
    },
  },
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
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
