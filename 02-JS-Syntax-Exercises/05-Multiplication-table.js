function multiplicationTable(inputNum) {
    let number = Number(inputNum);

    for (let i = 1; i <= 10; i++) {
        console.log(`${number} X ${i} = ${number * i}`);
    }

}