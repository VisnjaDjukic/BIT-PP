(function () {
    console.log('Hi');

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        this.getData = function () {
            return name + ' ' + surname;
        };
    }

    function Seat(number, category) {

        this.number = number;
        this.category = category;


        if (typeof number === 'undefined' || number === '') {
            this.number = Math.floor((Math.random() * 90) + 10);
        }
        else if (arguments[0] === 'e') {
            this.number = Math.floor((Math.random() * 90) + 10);
            this.category = 'e';
        }
        else if (arguments[0] === 'b') {
            this.number = Math.floor((Math.random() * 90) + 10);
            this.category = 'b';
        }
        if (typeof category === 'undefined') {

            this.category = 'e';
        }

        this.getData = function () {
            return this.number + ', ' + this.category.toUpperCase();
        };
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;

        this.getData = function () {
            return '\t' + seat.getData() + ', ' + person.getData();
        };
    }

    function Flight(relation, date) {

        this.relation = relation;
        this.date = date;
        this.listOfPassengers = [];

        this.newAbbForRelation = function () {

            var splitDestination = this.relation.split(' - ');
            //console.log(splitDestination);
            var firstAbb = lastConsonant(splitDestination[0]);
            var secondAbb = lastConsonant(splitDestination[1]);

            function lastConsonant(string) {
                var i;
                var temp;
                for (i = string.length - 1; i >= 0; i--) {

                    if (string[i].toLowerCase() != 'a' && string[i] != 'e' && string[i] != 'i' && string[i] != 'o' && string[i] != 'u') {
                        temp = string[i];
                        break;
                    }
                }
                return string[0] + temp.toUpperCase();
            }

            return firstAbb + ' - ' + secondAbb;
        }

        this.addPassenger = function (newPassenger) {
            this.listOfPassengers.push(newPassenger);
        };

        this.getData = function () {

            var final = '';

            for (var i = 0; i < this.listOfPassengers.length; i++) {

                final += '\t' + this.listOfPassengers[i].getData() + '\n';

            }

            return this.date.toLocaleDateString() + ', ' + this.newAbbForRelation() + '\n' + final;
        }
    }


    function Airport(name) {
        this.name = name;
        this.listOfFlights = [];
        this.totalNumberOfPassengers = 0;

        this.addFlight = function (newFlight) {
            this.listOfFlights.push(newFlight);
        };

        this.getData = function () {

            var final = '';

            for (var i = 0; i < this.listOfFlights.length; i++) {

                final += '\t' + this.listOfFlights[i].getData() + '\n';

                this.totalNumberOfPassengers += this.listOfFlights[i].listOfPassengers.length;
            }

            return 'Airport: ' + this.name + ', ' + 'total passengers: ' + this.totalNumberOfPassengers + '\n' + final;
        };
    }

    function createFlight(relation, date) {

        var randomFlight = new Fight(realtion, date);
        return randomFlight;
    }

    function createPassenger(name, surname, seatNumber, category) {

        var randomPerson = new Person(name, surname);
        var randomSeat = new Seat(seatNumber, category);
        var randomPassenger = new Passenger(randomPerson, randomSeat);

        return randomPassenger;

    }

    var flight1 = new Flight('Belgrade - New York', new Date('2017-10-25'));
    var flight2 = new Flight('Barcelona - Belgrade', new Date('2017-11-11'));

    var passenger1 = createPassenger('John', 'Snow', 1, 'b');
    var passenger2 = createPassenger('Cersei', 'Lanister', 2, 'b');
    var passenger3 = createPassenger('Daenerys', 'Targaryen', 14);
    var passenger4 = createPassenger('Tyrion', 'Lannister');

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);


    var airport1 = new Airport('Nikola Tesla');
    airport1.addFlight(flight1);
    airport1.addFlight(flight2);

    console.log(airport1.getData());

    // var person1 = new Person('Dusica', 'Savic');
    // console.log(person1.getData());

    // var person2 = new Person('Visnja', 'Djukic');
    // var seat2 = new Seat();

    // var seat1 = new Seat('', 'b');
    // console.log(seat1.getData());

    // var seat2 = new Seat();
    // console.log(seat2.getData());

    // var passenger1 = new Passenger(person1, seat1);
    // var passenger2 = new Passenger(person2, seat2);

    // console.log(passenger1.getData());
    // console.log(passenger2.getData());

    // var flight1 = new Flight('Belgrade-Paris', new Date('2018-12-31'));
    // var flight2 = new Flight('Barcelona-Belgrade', new Date('2019-01-07'));
    // flight1.addPassenger(passenger1);
    // flight1.addPassenger(passenger2);
    // console.log(flight1.listOfPassengers);

    // console.log(flight1.getData());

    // var person3 = createPassenger('visnja', 'Mrdelj', '', 'b');
    // console.log(person3);
    // var person4 = createPassenger('Mira', 'Grbic', '', 'e');
    // console.log(person4);



})();




