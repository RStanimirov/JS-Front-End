function solve(input) {

    let splittedArray = input.toLowerCase().split(' ');
    // ['java', 'c#', 'php', 'php', 'java', 'php', '3', 'c#', '3', '1', '5', 'c#']

    let arrayAsObject = {};
    for (let x of splittedArray) {
        if (!arrayAsObject.hasOwnProperty(x)) {
            arrayAsObject[x] = 1;
        } else {
            arrayAsObject[x] += 1;
        }
        // {1: 1, 3: 2, 5: 1, java: 2, c#: 3, php: 3}
    }

    let finalArray = [];
    for (let key in arrayAsObject) {
        if (arrayAsObject[key] % 2 !== 0) {
            finalArray.push(key);
        }
    }

    console.log(finalArray.join(' ')); // 1 5 c# php
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')