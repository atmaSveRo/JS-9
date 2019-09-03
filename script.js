'use strict';

let book = document.querySelectorAll('.book'),
    books = document.querySelectorAll('.books'),
    bodyBgr = document.querySelector('body'),
    targetTitle = document.querySelectorAll('a'),
    title = document.querySelectorAll('ul'),
    ulTitle2 = title[0].querySelectorAll('li'),
    ulTitle5 = title[5].querySelectorAll('li'),
    newTitle = document.createElement('li'),
    ulTitle7 = title[2].appendChild(newTitle),
    ulTitle6 = title[2].querySelectorAll('li');
    newTitle.textContent = 'Глава 8: За пределами ES6';
    
 
    targetTitle[4].textContent = 'Книга 3. this и Прототипы Объектов';
    books[0].insertBefore(book[1], book[0]);
    books[0].insertBefore(book[4], book[3]);
    books[0].insertBefore(book[2], null);
    bodyBgr.setAttribute('style','background: url(./image/you-dont-know-js.jpg)');
    title[0].insertBefore(ulTitle2[6], ulTitle2[4]);
    title[0].insertBefore(ulTitle2[8], ulTitle2[4]);
    title[0].insertBefore(ulTitle2[2], ulTitle2[9]);
    title[0].insertBefore(ulTitle2[9], ulTitle2[2]);
    title[5].insertBefore(ulTitle5[4], ulTitle5[2]);
    title[5].insertBefore(ulTitle5[3], ulTitle5[4]);
    title[5].insertBefore(ulTitle5[9], ulTitle5[3]);
    title[5].insertBefore(ulTitle5[5], ulTitle5[8]);
    title[2].insertBefore(ulTitle6[10], ulTitle6[9]);
console.log(ulTitle6);

let add = document.querySelectorAll('.adv');
add[0].classList.remove('adv');

