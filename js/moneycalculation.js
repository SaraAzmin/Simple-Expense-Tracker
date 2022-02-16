//click event for calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    const income = getInputValue('income-field');
    const food = getInputValue('food-field');
    const rent = getInputValue('rent-field');
    const clothes = getInputValue('clothes-field');
    if (income >= 0 && food >= 0 && rent >= 0 && clothes >= 0) {
        calculateExpenseAndBalance(income, food, rent, clothes);
    }
    else if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
        console.log('not number');
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

    const expenseField = document.getElementById('expense-amount');
    let expenses = food + rent + clothes;
    expenseField.innerText = expenses;

    const balanceField = document.getElementById('balance-amount');
    let balance = income - expenses;
    balanceField.innerText = balance;
    return balance;
}

//click event for save button
document.getElementById('save-button').addEventListener('click', function () {
    const savePercent = getInputValue('save-field');
    if (savePercent >= 0) {
        calculateSavingAndBalance(savePercent);
    }
    else if (isNaN(savePercent)) {
        console.log('not number');
    }
    else if (savePercent < 0) {
        console.log('negative');
    }
})

//function to calculate saving and remaining balance after saving
function calculateSavingAndBalance(savePercent) {

    const income = getInputValue('income-field');
    const food = getInputValue('food-field');
    const rent = getInputValue('rent-field');
    const clothes = getInputValue('clothes-field');
    let saving = (income * savePercent) / 100;

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = saving;

    const balance = calculateExpenseAndBalance(income, food, rent, clothes);
    balanceRemaining = balance - saving;
    const balanceRemainingField = document.getElementById('balance-remaining');
    balanceRemainingField.innerText = balanceRemaining;

}