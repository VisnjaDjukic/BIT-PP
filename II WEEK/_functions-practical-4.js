//1 Write a program that checks if a given element e is in the array a.
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

function find(e, a) {
  var i;
  var fin;

  for (i = 0; i < a.length; i++) {
    if (e == a[i]) {
      fin = "Yes";
      break;
    }

    fin = "No";
  }

  return fin;
}

var test = find(7, [5, -4.2, 3, 7]);
console.log(test);

//2 Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multiple(a) {
  var i;
  var j;
  var array = [];

  for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      array[i] = 2 * a[i];
    } else {
      array[i] = a[i];
    }
  }
  return array;
}

var test = multiple([-3, 11, 5, 3.4, -8]);
console.log(test);

//3 Write a program that finds the minimum of a given array and prints out its value and index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function findMin(a) {
  var i;
  var min = a[0];
  var index;
  var rez;

  for (i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
      index = i;
    }
    rez = min + ", " + index;
  }
  return rez;
}

var test = findMin([4, 2, 2, -1, 6]);
console.log(test);

//4 Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

function secondMin(a) {
  var i;
  var j;
  var min = a[0];
  var min2 = a[0];

  for (i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
    }
  }
  for (j = 0; j < a.length; j++) {
    if (a[j] < min2 && a[j] > min) {
      min2 = a[j];
    }
  }
  return min2;
}

var test = secondMin([4, 2, 2, -1, 6]);
console.log(test);

//5 Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function sumPos(a) {
  var i;
  var rez = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      rez += a[i];
    }
  }
  return rez;
}

var test = sumPos([3, 4, 11, -5, -3, 2]);
console.log(test);

//6 Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.

function symmetric(a) {
  var i;
  var j;
  var fin;

  for (i = 0, j = a.length - 1; i < j; i++, j--) {
    if (a[i] !== a[j]) {
      fin = "The array is NOT symetric!";
      break;
    }
    fin = "The array is symetric!";
  }
  return fin;
}

var test = symmetric([3, 4, 12, 8, 12, 4, 3]);
console.log(test);

//7 Write a program that intertwines two arrays. You can assume the arrays are of the same length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function interT(a, b) {
  var i;
  var fin = [];

  for (i = 0; i < a.length; i++) {
    fin[2 * i] = a[i];

    fin[2 * i + 1] = b[i];
  }
  return fin;
}

var test = interT([4, 5, 6, 2], [3, 8, 11, 9]);
console.log(test);

//8 Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concat(a, b) {
  var i;
  var fin = [];

  for (i = 0; i < a.length; i++) {
    fin[i] = a[i];

    fin[i + a.length] = b[i];
  }
  return fin;
}

var test = concat([4, 5, 6, 2], [3, 8, 11, 9]);
console.log(test);

//9 Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

function delEle(e, a) {

    var i;
    var j = 0;
    var fin=[];

    for (i = 0; i < a.length; i++ ) {

        if (e === a[i]) {

            delete a[i];
        }

        if (typeof a[i] === "number") {

            fin[j] = a[i];
            j++;
        }
    }
    return fin;
}

var test = delEle(2, [4, 6, 2, 8, 2, 2] );
console.log(test);

//10 Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function insGivEl(e, p, a) {

    var i;

    var fin = [];

    for (i = 0; i < a.length; i++) {

        if (i < p-1) {
            fin[i] = a[i];
        }
        else {
            fin [i+1] = a[i];
        }

        if (i === p-1) {

            fin[i] = e;
        }
    }
 return fin;
}

var test = insGivEl(78, 1, [2, -2, 33, 12, 5, 8]);
console.log(test);