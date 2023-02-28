function sortNumbers(array) {
    let sortedArray = array.sort((a, b) => a - b);
    let result = [];
    
    while (sortedArray.length > 0) {
        result.push(sortedArray.shift());
        result.push(sortedArray.pop());
    }

    return result;
    // console.log(result);
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])

