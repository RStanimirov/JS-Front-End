function showTownInfo(input) {
    
    arrayOfSplittedTowns = []
    for (let x of input) {
        arrayOfSplittedTowns.push(x.split(' | '))
    }

    citiesObjects = {};

    for (let x of arrayOfSplittedTowns) {
        citiesObjects['town'] = x[0];
        citiesObjects['latitude'] = Number(x[1]).toFixed(2);
        citiesObjects['longitude'] = Number(x[2]).toFixed(2);
        console.log(citiesObjects);        
    }
}

showTownInfo(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)


