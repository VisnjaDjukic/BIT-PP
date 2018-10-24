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