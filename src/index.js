'use strict '

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import menu from './modules/menu';
// import arrowUp from './modules/arrowUp';
// import burgerMenu from './modules/burgerMenu';
// import calc from './modules/calc';
// import carousel from './modules/carousel';
// import gift from './modules/gift';
// import slider from './modules/slider';
// import modalWindow from './modules/modalWindow';
// import promoCode from './modules/promoCode';
// import sendForm from './modules/sendForm';


//выпадающее меню

menu();

// //модальные окна

// modalWindow();

// //Отправка форм в модальных окнах

// sendForm();

// //подарок

// gift();

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