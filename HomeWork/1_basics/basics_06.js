/* 6. Write a function that reverses a word or sentence. Cover cases if sentence is not provided. */

function reverseWordOrSentence(inputString) {

    var i;
    var newString = '';

    if (inputString !== '') {

        for (i = inputString.length - 1; i >= 0; i--) {
            newString += inputString[i];

        }
        return newString;
    }
    else {
        return 'Please input word or sentence!'
    }
}
console.log(reverseWordOrSentence(''));
