function buildMatrix(num) {
    let numAsStr = num.toString();
    for (i = 0; i < num; i++) {
        matrix = '';
        for (j = 0; j < num; j++) {
            matrix += numAsStr + ' ';
        }
        console.log(matrix);
    }
}

buildMatrix(8)

