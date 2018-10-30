"use strict"
    (function () {
        console.log("Hi");

        function Genre(name) {
            this.name = name;

            this.getDataToGenre = function () {
                return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
            }
        }
        function Movie(title, genre, length) {
            this.title = title;
            this.genre = new Genre(genre);
            this.length = length;

            this.getDataToMovie = function () {
                return this.title + ", " + this.length + " min, " + this.genre.getDataToGenre();
            }
        }
        // function Program(date, movie) {
        //     this.date = date;
        //     this.listOfMovies = [];
        //     this.numberOfMovies = 0;

        //     this.addMovie = function () {

        //         this.listOfMovies.push(movie);
        //         this.numberOfMovies++;
        //     }
        // }
        // function Festival(name, totalNumberOfMovies) {
        //     this.name = name;
        //     this.totalNumberOfMovies = totalNumberOfMovies;
        // }

        var action = new Genre("Action");
        var romance = new Genre('Romance');
        console.log(action.getDataToGenre());
        var movie1 = new Movie("Titanik", "Romance", 240);
        console.log(movie1.getDataToMovie());
        // var program1 = new Program(new Date(2018 - 11 - 01), 18, );
        // program1.addMovie(new Movie("Titanik", new Genre('Romance'), 240));
        // console.log(program1.listOfMovies);

    })();