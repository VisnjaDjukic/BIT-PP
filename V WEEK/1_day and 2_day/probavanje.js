var a = 'BelgrAe';
var naseSlovo;
var rezultat;

for (i = a.length - 1; i >= 0; i--) {
    if (a[i].toLowerCase() != 'a' && a[i] != 'e' && a[i] != 'i' && a[i] != 'o' && a[i] != 'u') {
        naseSlovo = a[i];
        break;
    }
}

rezultat = a[0] + naseSlovo.toUpperCase();
console.log(rezultat);


var str = 'Belgrade - New York';

var words = str.split(' - ');
console.log(words);
// expected output: "fox"

var chars = str.split('');
console.log(chars[8]);
// expected output: "k"

var strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumped over the lazy dog."]




var relation = 'New York - Belgrade';
newAbbForRelation = function () {

    var splitDestination = relation.split(' - ');

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

    return lastConsonant(splitDestination[0]) + ' - ' + lastConsonant(splitDestination[1]);

}
console.log(newAbbForRelation());

this.relation = relation;
this.date = date;



var listOfPassengers = [];


var addPassenger = function (newPassenger) {

    if (listOfPassengers === []){
        this.listOfPassengers.push(newPassenger);
    }

    // treba da postoji neko vec u listi kako bi zavrteo krug
    // for (var i = 0; i < listOfPassengers.length; i++) {
        if (newPassenger.seat != this.listOfPassengers[i].seat) {
           this.listOfPassengers.push(newPassenger);
        }
        else {
            return 'Passenger seat number already exists!'
        }
    }           

    console.log(addPassenger('Neki cika'));