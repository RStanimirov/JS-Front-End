function solve(input) {
    let remainingInput = input;
    let firstLine = remainingInput.shift();

    // console.log(firstLine) // Tomatoes!Potatoes!Bread
    // console.log(remainingInput) // ['Unnecessary Milk', 'Urgent Tomatoes', 'Go Shopping!']

    let groceriesCollectionArray = firstLine.split('!'); // ['Tomatoes', 'Potatoes', 'Bread']

    for (let x of remainingInput) {
        if (x !== 'Go Shopping!') {
            let line = x.split(' ');
            // console.log(line)
            let command = line[0];

            if (command === 'Urgent') {
                let grocery = line[1];
                if (!groceriesCollectionArray.includes(grocery)) {
                    groceriesCollectionArray.unshift(grocery);
                }
            }
            else if (command === 'Unnecessary') {
                let grocery = line[1];
                if (groceriesCollectionArray.includes(grocery)) {
                    let idx = groceriesCollectionArray.indexOf(grocery);
                    groceriesCollectionArray.splice(idx, 1);
                }
            }
            else if (command === 'Correct') {
                let oldItem = line[1];
                let newItem = line[2];
                if (groceriesCollectionArray.includes(oldItem)) {
                    let idx = groceriesCollectionArray.indexOf(oldItem);
                    groceriesCollectionArray.splice(idx, 1, newItem);
                }
            }
            else if (command === 'Rearrange') {
                let grocery = line[1];
                if (groceriesCollectionArray.includes(grocery)) {
                    let idx = groceriesCollectionArray.indexOf(grocery);
                    groceriesCollectionArray.splice(idx, 1);
                    groceriesCollectionArray.push(grocery);
                }
            }

        } else {
            break;
        }
    }

    console.log(groceriesCollectionArray.join(', '));

}

solve(
    (["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
)


