function storeProvision(stockArr, orderedArr) {

    totalArrAsStr = stockArr + ',' + orderedArr;
    splittedArray = totalArrAsStr.split(',');
    // combinedArr = [...stockArr, ...orderedArr];
    // console.log(splittedArray);
    // console.log(combinedArr);

    let storeObject = {}

    for (let index = 0; index < splittedArray.length; index+=2) {

        if (index % 2 === 0) {
            key = splittedArray[index];
            value = Number(splittedArray[index + 1]);
        }

        if (storeObject.hasOwnProperty(key)) {
            storeObject[key] += value;

        }else{
            storeObject[key] = value;
        }

    }
    // console.log(storeObject);

    for (let x in storeObject) {
        console.log(`${x} -> ${storeObject[x]}`)
    }
}

// storeProvision(
//     ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//     ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
// )

storeProvision(
    ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
)
