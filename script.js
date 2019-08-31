'use strict';

let money,
    income = ('фриланс, такси, биржа'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'фриланс, такси, биржа'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expens1,
    expens2,
    cost3,
    mission = 1000000;
   
    

let start = function() {
        
    do {
    money = prompt('Укажите ваш месячный доход', '');
    }
    while(isNaN(money) || money === ''|| money === null);
    
};
    start();


function getExpensesMonth() { 
    let sum = 0;
    
    for (let i = 0; i < 2; i++) {
        
        if (i === 0) {
            expens1 = +prompt('Введите обязательную статью расходов', 'продукты');
        }
        if (i === 1) {
            expens2 = +prompt('Введите обязательную статью расходов', 'ипотека');
        }
        
        cost3 = prompt('Во сколько это обойдется?', '');

        while(isNaN(cost3) || cost3 === ''|| cost3 === null) {
            cost3 = prompt('Во сколько это обойдется?', '');
        }
        
        sum += +cost3;
    };
    return sum;
       
};

let expensesMonth = getExpensesMonth();

let budgetMonth = (money-expensesMonth),
budgetDay = Math.floor(budgetMonth/30),
period = Math.ceil((mission/budgetMonth)+'');


let accumulatedMonth = function getAccumulatedMonth() {
    return money - expensesMonth;
};
console.log(accumulatedMonth());

let targetMonth = function getTargetMonth() {
    return mission/accumulatedMonth()
};
    if (targetMonth() < 0 || accumulatedMonth() === 0) {
    console.log('Цель не будет достигнута');
    } else {
        console.log('Цель будет достигнута');
        
    }
    // console.log(Math.floor(targetMonth()));

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


