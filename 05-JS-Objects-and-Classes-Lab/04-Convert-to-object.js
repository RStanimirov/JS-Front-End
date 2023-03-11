function jsonToObject(jsonInput) {
    
    let jsonAsObj = JSON.parse(jsonInput); // { name: 'George', age: 40, town: 'Sofia' }
    // console.log(Object.entries(jsonAsObj)); // [ [ 'name', 'George' ], [ 'age', 40 ], [ 'town', 'Sofia' ] ]
    
    for (let [key, value] of Object.entries(jsonAsObj)) {
      console.log(`${key}: ${value}`);
    }
    
  }

jsonToObject('{"name": "George", "age": 40, "town": "Sofia"}')