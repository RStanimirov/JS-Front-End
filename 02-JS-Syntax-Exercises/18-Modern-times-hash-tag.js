function modernTimes(inputText) {

    let splittedText = inputText.split(' ');
    let result = [];

    for (let x of splittedText) {
        if (x.startsWith('#') && x.length > 1 && checkWordValid(x)) {
            result.push(x.slice(1));
        }
    }

    console.log(result.join('\n'));

    function checkWordValid(myWord) {
        let myWordLower = myWord.toLowerCase().slice(1);
        let isValid = true;

        for (const symbol of myWordLower) {
            let asciiCode = symbol.charCodeAt(0);
            if(!(asciiCode >= 97 && asciiCode <= 122)) {
                isValid = false;
                break; 
            }
        }

        return isValid;
        
    }
}

modernTimes('Nowadays everyone uses #1 to tag a #special word in #socialMedia')




