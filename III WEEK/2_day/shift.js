
// (1) shift funckija

function shift(array, number) {

    var newArray = [];
    var i;

    newArray[0] = number;

    for (i = 0; i < array.length; i++) {

        newArray[i + 1] = array[i];
    }
    return newArray;

    // for (i = 1; i <= array.length; i++) {

    //   newArray[i] = array[i-1];
    // }
}

var array;
array = shift([1, 5, 6, 8], 10);
console.log(array);


// (2) ShiftInPlace


function shiftInPLace(array, number) {

    var i;


    for (i = array.length - 1; i >= 0; i--) {

        array[i + 1] = array[i];

    }
    array[0] = number;
}

var array = [1, 5, 6, 8];
shiftInPLace(array, 10);
console.log(array);
