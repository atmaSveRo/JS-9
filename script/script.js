'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensPlus = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    resultsTotal = document.querySelectorAll('.result-total'),
    incomeTitle = document.querySelector('input.income-title'),
    salaryAmmount = document.querySelector('.salary-amount'),
    additionalIncomeItem_1 = document.querySelector('.additional_income-item'),
    additionalIncomeItem_2 = document.querySelector('.additional_income-item:last-child'),
    expensesTitle = document.querySelector('input.expenses-title'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    incomeItem = document.querySelectorAll('.income-items'),
    periodAmount = document.querySelector('.period-amount'),
    input = document.querySelectorAll('input');
    

   
    let appData = {
        income: {},
        incomeMonth: 0,
        addIncome: [],
        addExpenses: [],
        expenses: {},
        deposit: false,
        budget: 0,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        start: function () {

                if (salaryAmmount.value === '') {
                    alert('Ошибка, поле "Месячный доход" должно быть заполнено!')
                    return;
                }
                appData.budget = +salaryAmmount.value;
                console.log('salaryAmmount.value: ', salaryAmmount.value);

                appData.getExpenses();
                appData.getIncome();
                appData.getExpensesMonth();
                appData.getIncomeMonth();
                appData.getAddExpenses();
                appData.getAddIncome();
                appData.getBudget();

                appData.showResult();
                // appData.getStatusIncome();
                start.style.display = 'none';
                input.forEach(function(item){
                    item.disabled = true;
                    periodSelect.disabled = false;
                });

                cancel.style.display = 'block';
                


        },
        showResult: function(){
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = Math.ceil(appData.budgetDay);
            expensesMonthValue.value = appData.expensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());
            incomePeriodValue.value = periodSelect.value * appData.budgetMonth;
            periodSelect.addEventListener('change', function(){
                periodAmount.innerHTML = periodSelect.value;
                incomePeriodValue.value = periodSelect.value * appData.budgetMonth;
            });
        },
        addExpensesBlock: function () {
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            if (expensesItems.length === 3) {
                expensPlus.style.display = 'none';
            }
        },
        getExpenses: function () {
            expensesItems.forEach(function(item) {
                    let itemExpenses = item.querySelector('.expenses-title').value;
                    let cashExpenses = item.querySelector('.expenses-amount').value;
                    if(itemExpenses !== '' && cashExpenses !== ''){
                        appData.expenses[itemExpenses] = cashExpenses;
                    }
            });
        },
        getIncome: function(){
            incomeItem.forEach(function(item) {
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if(itemIncome !== '' && cashIncome !== ''){
                    appData.income[itemIncome] = cashIncome;
                }
        });
        },
        addIncomeBlock: function(){
            let cloneIncomeItem = incomeItem[0].cloneNode(true);
            incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
            incomeItem = document.querySelectorAll('.income-items');
            if (incomeItem.length === 3) {
                incomePlus.style.display = 'none';
            }
        },
        getAddExpenses: function(){
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach(function(item){
                item = item.trim();
                if(item !== ''){
                    appData.addExpenses.push(item);
                }
            });
        },
        getAddIncome: function(){
            additionalIncomeItem.forEach(function(item){
                let itemValue = item.value.trim();
                if(itemValue !== ''){
                    appData.addIncome.push(itemValue);
                }
            });
        },
    getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    getIncomeMonth: function(){
        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        }
    },
    getBudget: function() {
        appData.budgetMonth = +(appData.budget + appData.incomeMonth - appData.expensesMonth),
        appData.budgetDay = Math.floor(appData.budgetMonth/30);
    },
    getTargetMonth: function(){
        return targetAmount.value/appData.budgetMonth;
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
    
    start.disabled = true;
    salaryAmmount.addEventListener('input', ()=>{
        if (salaryAmmount.valur !== '' && !isNaN(salaryAmmount.value)) {
            start.disabled = false;
        }
    });

    start.addEventListener('click', appData.start);
    
    expensPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click', appData.addIncomeBlock);