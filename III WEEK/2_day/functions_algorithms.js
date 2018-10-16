var sub = function (a, b) {
    return a - b;
};

var result;
result = sub(381, 526);
console.log(result);


var f = function () { };

// naci minimalni i maksimalni element niza
// [3, 7, 2, 1, 8, 3]

function findMinAndMax(array) {
    var minValue = array[0]; // minValue = 3
    var maxValue = array[0]; // maxValue = 3
    var i;
    var currentElement;

    for (i = 1; i < array.length; i++) {
        // i = 1 : currentElement <-- 7
        // i = 2 : currentElement <-- 2
        // i = 3 : currentElement <-- 1
        // i = 4 : currentElement <-- 8
        // i = 5 : currentElement <-- 3

        currentElement = array[i];

        if (currentElement < minValue) {
            minValue = currentElement;
        }

        if (currentElement > maxValue) {
            maxValue = currentElement;
        }

        // i = 1: minValue = 3, maxValue = 7 
        // i = 2: minValue = 2, maxValue = 7 
        // i = 3: minValue = 1, maxValue = 7 
        // i = 4: minValue = 1, maxValue = 8 
        // i = 5: minValue = 1, maxValue = 8 

    }

    var result = [];
    result[0] = minValue;
    result[1] = maxValue;
    return result;

    // return [minValue, maxValue];
}

var a = [3, 7, 2, 1, 8, 3];
var minMaxValues = findMinAndMax(a);
console.log("MIN: " + minMaxValues[0] + " MAX: " + minMaxValues[1]);

// alternativni poziv
//console.log(findMinAndMax(a));


//zadatak: dodajemo zadati broj na kraj niza
// [1, 5, 6, 8], 10 --> [1, 5, 6, 8, 10]
// 1) pravimo novi niz 
// 2) modifikujemo postojeci niz

//1)
function push(array, number) {

    var newArray = [];
    var i;

    for (i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }

    newArray[i] = number;

    return newArray;
}

var array;
array = push([1, 5, 6, 8], 10);
console.log(array);


//2) 
function pushInPlace(array, number) {

    array[array.length] = number;

}
var array = [1, 5, 6, 8];
pushInPlace(array, 10);
console.log(array);


//zadata: dodajemo zadati broj na pocetak niza
// [1, 5, 6, 8], 10 --> [10, 1, 5, 6, 8]
// 1) pravimo novi niz 
// 2) modifikujemo postojeci niz


//1)
function shift(array, number) {

    var newArray = [];
    var i;

    newArray[0] = number;
    for (i = 0; i < array.length; i++) {
        newArray[i + 1] = array[i];
    }

    // alternativa:
    // for (i = 1; i <= array.length; i++) {
    //     newArray[i] = array[i-1];
    // }

    return newArray;
}

var array;
array = shift([1, 5, 6, 8], 10);
console.log(array);


//2
function shiftInPlace(array, number) {

    var i;

    // i = 3 array[4] <-- array[3]  [1, 5, 6, 8] 8
    // i = 2 array[3] <-- array[2]  [1, 5, 6, 6] 8
    // i = 1 array[2] <-- array[1]  [1, 5, 5, 6] 8
    // i = 0 array[1] <-- array[0]  [1, 1, 5, 6] 8

    for (i = array.length - 1; i >= 0; i--) {
        array[i + 1] = array[i];
    }

    //  [10, 1, 5, 6] 8

    array[0] = number;
}

var array = [1, 5, 6, 8];
shiftInPlace(array, 10);
console.log(array);








