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