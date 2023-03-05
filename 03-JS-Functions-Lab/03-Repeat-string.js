function repeatString(string, num) {

    let result = '';
     
    while (num > 0) {
        result = result.concat(string);
        num -= 1;
    }

    console.log(result);

}


repeatString('String', 2)