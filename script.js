'use strict';

let money = +prompt('Укажите ваш месячный доход', 100000);
let income = ('фриланс, такси, биржа');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'фриланс, такси, биржа');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expens1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'продукты');
let cost1 = +prompt('Во сколько это обойдется?', 5000);
let expens2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'ипотека');
let cost2 = +prompt('Во сколько это обойдется?', 10000);
let budgetMonth = (money-cost1-cost2);
let mission = 1000000;
let period = Math.ceil((mission/budgetMonth)+'');
let budgetDay = Math.floor(budgetMonth/30);


let ExpensesMonth = function getExpensesMonth() {
    return cost1 + cost2;
};

function getAccumulatedMonth() {
    return money - cost1 - cost2;
};
console.log(getAccumulatedMonth());


let accumulatedMonth = getAccumulatedMonth();


let TargetMonth = function getTargetMonth() {
    return mission/accumulatedMonth;
};
console.log(Math.floor(TargetMonth()));


let showTypeOf = function(data) {
    console.log(typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


let getStatusIncome = function() {
    if (budgetDay >= 800) {
        console.log('Высокий уровень дохода');
    } else if ((budgetDay >= 300) && (budgetDay < 800)) {
        console.log('Средний уровень дохода');
    } else if ((budgetDay >= 0) && (budgetDay < 300)) {
        console.log('Низкий уровень дохода');
    } else {
        console.log('Что то пошло не так');
    }
    
};

getStatusIncome();


