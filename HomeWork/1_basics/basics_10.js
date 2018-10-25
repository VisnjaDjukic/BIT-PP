/* 10. Write object representing a book, an animal and a person. Create constructor functions for same entities. */
var book = {

    author: 'Harlan Coben',
    title: 'The Wood',
    yearPublished: 2016,
    genre: 'thriller'
};
var animal = {

    petType: 'cat',
    name: 'Maza',
    owner: 'Jack',
    isDangerous: false
};
var person = {

    name: 'Marry',
    surname: 'Parrot',
    hasMasterDegree: true,
    age: 25
};

var Book = function (author, title, yearPublished, genre) {
    this.author = author;
    this.title = title;
    this.yearPublished = yearPublished;
    this.genre = genre;
}
var Animal = function (petType, name, owner, isDangerous) {
    this.petType = petType;
    this.name = name;
    this.owner = owner;
    this.isDangerous = isDangerous;
}
var Person = function (name, surname, hasMasterDegree, age) {

    this.name = name;
    this.surname = surname;
    this.hasMasterDegree = hasMasterDegree;
    this.age = age;
}

// var exampleBook = new Book('Marie Condo', 'My sweet home', 2012, 'romance');
// var exampleAnimal = new Animal('dog', 'Lessy', 'Rod', false);
// var examplePerson = new Person('Jennifer', 'Stood', false, 34);

// console.log(exampleBook);
// console.log(exampleAnimal);
// console.log(examplePerson);