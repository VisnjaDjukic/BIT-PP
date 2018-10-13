//1.  Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insert(a, b, c) {

    var i;
    var j;
    var s1 = '';
    var s2 = '';
    var rez;


    // for: 0, c --> s1

    // for c, kraj 


    // for (i = 0; i < a.length; i++) {


    //     if (i == c) {

    //         break;
    //     }
    //     s1 = s1 + a[i];

    // }

    for (i = 0; i < c; i++) {

        s1 = s1 + a[i];

    }

    for (j = c; j < a.length; j++) {

        s2 = s2 + a[j];

    }

    rez = s1 + b + s2;

    return rez;
}

var test = insert("My random string", "JS ", 0);

console.log(test);


// 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function join(a) {
    var i;
    var s = '';

    for (i = 0; i < a.length; i++) {

        if (isFinite(a[i]) != true || a[i] == null || a[i] == undefined) {
            continue;
        }

        s = s + a[i];
    }
    return s;
}

var test = join([NaN, 0, 15, false, -22, '', undefined, 47, null]);

console.log(test);


//3  Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function falsy(a) {
    var i;
    var s = '';

    for (i = 0; i < a.length; i++) {
        if (!!a[i] == false) {
            continue;
        }
        s = s + a[i];
    }
    return s;
}
var test;
test = falsy([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(test);


//4 Write a function that reverses a number. The result must be a number.

//12345 -> 54321 // Output must be a number

function reverse(a) {
    var i;
    var s1;
    var s = '';
    var new_a = '';

    new_a = new_a + a;

    for (i = new_a.length - 1; i >= 0; i--) {

        s = s + new_a[i];
    }
    s1 = parseInt(s);

    return s1;
}

var test = reverse(12345);
console.log(test);


//5 Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2]-- > -2
[7, 9, 0, -2], 2 -- > [0, -2]


[7, 9, 0, -2, 8, 9], 3 -- > [0, -2]

function reverseLast(a, b) {

    var i;
    var s = [];

    if (typeof b != "undefined") {

        for (i = a.length - b; i < a.length; i++) {

            s[s.length] = a[i];
        }
    }

    else {
        s = a[a.length - 1];
    }
    return s;
}


var test = reverseLast([7, 9, 0, -2], 3);
console.log(test);

//6 Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]

function create(a, b) {

    var s = [];
    var i;

    for (i = 0; i < a; i++) {

        s[s.length] = b;
    }
    return s;
}
var test = create(3, "none");
console.log(test);


//7 Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number. *Probaj i na drugi nacin!

function perfect(a) {

var i;
var j;
var s = [];
var rez = 0;
var final;


for (i = 1; i <= a/2; i++) {
 
   if (a % i == 0) {

     s[s.length] = i; 
 
   }
}

for (j = 0; j < s.length; j++) {

    rez += s[j];
}

if (rez == a) {

    final = a + " is a perfect number!";
}
else {
    final = a + " is NOT a perfect number!"
}

return final;
}

var test = perfect(8128);
console.log(test);


//8 Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"

function findAWord (a, b) {
    var i;
    var s = 0;
    var rez;

    for (i = 0; i < a.length; i++) {

        if (a[i] === b[0]) {
            
            for (j = 0; j < b.length; j++) {
                if (a[i + j] !== b [j]) {
                    break;
                }
                
                if (j === b.length-1) {
                    s++;
                }
            }   
        }
        
    }

    return s;
}

var test = findAWord('aa, bb, cc, dd, aa', 'aa');
console.log(test);


//9 Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"


function hideEmail (a) {


    var i;
    var j;
    var s = 0;
    var rez = a[0];

    for (i = 0; i <= "@"; i++) {
        
        if (a[i] == ) {
         
            break;

        }
        s++;

    }

    for (j = 0; j < s; j++) {

        rez += '*';

    }

return rez;
}

var test = hideEmail("visnjadjukic@hotmail.com");
console.log(test);



// Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
