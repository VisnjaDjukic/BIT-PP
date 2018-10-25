// var input = [1, undefined, 2, NaN, 3, 4, 5, "six"]

// var output = transformArray(input, function (param) {
//    return param + "";
// });

// console.log(output);

// function transformArray(array, action) {
//    var result = [];
//    for (var index = 0; index < array.length; index++) {
//        var element = array[index];
//        result[index] = action(element);
//    }
//    return result;
// }

// var input = [1, undefined, 2, NaN, 3, 4, 5, "six"]

// var output = transformArray(input, toString1);

// console.log(output);

// function transformArray(array, action) {
//     var result = [];
//     for (var index = 0; index < array.length; index++) {
//         var element = array[index];
//         result[index] = action(element);
//     }
//     return result;
// }

// function toString1(param) {
//     return param + "";
// }

// var input = [1, undefined, 2, NaN, 3, 4, 5, "six"]
// var output = transformArray(input);

// console.log(output);

// function transformArray(array) {
//     var result = [];
//     function toString1(param) {
//         return param + "";
//     }
//     for (var index = 0; index < array.length; index++) {
//         var element = array[index];
//         result[index] = toString1(element);
//     }
//     return result;
// }

// var input = [1, undefined, 2, NaN, 3, 4, 5, "six"]
// var output = transformArray(input);

// console.log(output);


function transformArray(array) {
    var result = [];

    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        result[index] = (function (param) {
            return param + "";
        })(element);
    }
    return result;
}

var input = [1, undefined, 2, NaN, 3, 4, 5, "six"]
var output = transformArray(input);

console.log(output);


