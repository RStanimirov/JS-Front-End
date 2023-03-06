function solve(fruitType, weightGrams, pricePerKilo) {

    let weight = weightGrams / 1000;
    let money = weight * pricePerKilo;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruitType}.`)
}

solve('orange', 2500, 1.80)



