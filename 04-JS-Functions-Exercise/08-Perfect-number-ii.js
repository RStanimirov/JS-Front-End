function checkPerfectNumber(num) {
    let divisorsArray = [];
    
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            divisorsArray.push(i);
        }
        
    }

    let divisorsSum = 0;

    for (x of divisorsArray) {
        divisorsSum += x;
    }

    if (divisorsSum === num) {
        console.log('We have a perfect number!')
    } else {
        console.log('It\'s not so perfect.')
    }

}

checkPerfectNumber(6);
checkPerfectNumber(28);
checkPerfectNumber(1236498);

