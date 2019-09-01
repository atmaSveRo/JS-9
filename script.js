'use strict';

let money,
    start = function() {
        
    do {
    money = prompt('Укажите ваш месячный доход', '');
    }
    while(isNaN(money) || money === ''|| money === null);
};
    start();

let appData = {
    income: {},
    addIncome: [],
    expens1: {},
    expens2: {},
    addExpenses: [],
    cost: {},
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: {},
    getAccumulatedMonth: {},
    getTargetMonth: {},
    getStatusIncome: {},
  
};

appData.asking = function() {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'фриланс, такси, биржа');
        appData.addExpenses = addExpenses.toUpperCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
};
appData.asking();
console.log(appData.addExpenses);


appData.getExpensesMonth = function() { 
    let sum = 0;
    
    for (let i = 0; i < 2; i++) {
        
        if (i === 0) {
            appData.expens1 = +prompt('Введите обязательную статью расходов', 'продукты');
        }
        if (i === 1) {
            appData.expens2 = +prompt('Введите обязательную статью расходов', 'ипотека');
        }
        
        appData.cost = prompt('Во сколько это обойдется?', '');

        while(isNaN(appData.cost) || appData.cost === ''|| appData.cost === null) {
            appData.cost = prompt('Во сколько это обойдется?', '');
        }
        
        sum += +appData.cost;
    };
    return sum;
};

let expensesMonth = appData.getExpensesMonth();
    console.log('Расходы за месяц:', expensesMonth);


appData.getAccumulatedMonth = function() {
    return money - expensesMonth;
};
    console.log('Накопления:', appData.getAccumulatedMonth());


appData.getTargetMonth = function() {
    return appData.mission/appData.getAccumulatedMonth();
};
    if (appData.getTargetMonth() < 0 || appData.getAccumulatedMonth() === 0) {
    console.log('Цель не будет достигнута');
    } else {
        console.log('Цель будет достигнута');
};


appData.budget = function() {
    appData.budgetMonth = +(money-expensesMonth),
    appData.budgetDay = Math.floor(appData.budgetMonth/30),
    appData.period = Math.ceil((appData.mission/appData.budgetMonth)+'');
};
    appData.budget();
    console.log('Цель будет достигнута за', appData.period + ' месяцев');
    

appData.getStatusIncome = function() {
    if (appData.budgetDay >= 800) {
        console.log('Высокий уровень дохода');
    } else if ((appData.budgetDay >= 300) && (appData.budgetDay < 800)) {
        console.log('Средний уровень дохода');
    } else if ((appData.budgetDay >= 0) && (appData.budgetDay < 300)) {
        console.log('Низкий уровень дохода');
    } else {
        console.log('Что то пошло не так');
    }
};
appData.getStatusIncome();