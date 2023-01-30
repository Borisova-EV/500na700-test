import './vendor/swiper';
import IMask from './vendor/imask';
import { initSlider } from './modules/init-slider';
import { initAccordeon } from './modules/init-accordeon';
import { initMaskTelephone } from './modules/init-mask-telephone';
import { setPaddingFirstBlock } from './modules/set-padding-first-block';
import { setBackgroundSubmenu } from './modules/set-background-submenu';
import { initMobileSlider } from './modules/init-mobile-slider';
import { controlBurgerMenu } from './modules/conrol-burger-menu';

initSlider();
initAccordeon();
initMaskTelephone();
setPaddingFirstBlock();
setBackgroundSubmenu();
initMobileSlider();
controlBurgerMenu();
