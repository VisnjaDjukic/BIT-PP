/* 10. Write object representing a book, an animal and a person. Create constructor functions for same entities. */
var first = {

    book: 'java script',
    animal: 'cat',
    person: 'Marry'
};

var Example = function (book, animal, person) {
    this.book = book;
    this.animal = animal;
    this.person = person;
}

var second = new Example('CSS/HTML', 'dog', 'John');

// console.log(first);
// console.log(second);
// console.log(first.animal);
// console.log(second.person);