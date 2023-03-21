function colorize() {
    let rows = document.querySelectorAll("table tr:not(:first-child):not(:last-child)");
    console.log(rows);
    // let index = 1;
    // for (let row of rows) {
    //     if (index % 2 == 0) {
    //         row.style.background = 'teal';
    //     }
    //     index++;
    // }

    for (let index = 0; index < rows.length; index++) {
        const element = rows[index];
        if (index % 2 == 0) {
            element.style.background = 'teal';
        }
    }

}

// ("table tr") --> selects all rows.
// ("table tr:not(:first-child) td") --> selects all values except the header.
// ("table tr:not(:first-child)") --> selects all rows except the header.
// ("table tr:not(:last-child)") --> selects all rows except the last one.
// ("table tr:not(:first-child):not(:last-child)") -- selects all rows excpet firs and last one.
