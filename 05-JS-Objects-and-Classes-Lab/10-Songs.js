function classifySongs(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songsCollection = []
    let numberOfSongs = input.shift();
    let typeOfSong = input.pop();

    for (let x of input) {
        let data = x.split('_');
        let type = data[0];
        let songName = data[1];
        let time = data[2];
        songsCollection.push(new Song(type,songName,time));
    }
    // console.log(songsCollection);

    for (let x of songsCollection) {
        if (typeOfSong === "all") {
            console.log(x.name);
        } else if (typeOfSong === x.type) {
            console.log(x.name);
        }
    }
}  

classifySongs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'some_Smooth Criminal_4:01',
    'some']
    )

