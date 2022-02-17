document.getElementById('calculate-button').addEventListener('click', function () {

    // get food cost 
    const foodInput = document.getElementById('food-input');
    const foodCostText = foodInput.value;
    const foodCost = parseInt(foodCostText);

    //  get rent cost 
    const rentInput = document.getElementById('rent-input');
    const rentCostText = rentInput.value;
    const rentCost = parseInt(rentCostText);

    //  get clothes cost 
    const clothesInput = document.getElementById('cloth-input');
    const clothesCostText = clothesInput.value;
    const clothesCost = parseInt(clothesCostText);

    //  total expenses 
    let totalCostInput = document.getElementById('expenses-input');
    let totalCostText = totalCostInput.value;
    let totalCost = parseInt(totalCostText);

    totalCostInput.value = foodCost + rentCost + clothesCost;

    // error handle 
    if (isNaN(totalCostInput.value) || totalCostInput.value < 0) {
        return alert('please input valid amount of money in number format')
    }


    // income part 
    const IncomeInput = document.getElementById('income-input');
    const IncomeText = IncomeInput.value;
    const totalIncome = parseInt(IncomeText);

    // error handle 
    if (totalIncome < totalCostInput.value) {
        return alert('you have not enough money')
    }

    // balance part 
    let balanceInput = document.getElementById('balance-input')
    let balanceText = balanceInput.value;
    let totalBalance = parseInt(balanceText);

    balanceInput.value = totalIncome - totalCostInput.value;

    // error handle 
    if (isNaN(balanceInput.value) || balanceInput.value < 0) {
        return alert('please input valid amount of money in number format')
    }
})

// saving amount and remaining balance section 
document.getElementById('save-button').addEventListener('click', function (event) {
    event.preventDefault()
    // percentage part 
    let percentageInput = document.getElementById('percentage-box');

    let percentageInputText = percentageInput.value;
    let IncomePercentage = parseInt(percentageInputText);

    // income part 
    const IncomeInput = document.getElementById('income-input');
    const IncomeText = IncomeInput.value;
    const totalIncome = parseInt(IncomeText);

    // saving amount part 
    const savingInput = document.getElementById('saving-input');
    const savingInputText = savingInput.value;
    const previousSavingAmount = parseInt(savingInputText);

    savingInput.value = (totalIncome * IncomePercentage) / 100;




    // remaining balance section

    // balance part 
    let balanceInput = document.getElementById('balance-input')
    let balanceText = balanceInput.value;
    let totalBalance = parseInt(balanceText);

    // error handle 
    if (savingInput.value > balanceInput.value) {
        return alert('you have not enough money for saving')
    }

    balanceInput.value = totalIncome - totalCostInput.value;
    // remaining Balance part 
    let remainingBalanceInput = document.getElementById('remaining-input')

    let remainingBalanceInputText = remainingBalanceInput.value;
    let remainingBalance = parseInt(remainingBalanceInputText);

    remainingBalanceInput.value = balanceInput.value - savingInput.value;
})