'use strict';

let money,
    income = ('фриланс, такси, биржа'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'фриланс, такси, биржа'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expens1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'продукты'),
    // cost1 = +prompt('Во сколько это обойдется?', 5000),
    expens2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'ипотека'),
    // cost2 = +prompt('Во сколько это обойдется?', 10000),
    // budgetMonth = (money-cost1-cost2),
    mission = 1000000;
    // period = Math.ceil((mission/budgetMonth)+''),
    // budgetDay = Math.floor(budgetMonth/30);

let start = function() {
        
    do {
    money = prompt('Укажите ваш месячный доход', '');
    }
    while(isNaN(money) || money === ''|| money === null);
    
};
    start();


let ExpensesMonth = function getExpensesMonth() {
    let sum = 0;

    for (let i = 0; i < 2; i++){
        sum += +prompt('Во сколько это обойдется?', 5000)
    }
    return sum;
};


let accumulatedMonth = function getAccumulatedMonth() {
    return money - ExpensesMonth();
};
console.log(accumulatedMonth());


let TargetMonth = function getTargetMonth() {
    return mission/accumulatedMonth();
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


