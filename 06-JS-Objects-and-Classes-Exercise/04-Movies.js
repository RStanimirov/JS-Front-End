function stringifyMovie(input) {
    
    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }

    // addedMoviesNamesArray = []; // ['Fast and Furious', 'Godfather']
    let addedMoviesObjectsArray = [];

    for (let x of input) {
        if (x.includes('addMovie')) {
            x = x.replace('addMovie', '').trim();
            let addedMovie = new Movie(x);
            addedMoviesObjectsArray.push(addedMovie);


        }else if (x.includes('directedBy')){
            x = x.split('directedBy');
            let nameToCheck = x[0].trim();
            let directorToAdd = x[1].trim();

            for (let obj of addedMoviesObjectsArray) {
                if (obj.name === nameToCheck) {
                    obj.director = directorToAdd;
                }
            }
            
        }else if (x.includes('onDate')) {
            x = x.split('onDate');
            let nameToCheck = x[0].trim();
            let dateToAdd = x[1].trim();

            for (let obj of addedMoviesObjectsArray) {
                if (obj.name === nameToCheck) {
                    obj.date = dateToAdd;
                }
            }
        }
    }

    // console.log(addedMoviesObjectsArray);

    for (let movie of addedMoviesObjectsArray) {
        if (movie.director && movie.date) {
            let jsonMovie = JSON.stringify(movie);
            console.log(jsonMovie);
        }

    }
}

stringifyMovie([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )

    // stringifyMovie([
    //     'addMovie The Avengers',
    //     'addMovie Superman',
    //     'The Avengers directedBy Anthony Russo',
    //     'The Avengers onDate 30.07.2010',
    //     'Captain America onDate 30.07.2010',
    //     'Captain America directedBy Joe Russo',
    //     ]
    //     )