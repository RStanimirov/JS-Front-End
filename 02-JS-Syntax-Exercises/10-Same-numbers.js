function solve(numInteger) {

    let numAsString = numInteger.toString();
    let counter = 0;
    let result = '';

    for (let x of numAsString) {
        if (x === numAsString[0]) {
            result = 'true';
        }else{
            result = 'false';
        }
        counter += Number(x);
    }

    console.log(result)
    console.log(counter)
}

solve(1234)

