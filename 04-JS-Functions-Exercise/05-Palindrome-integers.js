function checkPalindrome(array) {

    // array.forEach(element => {
    //     console.log(isPalindrome(element))
    // });

    // function isPalindrome(myNum) {
    //     let reversedNum = Number([...myNum.toString()].reverse().join(''));
    //     return myNum === reversedNum;
    // }

    for (const x of array) {
        let numaAsString = x.toString();
        let reversedString = numaAsString.split('').reverse().join('');
        // console.log(reversedString);
        if (Number(reversedString) === x) {
            console.log('true');
        } else {
            console.log('false');
        }
    }

}

checkPalindrome([123,323,421,121])

