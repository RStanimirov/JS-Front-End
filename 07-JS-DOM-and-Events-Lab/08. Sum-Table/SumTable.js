function sumTable() {
    let tableRows = Array.from(document.querySelectorAll('tr'));
    tableRows.shift();
    tableRows.pop();
    // console.log(tableRows);
    let totalValue = document.getElementById('sum');

    let sum = 0;
    for (let x of tableRows) {
        let value = Number(x.children[1].textContent);
        sum += value;
    }
    totalValue.textContent = sum;
    
}

// ("table tr") --> selects all rows.
// ("table tr:not(:first-child) td") --> selects all values except the header.
// ("table tr:not(:first-child)") --> selects all rows except the header.
// ("table tr:not(:last-child)") --> selects all rows except the last one.
// ("table tr:not(:first-child):not(:last-child)") -- selects all rows excpet firs and last one.