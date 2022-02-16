document.getElementById('calculate-button').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input');
    const foodCostText = foodInput.value;
    const foodCost = parseInt(foodCostText);

    // get rent cost 
    const rentInput = document.getElementById('rent-input');
    const rentCostText = rentInput.value;
    const rentCost = parseInt(rentCostText);

    // get clothes cost 
    const clothesInput = document.getElementById('clothes-input');
    const clothesCostText = clothesInput.value;
    const clothesCost = parseInt(clothesCostText);




    // total cost 
    const totalCost = document.getElementById('total-expenses');

    const totalCostText = totalCost.value;
    const previousTotalCostText = parseInt(totalCostText);


    totalCost.value = foodCost + rentCost + clothesCost;

    // clear input field 
    foodInput.value = '';
    rentInput.value = '';
    clothesInput.value = '';
})