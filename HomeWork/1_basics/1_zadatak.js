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
