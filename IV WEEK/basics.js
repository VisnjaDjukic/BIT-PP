// 1. Write a function that prints all numbers between two provided numbers.

function printsBetweenTwo(num1, num2) {

    if (num1 < num2) {
        var i;
        var j = 0;
        var newArray = [];
        for (i = num1; num1 <= num2; num1++) {
            newArray[j] = num1;
            j++;
        }
        return newArray;
    }
    else {
        return 'Wrong input number! Try again!';
    }
}
console.log(printsBetweenTwo(30, 18));


// 2. Write a function that checks if the number is positive or negative.

var test = function isPositive(inputNumber) {

    if (inputNumber >= 0) {
        return 'The number is POSITIVE!';
    }
    else {
        return 'The number is NEGATIVE!';
    }
};

console.log(test(-18));


/* 3. Write a function that outputs array of every second character from the provided string. In case that string is not provided outputs array empty array. */

console.log((function (inputString) {


    var i;
    var j = 0;
    var newArray = [];
    for (i = 0; i < inputString.length; i += 2) {
        newArray[j] = inputString[i];
        j++;
    }
    return newArray;
}
)('visnjadjukic'));


/* 4. Write a function that checks if the first and the last element in the array or string are the same. */

var test = function (inputArrOrStr) {

    if (inputArrOrStr[0] === inputArrOrStr[inputArrOrStr.length - 1]) {
        return 'The first and the last element are the same!'
    }
    else {
        return 'The first and the last element are NOT the same!'
    }
}
console.log(test(['kafak', 2, 3, 'kafakt']));

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

var test = ifArraysEqual([1, 2, 4], [1,2, 4]);
console.log(test);




// 6. Write a function that reverses a word or sentence. Cover cases if sentence is not provided.
// 7. Write a function that prints out number of input arguments of the function.
// 8. Write a function that sets some global variable to the new value.
// 9. Write a function that replaces all white spaces from string with dash (-).
// 10.Write object representing a book, an animal and a person. Create constructor functions for
// same entities.