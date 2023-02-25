function reverse(n, input) {
    let arr = [];
    for (let i=0; i<n; i++) {
        arr.push(input[i]);
    }
    // console.log(arr) //[10, 20, 30]

    let output = " ";
    for (let i=arr.length-1; i>=0; i--) {
        output += arr[i] + " ";
    }
    console.log(output);
    // let printOutput = output.join(" ");
    
    // console.log(printOutput) // 30 20 10
}

reverse(2, [66, 43, 75, 89, 47])