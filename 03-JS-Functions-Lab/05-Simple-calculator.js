function calculate(num1, num2, operator) {
    number1 = Number(num1);
    number2 = Number(num2);
    result = 0;
  
    switch(operator) {
    case 'multiply':
      result = num1 * num2;  
      break;
    case 'divide':
      result = num1 / num2;
      break;
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    default:
      // code block
  } 
  
  console.log(result);
}

calculate(50,
    13,
    'subtract'
    )
    