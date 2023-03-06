function charactersRange(char1, char2) {
  
    let asciiValueChar1 = char1.charCodeAt(0);
    let asciiValueChar2 = char2.charCodeAt(0);
    let startChar = Math.min(asciiValueChar1, asciiValueChar2);
    let endChar = Math.max(asciiValueChar1, asciiValueChar2);
    let resultString = '';
    
    for (i=startChar+1; i<endChar; i++) {
      resultString += String.fromCharCode(i) + ' ';
    }
    return resultString;
  }

  console.log(charactersRange('#',
  ':'
  ))