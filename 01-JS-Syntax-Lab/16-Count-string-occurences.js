function solve(text, word) {
    let splittedText = text.split(" ");
    let counter = 0;
    for (let x of splittedText) {
      if (x == word) {
        counter += 1;
      }
  }
  
  console.log(counter);
}

solve('This is a word and it also is a sentence', 'is')
