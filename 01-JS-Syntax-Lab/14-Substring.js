function solve(string, firstInd, count) {
    
    let lastInd = firstInd + count;
    let result = string.substring(firstInd, lastInd)
    
    console.log(result);
  }

  solve('SkipWord', 4, 7)

