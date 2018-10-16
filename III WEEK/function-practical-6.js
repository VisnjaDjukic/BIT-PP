 //1 Write a function to count vowels in a provided string. If you are not aware of indexOf function, try to use switch statement.
// Vowels are a, e, i, o, and u as well as A, E, I, O, and U.  
 	 
 
var sum = function (a) { var i;	 
var cnt = 0; 
 	 
for (i = 0; i < a.length; i++) {
 	 
switch (a[i]) {  	 case "a":
cnt++;	 break; case "e": 
cnt++;	 
break; case "i": 
cnt++; break; case "o": 
cnt++;	 
break; case "u": 
cnt++;	 
break; 
}	 
} 
return cnt; 
};	 
console.log(sum("milosdjuretanovic"));  	 
 
//2 Write a function that combines two arrays by alternatingly taking elements.
 	 
// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
 	 
var twoArrays = function (a, b) { var i;	 var j = 0; var newArray = []; 
 	 
for (i = 0; i < a.length; i++) {
newArray[j++] = a[i];	 
newArray[j++] = b[i]; 
}	 
return newArray; 
 	 
}   
console.log(twoArrays(["a", "b", "c"], [1, 2, 3]));
 	 
 
//3 Write a function that rotates a list by k elements.
 	 
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
 	 
 
var rotate = function (a, k) {
 	 
var i = 0; var j = 0; var Arr1 = []; 
 	 
 
for (i = k; i < a.length; i++) {
 	 
Arr1[j] = a[i]; j++;	  	 
}
for (i = 0; i < k; i++) { 
 	 
Arr1[j] = a[i]; j++;	 
}	 
return Arr1; 
};	 
  
console.log(rotate([1, 2, 3, 4, 5, 6], 2));  	 
 
//4 Write a function that takes a number and returns array of its digits.
 	 var array = function (a) { var i;	 
 	 
var newString = ""; newString += a;	 
var finalString = []; 
 	 
for (i = 0; i < newString.length; i++) {
finalString[i] = newString[i];	 
 	 
}   
return finalString;
}	 
  
console.log(array(515469));
 	 
 
//5 Write a program that prints a multiplication table for numbers up to 12.
 	 var multiTable = function () {
 	 
var i; var j; var result = ""; 
 	 
for (i = 1; i <= 12; i++) {
 	 
for (j = 1; j <= 12; j++) {
 	 
console.log(i + " * " + j + " = " + i * j); }	 
} 
return; 
}	 
  
console.log(multiTable());
 	 
 
//6 Write a function to input temperature in Centigrade and convert to Fahrenheit.
 	 var celsius = function (a) {
 	 
var fa = a * 9 / 5 + 32;
 	 
return fa;
 	 
};
console.log(celsius(5)); 
 	 
//7 Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
 	 
var maxEl = function (a) {
 	 
var i;
var max = -Infinity; 
 	 
for (i = 0; i < a.length; i++) {
 	 
if ((a[i] / a[i]) === 1 && typeof a[i] !== "string") {
 	 if (a[i] > max) {
 	 
max = a[i];
}	 
} } 
return max; 
};	 
console.log(maxEl(["4", NaN, 68, undefined, 5, 6, "75", false])); 
 	 
 
//8 Write a function to find the maximum and minimum elements. Function returns an array.
 	 var maxAndMin = function (a) {
 	 var i;
var max = -Infinity; var min = Infinity; var newArray;	 
 	 
for (i = 0; i < a.length; i++) {
 	 
if ((a[i] / a[i]) === 1 && typeof a[i] !== "string") {
 	 if (a[i] > max) {
 	 
max = a[i];
}	 
  
if (a[i] < min) {
 	 
min = a[i];
}	 
} 
newArray = [max, min]; 
}	 
return newArray; 
};	 
console.log(maxAndMin(["4", NaN, 68, undefined, -1, 6, "75", false, 124])); 
 	 
 
 
//9 Write a function to find the median element of array.
 	 
var median = function (a) {
 	 
var i; var med; 
 	 
if (a.length % 2 == 0) {
 	 
med = (a[a.length / 2] + a[a.length / 2 - 1]) / 2;
}	 else { 
med = a[(a.length - 1) / 2]; 
} return med; 
};	 
  
console.log(median([1, 2, 3, 4, 5, 6, 7]));
 
