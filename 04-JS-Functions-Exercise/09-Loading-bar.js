function loadingBar(num) {

    let remainingUnit = (100 - num) / 10;
    let filledUnit = 10 - remainingUnit;

    let progressBar = '[' + '%'.repeat(filledUnit) + '.'.repeat(remainingUnit) + ']';

    if (num === 100) {
        console.log('100% complete!');
        console.log(progressBar);
    } else {
        console.log(`${num}% ${progressBar}`);
        console.log('Still loading...')
    }

}

loadingBar(50)



