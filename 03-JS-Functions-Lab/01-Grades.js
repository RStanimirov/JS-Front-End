function grades(num) {

    if (num >= 2.00 && num <= 2.99) {
        console.log(`Fail (2)`);
    } else if (num >= 3.00 && num <= 3.49) {
        console.log(`Poor (${num.toFixed(2)})`);
    } else if (num >= 3.50 && num <= 4.49) {
        console.log(`Good (${num.toFixed(2)})`);
    } else if (num >= 4.50 && num <= 5.49) {
        console.log(`Very good (${num.toFixed(2)})`);
    } else if (num >= 5.50 && num <= 6.00) {
        console.log(`Excellent (${num.toFixed(2)})`);
    }

}

grades(4.50)