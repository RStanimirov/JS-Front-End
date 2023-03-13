
function carParker(input) {

    class Car {
        constructor(carNumber, command) {
            this.carNumber = carNumber;
            this.command = command;
        }
    }

    let carList = input;
    let carObj = {}
    let parkingLot = [];

    for (let x of carList) {
        let carData = x.split(', ');
        let command = carData[0];
        let carNumber = carData[1];
        carObj = new Car(carNumber, command); // { carNumber: 'CA2844AA', command: 'IN' }
        
        let isExistingNumber = parkingLot.some( c => c.carNumber === carNumber);

        if (command === 'IN' && !isExistingNumber ) {
            parkingLot.push(carObj);
        } else if (command === 'OUT' && isExistingNumber) {
            let idx = parkingLot.findIndex(c => c.carNumber === carNumber);
            parkingLot.splice(idx, 1);
        }
    }

    if (parkingLot.length > 0) {
        let sortedArray = parkingLot.sort((a, b) => a.carNumber.localeCompare(b.carNumber));
        for (let car of sortedArray) {
            console.log(car.carNumber);
        }

    } else {
        console.log('Parking Lot is Empty');
    }
}

carParker(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'
    ]
)

// carParker([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA'
// ])

