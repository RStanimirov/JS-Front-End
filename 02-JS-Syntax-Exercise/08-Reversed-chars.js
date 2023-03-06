function reverseChars(a, b, c) {

    let stringChars = a + b + c;
    // arrayChars = Array.from(stringChars);
    let arrayChars = [];
    for (let x of stringChars) {
        arrayChars.push(x)
    }
    
    let reversedArray = arrayChars.reverse();

    console.log(reversedArray.join(' '))

}

reverseChars('1',
'L',
'&'
)


