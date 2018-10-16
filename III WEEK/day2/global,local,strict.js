///////////////////////////////////////

var c = 10;

function test(a, b) {
    var c = 5;
    console.log(a, b, c);

}
test(6, 11);
console.log(c)
/////////////////////////////////////////

var c;

function test(a, b) {
    c = 5;
    console.log(a, b, c);

}
test(6, 11);

console.log(c);


///////////////////////////////////////////
"use strict";
var c = 10;

function test(a, b) {
    d = 5;
    console.log(a, b, d);

}
test(6, 11);

////////////////////////////////////////

var c = 10;

function test(a, b) {
    var d = 15;
    var a = 17;//ima prednost u odnosu na parametar
    console.log(a, b, d);

}
test(6, 11);

/////////////////////////
console.log(i);

for (var i = 0; i < 4; i++) { //i ima globalni karatkter u ovom slucaju
    console.log(i);
}
console.log(i);
//
console.log(i);

for (let i = 0; i < 4; i++) { //let je blokovska promenljiva, vezana je samo za block-u u kome se deklarise
    console.log(i);
}
console.log(i);



