// function detectSpeedLimit (speed, area) {

//     let speedLimit = 0;

//     if (area === 'motorway') {
//         speedLimit = 130;    
//     }else if (area === 'interstate') {
//         speedLimit = 90;
//     }else if (area === 'city') {
//         speedLimit = 50;
//     }else if (area === 'residential') {
//         speedLimit = 20;
//     }

//     let difference = 0;
//     let status = '';

//     if (speed <= speedLimit) {
//         console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
//     }else{
//         difference = speed - speedLimit;
//         if (difference <= 20) {
//             status = 'speeding';
//         }else if (difference <=40 && difference > 20) {
//             status = 'excessive speeding';
//         }else{
//             status = 'reckless driving';
//         }
          
//         console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
//     }

// }

function detectSpeedLimit(arg1, arg2) {
 
    if (arg2 == 'city') {
        console.log((arg1 > 50 ? 'reckless driving' : ''));
    }
    else if (arg2 == 'motorway') {
        console.log((arg1 > 130 ? 'reckless driving' : ''));
    }
    else if (arg2 == 'interstate') {
        console.log((arg1 > 90 ? 'excessive speeding' : ''));
    }
    else if (arg2 == 'residential') {
        console.log((arg1 > 20 ? 'speeding' : ''));
    }
}

detectSpeedLimit(200, 'motorway')



