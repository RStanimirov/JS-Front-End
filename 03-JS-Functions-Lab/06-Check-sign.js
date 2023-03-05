function solve(num1, num2, num3){

    let multiply = (num1, num2) => num1 * num2
    let result = multiply(num1, num2) * num3
  
    return result < 0 ? "Negative" : "Positive" 
  
  }

  console.log(solve( 5,
    12,
   -15
   ))
   