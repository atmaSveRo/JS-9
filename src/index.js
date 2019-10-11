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
import fixMenuModule from './modules/fixMenuModule';
import arrowUpModule from './modules/arrowUpModule';
import sendFormModule from './modules/sendFormModule';
import sliderModule from './modules/sliderModule';
import calcModule from './modules/calcModule';
import sliderWithDotsModule from './modules/sliderWithDotsModule';





//выпадающее меню

menuModule();

//модальные окна

modalWindowModule('free_visit_form', '.open-popup');
modalWindowModule('callback_form', '.btn.callback-btn');
modalWindowModule('gift', '.fixed-gift');

//Отправка форм в модальных окнах

sendModalFormModule('form1', 'callback_form');
sendModalFormModule('form2', 'free_visit_form');

//ввод кириллицы

formRuErrorModule();

//burgerMenu

burgerMenuModule();

//fix menu

fixMenuModule();

//появление стрелки

arrowUpModule();

//sendForm

sendFormModule('banner-form');
sendFormModule('card_order');
sendFormModule('footer_form');

//слайдер

sliderModule(".main-slider", 1);
sliderModule(".services-slider", 5);
// 
//калькулятор

calcModule();

//sliderWithDotsModule

sliderWithDotsModule(".gallery-slider", 1);


