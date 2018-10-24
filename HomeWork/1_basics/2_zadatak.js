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
