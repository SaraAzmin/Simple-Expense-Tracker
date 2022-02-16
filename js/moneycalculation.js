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

    //expenses calculation
    const expenseField = document.getElementById('expense-amount');
    let expenses = food + rent + clothes;

    if (expenses <= income) {
        expenseField.innerText = expenses;

        //balance after expenses
        const balanceField = document.getElementById('balance-amount');
        let balance = income - expenses;
        balanceField.innerText = balance;
        return balance;
    }
    else {
        console.log('cannot spend more than income');
    }

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
    const balance = calculateExpenseAndBalance(income, food, rent, clothes);

    //saving calculation
    let saving = (income * savePercent) / 100;
    const savingAmount = document.getElementById('saving-amount');

    //if balance is less than saving saving not possible, remaining balance is not calculated
    //otherwise remaining balance will give negative value
    if (savingAmount <= balance) {
        savingAmount.innerText = saving;

        //balance after saving
        balanceRemaining = balance - saving;
        const balanceRemainingField = document.getElementById('balance-remaining');
        balanceRemainingField.innerText = balanceRemaining;
    }
    else {
        console.log('not enough money for saving');
    }

}