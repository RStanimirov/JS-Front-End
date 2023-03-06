function sumOddEven(num) {
    let numberAsStr = String(num);
    let oddSum = 0;
    let evenSum = 0;

    for (const iterator of numberAsStr) {
        if (iterator % 2 == 0) {
            evenSum += Number(iterator);            
        }else{
            oddSum += Number(iterator);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

sumOddEven(1000435)



