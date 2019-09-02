'use strict';

let money,
    start = function() {
        
    do {
    money = prompt('Укажите ваш месячный доход', 100000);
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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {

        if (confirm('Есть ли у вас дополнительный источник зароботка?')) {
            let itemIncome = prompt('Какой у вас допольнительный зароботок?', 'Таксую');
                while(!isNaN(itemIncome) || itemIncome === ''|| itemIncome === null) {
                itemIncome = prompt('Какой у вас допольнительный зароботок?', 'Таксую');
            }
            let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
                while(isNaN(cashIncome) || cashIncome === ''|| cashIncome === null) {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            }
            appData.income[itemIncome] = cashIncome;
        }



    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'квартплата,доп.занятия,проезд');
    appData.addExpenses = addExpenses.split(',');
    for (let i = 0; i < appData.addExpenses.length;  i++) {
        appData.addExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].slice(1);
    }
    console.log(appData.addExpenses.join(', '));
        
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

    let sum = 0,
        expens,
        cost;
    
    for (let i = 0; i < 2; i++) {
        
        if (i === 0) {
            expens = prompt('Введите обязательную статью расходов', 'продукты');
                while(!isNaN(expens) || expens === ''|| expens === null) {
                expens = prompt('Введите обязательную статью расходов', 'продукты');
            }
        }
        if (i === 1) {
            expens = prompt('Введите обязательную статью расходов', 'ипотека');
                while(!isNaN(expens) || expens === ''|| expens === null) {
                expens = prompt('Введите обязательную статью расходов', 'ипотека');
        }
        }
        cost = prompt('Во сколько это обойдется?', 10000);

        while(isNaN(cost) || cost === ''|| cost === null) {
            cost = prompt('Во сколько это обойдется?', 30000);
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
getInfoDeposit: function() {
    if(appData.deposit) {
        appData.percentDeposit = prompt('Какой годовой процент?', 10);
            while(isNaN(appData.percentDeposit) || appData.percentDeposit === ''|| appData.percentDeposit === null) {
            appData.percentDeposit = prompt('Какой годовой процент?', 10);
        }
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            while(isNaN(appData.moneyDeposit) || appData.moneyDeposit === ''|| appData.moneyDeposit === null) {
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        }
    }
},
calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
}
};

appData.asking();
appData.getStatusIncome();
appData.getBudget();
appData.getExpensesMonth();
appData.getInfoDeposit();
appData.calcSavedMoney();

    console.log('Расходы за месяц:', appData.expensesMonth);

    console.log('Цель будет достигнута за', appData.period + ' месяцев');

    // console.log('appData.addExpenses: ', appData.addExpenses);

    // // for (let key in appData) {
    //     console.log('Наша программа включает в себя данные: ' + key + ': ' + appData[key]);
    // }

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



    
    
    









