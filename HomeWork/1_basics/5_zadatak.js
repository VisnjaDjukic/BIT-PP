/* 5. Write a function that checks if the two arrays are equal. Assume that arrays are equal if they have all the same elements. Also assume that two compared arrays have the same number of elements. */

function ifArraysEqual(firstArray, secondArray) {

    var i;
    if (firstArray.length === secondArray.length) {
        for (i = 0; i < firstArray.length; i++) {
            if (firstArray[i] !== secondArray[i]) {
                return 'The elements of arrays are NOT equal!';
            }
        }
        return 'The elements of arrays are equal!';
    }
    else {
        return 'The arrays does NOT have the same length!'
    }
}

var test = ifArraysEqual([1, 2, 4], [1, 2, 4]);
console.log(test);
