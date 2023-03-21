// function extractText() {
//     let listItems = document.getElementsByTagName('li');
//     let result = document.getElementById('result');
//     for (let x of listItems) {
//         result.value += x.textContent +'\n';
//     }
// }

function extractText() {
    let liElements = document.querySelectorAll('#items > li');
    let result = document.getElementById('result');
    for (let x of liElements) {
        result.textContent += x.textContent;
    }
}