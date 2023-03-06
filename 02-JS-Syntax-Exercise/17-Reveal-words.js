function revealWords(str1, str2) {

    splittedStr1 = str1.split(', ');
    splittedStr2 = str2.split(' ');

    let result = splittedStr2.join(' ');

    for (let x of splittedStr2) {
        if (x.includes('*')) {
            for (let y of splittedStr1) {
                if (y.length === x.length) {
                    result = result.replace(x, y);
                }
            }
        }
    }

    console.log(result)
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
)

