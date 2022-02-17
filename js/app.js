// function updateBalance(inputField) {
//     const foodInput = document.getElementById(input);
//     const foodCostText = foodInput.value;

//     const foodCost = parseInt(foodCostText);
//     totalCostInput.value = foodCost + rentCost + clothesCost;
//     // return totalCostInput.value;
// }



document.getElementById('calculate-button').addEventListener('click', function () {
    // get food cost 
    const foodInput = document.getElementById('food-input');
    const foodCostText = foodInput.value;

    const foodCost = parseInt(foodCostText);
    // updateBalance('food-input');

    //  get rent cost 
    const rentInput = document.getElementById('rent-input');
    const rentCostText = rentInput.value;

    const rentCost = parseInt(rentCostText);
    // updateBalance('rent-input');

    //  get clothes cost 
    const clothesInput = document.getElementById('cloth-input');
    const clothesCostText = clothesInput.value;
    const clothesCost = parseInt(clothesCostText);
    // updateBalance('cloth-input');




    //  total expenses 
    const totalCostInput = document.getElementById('expenses-input');
    const totalCostText = totalCostInput.value;
    const TotalCost = parseInt(totalCostText);
    // updateBalance('expenses-input');

    totalCostInput.value = foodCost + rentCost + clothesCost;



    // income part 
    const IncomeInput = document.getElementById('income-input');

    const IncomeText = IncomeInput.value;
    const totalIncome = parseInt(IncomeText);

    // balance part 
    const balanceInput = document.getElementById('balance-input')
    const balanceText = balanceInput.value;
    const totalBalance = parseInt(balanceText);

    balanceInput.value = totalIncome - totalCostInput.value;


    // clear input field 
    // foodInput.value = '';
    // rentInput.value = '';
    // clothesInput.value = '';
})

// save balance part 
document.getElementById('save-button').addEventListener('click', function (event) {
    event.preventDefault()
    // percentage part 
    let percentageInput = document.getElementById('percentage-box');

    let percentageInputText = percentageInput.value;
    const IncomePercentage = parseInt(percentageInputText);


    // income part 
    const IncomeInput = document.getElementById('income-input');

    const IncomeText = IncomeInput.value;
    const totalIncome = parseInt(IncomeText);

    // saving amount part 
    let savingInput = document.getElementById('saving-input');
    let savingInputText = savingInput.value;
    let previousSavingAmount = parseFloat(savingInputText);

    savingInput.value = (totalIncome * IncomePercentage) / 100;



})