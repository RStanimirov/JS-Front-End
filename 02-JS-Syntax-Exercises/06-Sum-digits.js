function solve(input) {
  let inputNumbers = [];
  let iterableInput = input.toString();
  // let inputArray = Array.from(input.toString()).map(Number); // [2, 4, 5, 6, 7, 8]

  for (let x of iterableInput) {
    inputNumbers.push(Number(x));
  }

  sum = 0;
  for (let y of inputNumbers) {
    sum += y;
  }

  console.log(sum);
}

solve(245678)