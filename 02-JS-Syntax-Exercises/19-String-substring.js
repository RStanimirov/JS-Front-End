function stringSubstring(word, text) {
    
    let splittedText = text.split(' ');
    let flag = false;
    
    for (let y of splittedText) {
        if (y.toLowerCase() === word) {
            flag = true;
        }
    }
    
    if (flag) {
      console.log(word);
    }else{
      console.log(`${word} not found!`)
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language'
)

stringSubstring('python',
'JavaScript is the best programming language'
)


