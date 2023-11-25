import '../../index.html';
import '../scss/style.scss';
import './modules/mobileMenu';
import './modules/slider';
import './modules/rangeSlider';
import catalogue from './modules/catalogue';
import * as bootstrap from 'bootstrap';

import Alpine from 'alpinejs';

Alpine.data('catalogue', catalogue);

window.Alpine = Alpine;

Alpine.start();
