function phoneBook(arrayOfStrings) {
    let phonebookObj = {};

    for (let x of arrayOfStrings) {
        let data = x.split(' ');
        let name = data[0];
        let number = data[1];
        phonebookObj[name] = number;
    }

    for (let key in phonebookObj) {
        console.log(`${key} -> ${phonebookObj[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)


