// 7. Write a function that prints out number of input arguments of the function.

function numberOfArguments() {

    return arguments.length;
}

var test = numberOfArguments('maja', 1, 4, 'abc', true);
console.log(test);
