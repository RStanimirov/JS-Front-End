function printAddress(input) {
    
    let addressBook = {};
    for (let x of input) {
        let [name, address] = x.split(':');
        addressBook[name] = address;
    }
    // console.log(addressBook); // { Tim: 'Doe Crossing', Bill: 'Ornery Rd', Peter: 'Carlyle Ave' }

    let sortedBook = Object.entries(addressBook);
    sortedBook.sort((a, b) => a[0].localeCompare(b[0]));
    // console.log(sortedBook);
    // [
    //   [ 'Bill', 'Ornery Rd' ],
    //   [ 'Peter', 'Carlyle Ave' ],
    //   [ 'Tim', 'Doe Crossing' ]
    // ]

    for (let x of sortedBook) {
        let k = x[0];
        let v = x[1];
        console.log(`${k} -> ${v}`);
    }
}

printAddress(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)
