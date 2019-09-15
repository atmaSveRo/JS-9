`use strict`;

let start = document.getElementById(`start`),
    cancel = document.getElementById(`cancel`),
    incomePlus = document.getElementsByTagName(`button`)[0],
    expensPlus = document.getElementsByTagName(`button`)[1],
    depositCheck = document.querySelector(`#deposit-check`),
    additionalIncomeItem = document.querySelectorAll(`.additional_income-item`),
    budgetDayValue = document.getElementsByClassName(`budget_day-value`)[0],
    budgetMonthValue = document.getElementsByClassName(`budget_month-value`)[0],
    expensesMonthValue = document.getElementsByClassName(`expenses_month-value`)[0],
    accumulatedMonthValue = document.getElementsByClassName(`accumulated_month-value`)[0],
    additionalIncomeValue = document.getElementsByClassName(`additional_income-value`)[0],
    additionalExpensesValue = document.getElementsByClassName(`additional_expenses-value`)[0],
    incomePeriodValue = document.getElementsByClassName(`income_period-value`)[0],
    targetMonthValue = document.getElementsByClassName(`target_month-value`)[0],
    resultsTotal = document.querySelectorAll(`.result-total`),
    incomeTitle = document.querySelector(`input.income-title`),
    salaryAmmount = document.querySelector(`.salary-amount`),
    additionalIncomeItem_1 = document.querySelector(`.additional_income-item`),
    additionalIncomeItem_2 = document.querySelector(`.additional_income-item:last-child`),
    expensesTitle = document.querySelector(`input.expenses-title`),
    targetAmount = document.querySelector(`.target-amount`),
    periodSelect = document.querySelector(`.period-select`),
    expensesItems = document.querySelectorAll(`.expenses-items`),
    additionalExpensesItem = document.querySelector(`.additional_expenses-item`),
    incomeItem = document.querySelectorAll(`.income-items`),
    periodAmount = document.querySelector(`.period-amount`),
    input = document.querySelectorAll(`input`),
    result = document.querySelectorAll(`result`),
    depositBank = document.querySelector(`.deposit-bank`),
    depositAmount = document.querySelector(`.deposit-amount`),
    depositPercent = document.querySelector(`.deposit-percent`);

    class AppData {
        constructor(){
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
        }

     start() {

            start.disabled = true;
            salaryAmmount.addEventListener(`input`, () => {
                if (salaryAmmount.value !== `` && !isNaN(salaryAmmount.value)) {
                    start.disabled = false;
                }
            });
             
            this.budget = +Math.floor(salaryAmmount.value);
    
            this.getExpenses();
            this.getIncome();
            this.getExpensesMonth();
            this.getIncomeMonth();
            this.getAddExpenses();
            this.getAddIncome();
            this.getInfoDeposit();
            this.getBudget();
    
            this.showResult();
            // appData.getStatusIncome();
            start.style.display = `none`;
            input.forEach(function(item){
                item.disabled = true;
                incomePlus.disabled = true;
                expensPlus.disabled = true;
                periodSelect.disabled = false;
                
            });
            this.blocked();
    
            cancel.style.display = `block`;
            start.style.display = `none`;
    }
    
    blocked() {
    
            document.querySelectorAll(`.data input[type=text]`).forEach((item) => {
                item.disabled = true;
            });
            start.style.display = `block`;
            cancel.style.display = `none`;
            depositBank.disabled = true;
    }
    
    reset() {
    
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
                
            document.querySelectorAll(`.data input[type=text]`).forEach((item) => {
                item.disabled = false;
                depositPercent.style.display = `none`;
                depositBank.style.display = `none`;
                depositAmount.style.display = `none`;
                depositCheck.disabled = false;
                depositCheck.checked = false;
                depositBank.disabled = false;
            });
            document.querySelectorAll(`input[type=text]`).forEach((item) => {
                item.value = ``;
            });
            periodSelect.value = `1`;
            periodAmount.innerHTML = `1`;
            start.style.display = `block`;
            cancel.style.display = `none`;
    
            incomeItem = document.querySelectorAll(`.income-items`);
            expensesItems = document.querySelectorAll(`.expenses-items`);
    
            for (let i = 1; i < incomeItem.length; i++) {
                incomeItem[i].parentNode.removeChild(incomeItem[i]);
                incomePlus.style.display = `block`;
    
            }
            for (let i = 1; i < expensesItems.length; i++) {
                expensesItems[i].parentNode.removeChild(expensesItems[i]);
                expensPlus.style.display = `block`;
            }   
    
            incomePlus.disabled = false;
            expensPlus.disabled = false;
    }
    
    showResult() {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.ceil(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(`, `);
        additionalIncomeValue.value = this.addIncome.join(`, `);
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = periodSelect.value * this.budgetMonth;
    }
    
    addBtn(item, plus, classBlock) {
        let cloneItem = item[0].cloneNode(true);
        item[0].parentNode.insertBefore(cloneItem, plus);
        item = document.querySelectorAll(classBlock);
        if (item.length === 3) {
            plus.style.display = `none`;
        }
        cloneItem.querySelectorAll('input').forEach((item) => {
            item.value = '';
        });
    }
    
    // addExpensesBlock = function() {
    //     let cloneExpensesItem = expensesItems[0].cloneNode(true);
    //     expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensPlus);
    //     expensesItems = document.querySelectorAll(`.expenses-items`);
    //     if (expensesItems.length === 3) {
    //         expensPlus.style.display = `none`;
    //     }
    //     cloneExpensesItem.querySelectorAll('input').forEach((item) => {
    //         item.value = '';
    //     });
    // };
    
    // addIncomeBlock = function() {
    //     let cloneIncomeItem = incomeItem[0].cloneNode(true);
    //     incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    //     incomeItem = document.querySelectorAll(`.income-items`);
    //     if (incomeItem.length === 3) {
    //         incomePlus.style.display = `none`;
    //     }
    //     cloneIncomeItem.querySelectorAll('input').forEach((item) => {
    //         item.value = '';
    //     });
    // };
    
    getExpenses() {
        incomeItem = document.querySelectorAll(`.income-items`);
        expensesItems = document.querySelectorAll(`.expenses-items`);
        expensesItems.forEach((item) => {
                let itemExpenses = item.querySelector(`.expenses-title`).value;
                let cashExpenses = item.querySelector(`.expenses-amount`).value;
                if(itemExpenses !== `` && cashExpenses !== ``){
                    this.expenses[itemExpenses] = cashExpenses;
                }
        });
    }

    getIncome() {
        incomeItem = document.querySelectorAll(`.income-items`);
        expensesItems = document.querySelectorAll(`.expenses-items`);
        incomeItem.forEach((item) => {
            let itemIncome = item.querySelector(`.income-title`).value;
            let cashIncome = item.querySelector(`.income-amount`).value;
            if(itemIncome !== `` && cashIncome !== ``){
                this.income[itemIncome] = cashIncome;
            }
    });
    }
    
    getInfoDeposit() {
        if (this.budget){
            this.percentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value;
        }
    }
    
    getAddExpenses() {
        let addExpenses = additionalExpensesItem.value.split(`,`);
        addExpenses.forEach((item) => {
            item = item.trim();
            if(item !== ``){
                this.addExpenses.push(item);
            }
        });
    }
    
    getAddIncome() {
        additionalIncomeItem.forEach((item) => {
           item = item.value.trim();
            if(item !== ``){
                this.addIncome.push(item);
            }
        });
    }
    
    getExpensesMonth() {
    for (let key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
    }
    }
    
    getIncomeMonth() {
    for (let key in this.income) {
        this.incomeMonth += +this.income[key];
    }
    }
    
    getBudget()  {
    this.budgetMonth = Math.floor(this.budget + this.incomeMonth - this.expensesMonth + ((this.moneyDeposit * this.percentDeposit)/12)),
    this.budgetDay = (this.budgetMonth/30);
    };
    
    getTargetMonth() {
    return targetAmount.value/this.budgetMonth;
    }
    
    // getStatusIncome = function() {
    // if (this.budgetDay >= 800) {
    //     console.log(`Высокий уровень дохода`);
    // } else if ((this.budgetDay >= 300) && (this.budgetDay < 800)) {
    //     console.log(`Средний уровень дохода`);
    // } else if ((this.budgetDay >= 0) && (this.budgetDay < 300)) {
    //     console.log(`Низкий уровень дохода`);
    // } else {
    //     console.log(`Что то пошло не так`);
    // }
    // };

    depositCheck() {
        if(depositCheck.checked){
            depositBank.style.display = `inline-block`;
            depositAmount.style.display = `inline-block`;
            this.deposit = true;
            depositBank.addEventListener(`change`, function() {
                let selectIndex = this.options[this.selectedIndex].value;
                if(selectIndex === `other`){
                    depositPercent.style.display = `inline-block`;
                    depositPercent.value = ``;
                }else{
                    depositPercent.style.display = `none`;
                    depositPercent.value = selectIndex;
                }
            });
        }else{
            depositBank.style.display = `none`;
            depositAmount.style.display = `none`;
            depositAmount.value = ``;
            this.deposit = false;
        };
    }

    eventListeners() {
        start.addEventListener(`click`, () => {
            this.start()
        });

        expensPlus.addEventListener(`click`, () => {
            this.addBtn(expensesItems, expensPlus, `.expenses-items`)
        });

        incomePlus.addEventListener(`click`, () =>{
            this.addBtn(incomeItem, incomePlus, `.income-items`)
        });

        cancel.addEventListener('click', () => {
            this.reset()
        });

        depositCheck.addEventListener('change', () => {
            this.depositCheck()
        });

        periodSelect.addEventListener(`change`, () => {
            periodAmount.innerHTML = periodSelect.value;
        });

        periodSelect.addEventListener(`change`, () => {
            periodAmount.innerHTML = periodSelect.value;
            incomePeriodValue.value = periodSelect.value * this.budgetMonth;
        });
};
};

let appData = new AppData();
appData.eventListeners();