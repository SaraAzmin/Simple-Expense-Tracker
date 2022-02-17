//click event for calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    const income = getInputValue('income-field');
    const food = getInputValue('food-field');
    const rent = getInputValue('rent-field');
    const clothes = getInputValue('clothes-field');

    //error-messeges for not number and negative number input
    const notNumberError = document.getElementById('not-number-error');
    const negNumberError = document.getElementById('neg-number-error');

    if (income >= 0 && food >= 0 && rent >= 0 && clothes >= 0) {
        notNumberError.style.display = 'none';
        negNumberError.style.display = 'none';
        calculateExpenseAndBalance(income, food, rent, clothes);
    }
    else if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {

        notNumberError.style.display = 'block';
        negNumberError.style.display = 'none';
    }
    else if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
        negNumberError.style.display = 'block';
        notNumberError.style.display = 'none';
    }
})

//function for fatching value from input fields
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputField = parseInt(input.value);
    return inputField;
}

//function to calculate expenses and balance
function calculateExpenseAndBalance(income, food, rent, clothes) {

    //error msg
    const overExpenseError = document.getElementById('over-expense-error');

    //expenses calculation
    const expenseField = document.getElementById('expense-amount');
    let expenses = food + rent + clothes;

    //balance calculation
    const balanceField = document.getElementById('balance-amount');
    let balance = income - expenses;

    //checking if expense is less than income
    if (expenses <= income) {
        overExpenseError.style.display = 'none';
        expenseField.innerText = expenses;

        //balance after expenses
        balanceField.innerText = balance;
        return balance;
    }
    else {
        //error msg for expense exceeding income
        overExpenseError.style.display = 'block';
        expenseField.innerText = '0';
        balanceField.innerText = '0';
    }
}

//click event for save button
document.getElementById('save-button').addEventListener('click', function () {
    const savePercent = getInputValue('save-field');

    //error-messeges for not number and negative number saving input
    const notNumberError = document.getElementById('save-not-number-error');
    const negNumberError = document.getElementById('save-neg-number-error');

    if (savePercent >= 0) {
        calculateSavingAndBalance(savePercent);
        notNumberError.style.display = 'none';
        negNumberError.style.display = 'none';
    }
    else if (isNaN(savePercent)) {
        notNumberError.style.display = 'block';
        negNumberError.style.display = 'none';
    }
    else if (savePercent < 0) {
        negNumberError.style.display = 'block';
        notNumberError.style.display = 'none';
    }
})

//function to calculate saving and remaining balance after saving
function calculateSavingAndBalance(savePercent) {

    const income = getInputValue('income-field');
    const food = getInputValue('food-field');
    const rent = getInputValue('rent-field');
    const clothes = getInputValue('clothes-field');

    const balance = calculateExpenseAndBalance(income, food, rent, clothes);

    //error msg
    const overSavingError = document.getElementById('over-saving-error');

    //saving calculation
    let saving = parseInt((income * savePercent) / 100);
    const savingAmount = document.getElementById('saving-amount');

    //balance calculation
    balanceRemaining = balance - saving;
    const balanceRemainingField = document.getElementById('balance-remaining');

    //if balance is less than saving not possible, remaining balance is not calculated
    //otherwise remaining balance will give negative value
    if (saving <= balance) {

        overSavingError.style.display = 'none';
        savingAmount.innerText = saving;

        //balance after saving
        balanceRemainingField.innerText = balanceRemaining;
    }
    else {
        //error msg for saving exceeding balance
        overSavingError.style.display = 'block';
        savingAmount.innerText = '0';
        balanceRemainingField.innerText = '0';
    }

}