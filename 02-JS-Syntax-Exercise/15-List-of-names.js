function sortNames(array) {
    let sortedArray = array.sort((a, b) => a.localeCompare(b));
    for (let index = 0; index < sortedArray.length; index++) {
        const element = sortedArray[index];
        console.log(`${index+1}.${element}`)
    }
    // console.log(sortedArray)
}

sortNames(["John", "Bob", "Christina", "Ema"])

