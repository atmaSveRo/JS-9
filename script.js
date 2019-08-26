'use strict';

let money = prompt('Укажите ваш месячный доход');
let income = ('фриланс', 'такси', 'биржа')
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expens1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let cost1 = prompt('Во сколько это обойдется?');
let expens2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let cost2 = prompt('Во сколько это обойдется?');
let budgetMonth = (money-cost1-cost2);
let mission = 100000000000;
let period = Math.ceil((mission/budgetMonth)+'');
let budgetDay = Math.floor(budgetMonth/30);

console.log(money);
console.log(addExpenses.split(', '));
console.log(deposit);
console.log(typeof income, typeof money, typeof deposit);
console.log('expens1: ', expens1);
console.log('cost1: ', cost1);
console.log('expens2: ', expens2);
console.log('cost2: ', cost2);
console.log('budgetMonth: ', budgetMonth);
console.log('period: ', period);
console.log('budgetDay: ', budgetDay);

if (budgetDay > 800) {
    console.log('Высокий уровень дохода');
} else if ((budgetDay > 300) && (budgetDay < 800)) {
    console.log('Средний уровень дохода');
} else if ((budgetDay > 0) && (budgetDay < 300)) {
    console.log('Низкий уровень дохода');
} else {
    console.log('Что то пошло не так');
}




