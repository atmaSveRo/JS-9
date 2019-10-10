'use strict '

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import menuModule from './modules/menuModule';
import modalWindowModule from './modules/modalWindowModule';
import sendModalFormModule from './modules/sendModalFormModule';
import formRuErrorModule from './modules/formRuErrorModule';
import burgerMenuModule from './modules/burgerMenuModule';
import arrowUpModule from './modules/arrowUpModule';
import fixMenuModule from './modules/fixMenuModule';
import calcModule from './modules/calcModule';
// import carouselModule from './modules/carouselModule';
// import sliderModule from './modules/sliderModule';




//выпадающее меню

menuModule();

//модальные окна

modalWindowModule('free_visit_form', '.open-popup');
modalWindowModule('callback_form', '.btn.callback-btn');
modalWindowModule('gift', '.fixed-gift');

//Отправка форм в модальных окнах

sendModalFormModule('form1', 'callback_form');
sendModalFormModule('form2', 'free_visit_form');
// sendFormModule('banner-form');
// sendFormModule('card_order');
// sendFormModule('footer_form');

//ввод кириллицы

formRuErrorModule();

burgerMenuModule();

//появление стрелки

arrowUpModule();

//fix menu

fixMenuModule();

//калькулятор

calcModule();

// //слайдер

// slider();

// //карусель

// carousel();


