function solve(text, word) {
    let censoredText = text;
    while (censoredText.includes(word)) {
      censoredText = censoredText.replace(word, "*".repeat(word.length));
    }
    // console.log(text)
    console.log(censoredText);
  }

solve('Find the hidden word in a hidden text.', 'hidden')

