'use strict';

let button = document.getElementById('start'),
    Plus_1 = document.getElementsByTagName('button')[0],
    Plus_2 = document.getElementsByTagName('button')[1],
    check = document.querySelector('#deposit-check'),
    addIncome = document.querySelectorAll('.additional_income-item'),
    results = document.querySelectorAll('.result-total'),
    incomeTitle_1 = document.querySelector('input.income-title'),
    incomeTitle_2 = document.querySelector('.income-amount'),
    salaryAmmount = document.querySelector('.salary-amount'),
    addItem1 = document.querySelector('.additional_income-item'),
    addItem2 = document.querySelector('.additional_income-item:last-child'),
    expTitle = document.querySelector('input.expenses-title'),    
    expAmount = document.querySelector('.expenses-amount'),
    addExpTitle = document.querySelector('.additional_expenses-item'),
    depAmount = document.querySelector('.target-amount'),
    perSelect = document.querySelector('.period-select');
     
console.log(button);
console.log('Plus_1: ', Plus_1);
console.log('Plus_2: ', Plus_2);
console.log('check: ', check);
console.log('addIncome: ', addIncome);
console.log('result: ', results[1]);
console.log('result: ', results[2]);
console.log('result: ', results[3]);
console.log('result: ', results[4]);
console.log('result: ', results[5]);
console.log('result: ', results[6]);
console.log('salaryAmmount: ', salaryAmmount);
console.log('incomeTitle: ', incomeTitle_1);
console.log('incomeTitle: ', incomeTitle_2);
console.log('addItem: ', addItem1);
console.log('addItem: ', addItem2);
console.log('expTitle: ', expTitle);
console.log('expAmount: ', expAmount);
console.log('addExpTitle: ', addExpTitle);
console.log('depAmount: ', depAmount);
console.log('perSelect: ', perSelect);