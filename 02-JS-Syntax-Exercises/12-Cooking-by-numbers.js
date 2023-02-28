function numberOperation (num,...arrayOperations) {

    let number = Number(num);
    // let arrayOperations = Array.from(args);

    resultOperation = number;

    for (x of arrayOperations) {
        if (x === 'chop') {
            resultOperation = number / 2;
            number = resultOperation;
        }else if (x === 'dice') {
            resultOperation = Math.sqrt(number);
            number = resultOperation;
        }else if (x === 'spice') {
            resultOperation = number + 1;
            number = resultOperation;
        }else if (x === 'bake') {
            resultOperation = number * 3;
            number = resultOperation;
        }else if (x === 'fillet') {
            resultOperation = number - (number*0.2);
            number = resultOperation;
        }
        console.log(resultOperation)
    }
}

numberOperation('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

