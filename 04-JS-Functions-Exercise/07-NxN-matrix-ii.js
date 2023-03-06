function drawMatrix(num) {
    let myMatrix = new Array(num).fill(new Array(num).fill(num));

    for (x of myMatrix) {
        console.log(x.join(' '))
    }
    // console.log(myMatrix);
}

drawMatrix(6)