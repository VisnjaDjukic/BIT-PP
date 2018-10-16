// Push funkcija
// (1) pravimo novi niz

function push(array, number) {
    var i;
    var newArray = [];

    for (i = 0; i < array.length; i++) {

        newArray[i] = array[i];

    }

    newArray[i] = number;
    return newArray;
}

var array;
array = push([1, 5, 6, 8], 10);
console.log(array);


// (2) modifikacija postojeceg niza
function pushInPLace(array, number) {

    array[array.length] = number;

}

var array;
pushInPLace(array, 10);
console.log(array);
