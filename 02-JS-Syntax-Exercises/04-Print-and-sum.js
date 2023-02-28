function printAndSum(a, b) {

    let startNum = Number(a);
    let endNum = Number(b);

    let totalSum = 0;
    let printSequence = [];

    for (let i = startNum; i <= endNum; i++) {
        printSequence.push(i);
        totalSum += i;

    }

    console.log(printSequence.join(' '));
    console.log(`Sum: ${totalSum}`)

}