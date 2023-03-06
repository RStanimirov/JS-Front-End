function findSmallest(a, b, c) {

    // if (a <= b && a <= c) {
    //     smallestNumber = a;
    // } else if (b <= a && b <= c) {
    //     smallestNumber = b;
    // } else {
    //     smallestNumber = c;
    // }

    let smallestNumber = Math.min(a, b, c);
    return smallestNumber;

}

// let findSmallest = (a, b, c) => Math.min(a, b, c);

console.log(findSmallest(600,
    342,
    123
    ))
