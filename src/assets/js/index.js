import '../../index.html';
import '../scss/style.scss';
import './modules/mobileMenu';
import './modules/slider';
import './modules/rangeSlider';
import './modules/scrollReveal';
import megamenu from './modules/megamenu';
import catalogue from './modules/catalogue';
import cart from './modules/cart';
import singleProduct from './modules/singleProduct';
import search from './modules/search';
import * as bootstrap from 'bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.data('catalogue', catalogue);
Alpine.data('cart', cart);
Alpine.data('singleProduct', singleProduct);
Alpine.data('megamenu', megamenu);
Alpine.data('search', search);

Alpine.start();

document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.nav-item.dropdown');

  dropdown.addEventListener('mouseenter', function () {
    var dropdownMenu = this.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      clearTimeout(dropdownMenu.timeoutId);
      dropdownMenu.classList.add('show');
    }

    dropdown.addEventListener('mouseleave', function () {
      var dropdownMenu = this.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        clearTimeout(dropdownMenu.timeoutId);

        dropdownMenu.timeoutId = setTimeout(function () {
          dropdownMenu.classList.remove('show');
        }, 200);
      }
    });
  });
});
