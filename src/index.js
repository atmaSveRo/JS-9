'use strict '

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import menuModule from './modules/menuModule';
import modalWindowModule from './modules/modalWindowModule';
import sendFormModule from './modules/sendFormModule';
import formRuErrorModule from './modules/formRuErrorModule';
// import arrowUpModule from './modules/arrowUpModule';
// import burgerMenuModule from './modules/burgerMenuModule';
// import calcModule from './modules/calcModule';
// import carouselModule from './modules/carouselModule';
// import sliderModule from './modules/sliderModule';
// import promoCodeModule from './modules/promoCodeModule';



//выпадающее меню

menuModule();

//модальные окна

modalWindowModule('free_visit_form', '.open-popup');
modalWindowModule('callback_form', '.btn.callback-btn');
modalWindowModule('gift', '.fixed-gift');

//Отправка форм в модальных окнах

sendFormModule('form1', 'callback_form');
sendFormModule('form2', 'free_visit_form');
sendFormModule('banner-form');
sendFormModule('card_order');
sendFormModule('footer_form');

//ввод кириллицы

formRuErrorModule();

// //слайдер

// slider();

// //карусель

// carousel();

// //калькулятор

// calc();

// //бургер меню

// burgerMenu();

// //появление стрелки

// arrowUp();

// //промокод

// promoCode();