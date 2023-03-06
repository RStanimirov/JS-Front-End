function solve(a, b, c) {
  
    // result = (a + b) - c;
    let mySum = (a, b) => a + b;
    let mySubtract = (mySum, c) => mySum - c;
    let result = mySubtract((mySum(a, b)), c);
    return result;
  }

  console.log(solve(23,
    6,
    10
    ))

