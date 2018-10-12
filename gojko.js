// 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [15, 0, 15, false, -22, undefined, 15, null]

function join(a) {
    var i;
    var s = '';


    for (i = 0; i < a.length; i++) {

        if (a[i] == 15) {
            continue;
        }

        s = s + a[i];
    }
    return s;
}


var test = join([15, 0, 15, false, -22, undefined, 15, null]);

console.log(test);



//a kako da array ispisemo unazad

var a;
var i;
var j;
var s = [];

a = [5, 6, 8, "str"];

for (i = a.length - 1, j = 0; i >= 0, j < a.length; i-- , j++) {

    s[j] = a[i];

}
console.log(s);

//b

var a;
var i;
var s = [];

a = [5, 6, 8, "str"];

for (i = a.length - 1; i >= 0; i--) {

    s[s.length] = a[i];
}
console.log(s);


function sabiranje(a, b) {

    if (typeof b != "undefined") {
        var rez = a + b;
    }
    else {
        rez = "Greska"
    }
    return rez;
}

var test = sabiranje(1);
console.log(test);
