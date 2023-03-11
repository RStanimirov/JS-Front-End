function catCreator(arrayCats) {
    
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let listOfCatObjects = [];
    for (let x of arrayCats) {
        let catData = x.split(' ');
        let name = catData[0];
        let age = catData[1];
        listOfCatObjects.push(new Cat(name, age));
    }
    // 	console.log(cats) // [ Cat { name: 'Mellow', age: '2' }, Cat { name: 'Tom', age: '5' } ]
    for (let x of listOfCatObjects) {
        x.meow();
    }
}

catCreator(['Mellow 2', 'Tom 5'])
