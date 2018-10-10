var s = 'anavolimilovana';
var pal = true;
var i;
var j;

for (i = 0, j = s.length - 1; i < j; i++ , j--) {

    if (s[i] != s[j]) {
        pal = false;
        break;
    }
}
if (pal == true) {
    console.log('string is pal');
} else {
    console.log('string is not pal');
}


var s = 'anavolimilovana';
var i;
var j;

for (i = 0, j = s.length - 1; i < j; i++ , j--) {

    if (s[i] != s[j]) {
        break;
    }
}
if (i == j) {
    console.log('string is pal');
} else {
    console.log('string is not pal');
}


var s = 'javascript';
var b = "";
var i;


for (i = s.length - 1; i >= 0; i--) {

    b = b + s[i];

}

console.log(b);



var s = 'javascript';
var b = "";
var i;


for (i = s.length - 1; i >= 0; i--) {

    b = b + s[i];

}

console.log(b);

