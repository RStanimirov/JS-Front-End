function calc() {
    let firstInput = document.getElementById('num1');
    firstNum = Number(firstInput.value);
    let secondInput = document.getElementById('num2');
    secondNum = Number(secondInput.value);
    let sumField = document.getElementById('sum');
    let sum = firstNum + secondNum;
    sumField.value = sum;
}
