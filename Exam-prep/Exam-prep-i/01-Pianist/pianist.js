// // RS solution 100/100 - too complicated:
// function solve(input) {
//     let remainingInput = input;
//     const num = Number(remainingInput.shift());

//     let tempArraySongs = [];
//     let songCollection = [];

//     counter = 1;
//     for (let x of remainingInput) {
//         if (x !== 'Stop') {
//             while (counter <= num) {
//                 counter += 1;
//                 tempArraySongs.push(remainingInput.shift(x));
//             }
//         } else {
//             // console.log('Stop command rcvd.')
//             break;
//         }
//     }

//     remainingInput.pop(); // Removes the 'Stop' command

//     for (let x of tempArraySongs) {
//         let splittedSong = x.split('|');
//         let song = {};
//         song.piece = splittedSong[0];
//         song.composer = splittedSong[1];
//         song.musicKey = splittedSong[2];
//         songCollection.push(song);
//     }
//     // console.log(songCollection);

//     for (let line of remainingInput) {
//         let splittedLine = line.split('|');
//         let newSong = {};
//         let command = splittedLine[0];

//         if (command === 'Add') {
//             let newPiece = splittedLine[1];
//             let newComposer = splittedLine[2];
//             let newMusicKey = splittedLine[3];
//             newSong.piece = newPiece;
//             newSong.composer = newComposer;
//             newSong.musicKey = newMusicKey;
//             // console.log(newSong)

//             if (songCollection.some(e => e.piece === newPiece)) {
//                 console.log(`${newPiece} is already in the collection!`)
//             } else {
//                 console.log(`${newPiece} by ${newComposer} in ${newMusicKey} added to the collection!`);
//                 songCollection.push(newSong);
//             }
//         }

//         if (command === 'Remove') {
//             let newPiece = splittedLine[1];
//             if (songCollection.some(e => e.piece === newPiece)) {
//                 let idx = songCollection.findIndex(e => e.piece === newPiece);
//                 songCollection.splice(idx, 1);
//                 console.log(`Successfully removed ${newPiece}!`)
//             } else {
//                 console.log(`Invalid operation! ${newPiece} does not exist in the collection.`);
//             }
//         }

//         if (command === 'ChangeKey') {
//             let newPiece = splittedLine[1];
//             let newMusicKey = splittedLine[2];
//             if (songCollection.some(e => e.piece === newPiece)) {
//                 let searchedObj = songCollection.find(obj => obj.piece === newPiece);
//                 searchedObj.musicKey = newMusicKey;
//                 console.log(`Changed the key of ${newPiece} to ${newMusicKey}!`)
//             } else {
//                 console.log(`Invalid operation! ${newPiece} does not exist in the collection.`);
//             }
//         }
//     }

//     // console.log(songCollection)
//     for (let x of songCollection) {
//         console.log(`${x.piece} -> Composer: ${x.composer}, Key: ${x.musicKey}`)
//     }
// }


solve(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
)

// RS another solution, a bit simplified 100/100 :
function solve(input) {
    let remainingInput = input;
    let num = remainingInput.shift();
    let initialSongsArray = [];
    let commandsArray = [];
    let songsObject = {}; // for dynamically storing the songs depending on input data 

    for (let i = 0; i < num; i++) {
        initialSongsArray.push(remainingInput.shift().split('|'));
    }

    for (let x of initialSongsArray) {
        let song = x[0];
        let composer = x[1];
        let musicKey = x[2];
        songsObject[song] = { composer, musicKey }
    }
    // console.log(songsObject)

    for (let line of remainingInput) {
        if (line !== 'Stop') {
            commandsArray.push(line);
        } else {
            break;
        }
    }

    for (let x of commandsArray) {
        let splittedLine = x.split('|');
        let command = splittedLine[0];
        
        if (command === 'Add') {
            let song = splittedLine[1];
            let composer = splittedLine[2];
            let musicKey = splittedLine[3];
          
            if (!songsObject.hasOwnProperty(song)) {
                songsObject[song] = { composer, musicKey };
                console.log(`${song} by ${composer} in ${musicKey} added to the collection!`)
            } else {
                console.log(`${song} is already in the collection!`)
            }
        }
        else if (command === 'Remove') {
            let songToRemove = splittedLine[1];
            if (songsObject.hasOwnProperty(songToRemove)) {
                delete songsObject[songToRemove];
                console.log(`Successfully removed ${songToRemove}!`)
            } else {
              console.log(`Invalid operation! ${songToRemove} does not exist in the collection.`)
            }
        }
        else if (command === 'ChangeKey') {
            let songToChange = splittedLine[1];
            let newKey = splittedLine[2];
            if (songsObject.hasOwnProperty(songToChange)) {
                songsObject[songToChange].musicKey = newKey;
                console.log(`Changed the key of ${songToChange} to ${newKey}!`)
            } else {
              console.log(`Invalid operation! ${songToChange} does not exist in the collection.`)
            }
        }
    }

    let tuple = Object.entries(songsObject);
    for (let [k, v] of tuple) {
        console.log(`${k} -> Composer: ${v.composer}, Key: ${v.musicKey}`)
    }
}




// // Author's solution:
// function solve(input) {
//     let rows = Number(input.shift());

//     let piecesMap = {};

//     // Add to map
//     for (let index = 0; index < rows; index++) {
//         let [ piece, composer, key ] = input.shift().split('|');
        
//         piecesMap[piece] = { composer, key };
//     }

//     // Parse commands
//     input.forEach(line => {
//         let tokens = line.split('|');
//         let command = tokens.shift();

//         if (command === 'Add') {
//             let [ piece, composer, key ] = tokens;

//             if (!piecesMap.hasOwnProperty(piece)) {
//                 piecesMap[piece] = { composer, key };
//                 console.log(`${piece} by ${composer} in ${key} added to the collection!`);
//             } else {
//                 console.log(`${piece} is already in the collection!`);
//             }
//         } else if (command === 'Remove') {
//             let piece = tokens.shift();

//             if (!piecesMap.hasOwnProperty(piece)) {
//                 console.log(`Invalid operation! ${piece} does not exist in the collection.`);
//             } else {
//                 delete piecesMap[piece];
//                 console.log(`Successfully removed ${piece}!`);
//             }
//         } else if (command === 'ChangeKey') {
//             let [ piece, newKey ] = tokens;

//             if (!piecesMap.hasOwnProperty(piece)) {
//                 console.log(`Invalid operation! ${piece} does not exist in the collection.`);
//             } else {
//                 piecesMap[piece].key = newKey;
//                 console.log(`Changed the key of ${piece} to ${newKey}!`);
//             }
//         }
//     });

//     let entries = Object.entries(piecesMap);

//     for (const [ piece, info ] of entries) {
//         console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`);
//     }
// }

// ==================================================================================

// // Lecturer's solution:
// function pianist(input) {
//     let n = Number(input.shift());
//     let piecesCollection = {};
//     let commandParser = {
//       'Add': addPiece,
//       'Remove': removePiece,
//       'ChangeKey': changeKey,
//     };
  
//     for (let index = 0; index < n; index++) {
//       const [ piece, composer, key ] = input.shift().split('|');
//       piecesCollection[piece] = { composer, key };
//     }
  
//     for (let inputLine of input) {
//       if (inputLine === 'Stop') {
//         break;
//       }
  
//       let commandTokens = inputLine.split('|');
//       let command = commandTokens[0];
//       commandParser[command](...commandTokens.slice(1));
//     }
  
//     for (const piece in piecesCollection) {
//       const { key, composer } = piecesCollection[piece];
//       console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
//     }
  
//     function addPiece(piece, composer, key) {
//       if (!piecesCollection.hasOwnProperty(piece)) {
//         piecesCollection[piece] = { composer, key };
//         console.log(`${piece} by ${composer} in ${key} added to the collection!`);
//       } else {
//         console.log(`${piece} is already in the collection!`);
//       }
//     }
  
//     function removePiece(piece) {
//       if (piecesCollection.hasOwnProperty(piece)) {
//         delete piecesCollection[piece];
//         console.log(`Successfully removed ${piece}!`);
//       } else {
//         console.log(`Invalid operation! ${piece} does not exist in the collection.`);
//       }
//     }
  
//     function changeKey(piece, newKey) {
//       if (piecesCollection.hasOwnProperty(piece)) {
//         piecesCollection[piece].key = newKey;
//         console.log(`Changed the key of ${piece} to ${newKey}!`);
//       } else {
//         console.log(`Invalid operation! ${piece} does not exist in the collection.`);
//       }
//     }
//   }