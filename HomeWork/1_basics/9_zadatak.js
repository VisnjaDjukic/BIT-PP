// 9. Write a function that replaces all white spaces from string with dash (-).

var replaceWhiteSpaces = function (inputString) {

    var i;
    newString = '';
    for (i = 0; i < inputString.length; i++) {
        if (inputString[i] === ' ') {
            newString += '-'
        }
        else {
            newString += inputString[i];
        }
    }
    return newString;
}
console.log(replaceWhiteSpaces('ne znam sta bih mogla da napisem'));
