function assignPersonalNumber(input) {
    employees = {}
    for (x of input) {
        employees[x] = x.length
    }
    // employees = input.reduce(
    //     (object, x) => 
    //         {object[x] = x.length;
    //         return object;
    //     }, {}
    // )

    for (key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`)
    }

}

assignPersonalNumber([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
)

