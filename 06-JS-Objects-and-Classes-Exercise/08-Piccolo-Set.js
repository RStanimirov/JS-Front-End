
function carParker(input) {

    let parkingLot = new Set();

    for (let x of input) {
        let carData = x.split(', ');
        let command = carData[0];
        let carNumber = carData[1];
    
        if (command === 'IN' ) {
            parkingLot.add(carNumber);
        } else if (command === 'OUT') {
            parkingLot.delete(carNumber);
        }
    }
    // let parkingLotArrayFromSet = [...parkingLot.keys()]
    let arrayFromSet = Array.from(parkingLot);

    if (arrayFromSet.length > 0) {
        let sortedArray = arrayFromSet.sort((a, b) => a.localeCompare(b));
        for (let car of sortedArray) {
            console.log(car);
        }

    } else {
        console.log('Parking Lot is Empty');
    }
}

// carParker(
//     [
//         'IN, CA2844AA',
//         'IN, CA1234TA',
//         'OUT, CA2844AA',
//         'IN, CA9999TT',
//         'IN, CA2866HI',
//         'OUT, CA1234TA',
//         'IN, CA2844AA',
//         'OUT, CA2866HI',
//         'IN, CA9876HH',
//         'IN, CA2822UU'
//     ]
// )

carParker([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
])