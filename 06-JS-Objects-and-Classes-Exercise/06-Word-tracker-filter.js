function wordTracker(input) {

    let keyWords = input.shift().split(' '); // ['this', 'sentence']
    let arrayOfFiltered = [];

    for (let x of keyWords) {
        let filteredInput = input.filter((w) => w === x);
        // ['this', 'this', 'this']
        // ['sentence', 'sentence']
        arrayOfFiltered.push([x, filteredInput.length])
    }
    // console.log(arrayOfFiltered) // [ [ 'is', 1 ], [ 'the', 3 ] ]

    let sortedArray = arrayOfFiltered.sort((a, b) => b[1] - a[1]);
    for (let x of sortedArray) {
        console.log(`${x[0]} - ${x[1]}`)
    }
}

// wordTracker([
//     'this sentence', 
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
//     ])

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
])