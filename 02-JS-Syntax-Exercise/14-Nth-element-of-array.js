function solve(array, num) {

    let step = Number(num);
    let newArray = [];
    for (let i = 0; i < array.length; i+=step) {
        newArray.push(array[i]);
        // console.log(array[i]);
    }

    return newArray;
}


solve(['dsa',
'asd', 
'test', 
'tset'], 
2


)



