function solve(array) {
    arrayNumbers = []
    for (let index = 0; index < array.length; index++) {
        const elementNumber = Number(array[index]);
        arrayNumbers.push(elementNumber);
    }
    
    // console.log(arrayNumbers); //[1, 2, 3, 4, 5, 6]
    let evenSum = 0;
    let oddSum = 0;

    for (let x of arrayNumbers) {
        if (x % 2 == 0) {
            evenSum += x;
        }
        else {
            oddSum += x;
        }
    }

    let difference = evenSum - oddSum
    console.log(difference)
}

solve([2,4,6,8,10])
