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
    addExpenses: [],
    expenses: {},
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'фриланс, такси, биржа');
        appData.addExpenses = addExpenses.toUpperCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

    let sum = 0,
        expens,
        cost;
    
    for (let i = 0; i < 2; i++) {
        
        if (i === 0) {
            expens = prompt('Введите обязательную статью расходов', 'продукты');
        }
        if (i === 1) {
            expens = prompt('Введите обязательную статью расходов', 'ипотека');
        }
        
        cost = prompt('Во сколько это обойдется?', '');

        while(isNaN(cost) || cost === ''|| cost === null) {
            cost = prompt('Во сколько это обойдется?', '');
        }
        appData.expenses[expens] = +cost;
    }
},
getExpensesMonth: function() {
    for (let key in appData.expenses) {
        appData.expensesMonth += +appData.expenses[key];
    }
},
getBudget: function() {
    appData.budgetMonth = +(money-appData.expensesMonth),
    appData.budgetDay = Math.floor(appData.budgetMonth/30),
    appData.period = Math.ceil(+(appData.mission/appData.budgetMonth));
},
getStatusIncome: function() {
    if (appData.budgetDay >= 800) {
        console.log('Высокий уровень дохода');
    } else if ((appData.budgetDay >= 300) && (appData.budgetDay < 800)) {
        console.log('Средний уровень дохода');
    } else if ((appData.budgetDay >= 0) && (appData.budgetDay < 300)) {
        console.log('Низкий уровень дохода');
    } else {
        console.log('Что то пошло не так');
    }
},
};

appData.asking();
appData.getBudget();
appData.getStatusIncome();
appData.getExpensesMonth();

    console.log('Расходы за месяц:', appData.expensesMonth);

    console.log('Цель будет достигнута за', appData.period + ' месяцев');

    for (let key in appData) {
        console.log('Наша программа включает в себя данные: ' + key + ': ' + appData[key]);
    }

// appData.getBudget = function() {
//     return money - expensesMonth;
// };
    // console.log('Накопления:', appData.getBudget());


// appData.getTargetMonth = function() {
//     return appData.mission/appData.getBudget();
// };
//     if (appData.getTargetMonth() < 0 || appData.getBudget() === 0) {
//     console.log('Цель не будет достигнута');
//     } else {
//         console.log('Цель будет достигнута');
// };



    
    
    









