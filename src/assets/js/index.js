import '../../index.html';
import '../scss/style.scss';
import './modules/mobileMenu';
import './modules/slider';
import './modules/rangeSlider';
import catalogue from './modules/catalogue';
import cart from './modules/cart';
import * as bootstrap from 'bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.data('catalogue', catalogue);
Alpine.data('cart', cart);

Alpine.start();
