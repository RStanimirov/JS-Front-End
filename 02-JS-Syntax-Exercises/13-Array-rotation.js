function rotateArray (arr, num) {

    let rotations = Number(num);
    
    for(let i = 0; i < rotations; i++)
    {
        let current = arr.shift();
        arr.push(current);
    }

    console.log(arr.join(' '));
}

rotateArray([51, 47, 32, 61, 21], 2)
rotateArray([32, 21, 61, 1], 4)
rotateArray([2, 4, 15, 31], 5)
rotateArray([1,2,3,4,5,6,7], 3)




