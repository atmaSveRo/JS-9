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
    input = document.querySelectorAll('input'),
    result = document.querySelectorAll('result');

    const AppData = function() {

        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.addExpenses = [];
        this.expenses = {};
        this.deposit = false;
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;

    };

    AppData.prototype.start = function () {
         
        this.budget = +salaryAmmount.value;

        this.getExpenses();
        this.getIncome(appData);
        this.getExpensesMonth();
        this.getIncomeMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();

        this.showResult();
        // appData.getStatusIncome();
        start.style.display = 'none';
        input.forEach(function(item){
            item.disabled = true;
            incomePlus.disabled = true;
            expensPlus.disabled = true;
            periodSelect.disabled = false;
            
        });
        
        cancel.style.display = 'block';

};
AppData.prototype.reset = function() {
    input.forEach(function(item){
        item.value = '';
        item.disabled = false;
        start.style.display = 'block';
        cancel.style.display = 'none';
        periodSelect.value = '1';
        periodAmount.innerHTML = '1';
        incomePlus.style.display = 'block';
        expensPlus.style.display = 'block';
        for (let i = 0; i < incomeItem.length-1; i++) {
            incomeItem[i].remove();
            expensesItems[i].remove();
        };
        incomePlus.disabled = false;
        expensPlus.disabled = false;
      
    });
};
AppData.prototype.showResult = function(){
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.ceil(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = periodSelect.value * this.budgetMonth;
    let _this = this;
    periodSelect.addEventListener('change', function(){
        periodAmount.innerHTML = periodSelect.value;
        incomePeriodValue.value = periodSelect.value * _this.budgetMonth;
    });
};
AppData.prototype.addExpensesBlock = function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
        expensPlus.style.display = 'none';
    }
};
AppData.prototype.getExpenses = function () {
    let _this = this;
    expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                _this.expenses[itemExpenses] = cashExpenses;
            }
    });
};
AppData.prototype.getIncome = function(){
    let _this = this;
    incomeItem.forEach(function(item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
            _this.income[itemIncome] = cashIncome;
        }
});
};
AppData.prototype.addIncomeBlock = function(){
    let cloneIncomeItem = incomeItem[0].cloneNode(true);
    incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItem = document.querySelectorAll('.income-items');
    if (incomeItem.length === 3) {
        incomePlus.style.display = 'none';
    }
};
AppData.prototype.getAddExpenses = function(){
    let _this = this;
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
            _this.addExpenses.push(item);
        }
    });
};
AppData.prototype.getAddIncome = function(){
    let _this = this;
    additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            _this.addIncome.push(itemValue);
        }
    });
};
AppData.prototype.getExpensesMonth = function() {
for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
}
};
AppData.prototype.getIncomeMonth = function(){
for (let key in this.income) {
    this.incomeMonth += +this.income[key];
}
};
AppData.prototype.getBudget = function() {
this.budgetMonth = +(this.budget + this.incomeMonth - this.expensesMonth),
this.budgetDay = Math.floor(this.budgetMonth/30);
};
AppData.prototype.getTargetMonth = function(){
return targetAmount.value/this.budgetMonth;
};
AppData.prototype.getStatusIncome = function() {
if (this.budgetDay >= 800) {
    console.log('Высокий уровень дохода');
} else if ((this.budgetDay >= 300) && (this.budgetDay < 800)) {
    console.log('Средний уровень дохода');
} else if ((this.budgetDay >= 0) && (this.budgetDay < 300)) {
    console.log('Низкий уровень дохода');
} else {
    console.log('Что то пошло не так');
}
};

AppData.prototype.eventListeners = function(){

    periodSelect.addEventListener('change', function(){
        periodAmount.innerHTML = periodSelect.value;
    });
    start.disabled = true;
    salaryAmmount.addEventListener('input', ()=>{
        if (salaryAmmount.valur !== '' && !isNaN(salaryAmmount.value)) {
            start.disabled = false;
        }
    });

    start.addEventListener('click', start.bind(appData));
    cancel.addEventListener('click', reset.bind(appData));
    expensPlus.addEventListener('click', addExpensesBlock.bind(appData));
    incomePlus.addEventListener('click', addIncomeBlock.bind(appData));


};


   const appData = new AppData();
   console.log(appData);
   appData.eventListeners(); 
  
    