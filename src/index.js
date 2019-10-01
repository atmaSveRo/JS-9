'use strict '

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import commandChangePhoto from './modules/commandChangePhoto';
import calcError from './modules/calcError';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import formNumError from './modules/formNumError';
import formRuError from './modules/formRuError';
 
// Timer

countTimer('02 october 2019');

// меню

toggleMenu();

// popup

togglePopup();

//tabs

tabs();

//slider

slider();

//our command

commandChangePhoto();

//calc

calcError();

//калькулятор

calc(100);

//send-ajax-form

sendForm('form1');
sendForm('form2');
sendForm('form3');

//запрет ввода букв в форме

formNumError();

//ввод кириллицы

formRuError();