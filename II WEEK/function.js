function sum(a, b) {
    var result;
    result = a + b;
    return result;
}

var final_result;
final_result = sum(3);
console.log(final_result);

function sum_of_all() {

    var result = 0;

    var i;

    for (i = 0; i < arguments.length; i++) {

        result = result + arguments[i];
    }
    return result;
}

var s;
s = sum_of_all(3, 6, 1, 10);
console.log(s);



//1

function max(a, b) {

    var res;
    if (a > b) {

        res = a;
    }
    else
        res = b;

    return res;
}
var final;

final = max(12, 44);

console.log(final + " je veci broj");


//2

function odd(a) {

    var res;
    if (a <= 0) {

        res = a + "je negativan broj"
    }
    else
        res = a + "je pozitivan broj"
    return res;
}

var final;

final = odd(18);

console.log(final);


//3

function digit(a) {

    var res;

    if (a > 99 && a <= 999) {

        res = a + ' je trocifreni broj';
    }
    else
        res = a + ' NIJE trocifreni broj';
    return res;
}

var final;

final = digit(100);

console.log(final);

//4

function mean(a, b, c, d) {

    var res;

    res = (a + b + c + d) / 4;

    return res;

}

var final;

final = mean(2, 4, 4, 7);

console.log(final);

//7

function mean(a) {

    a = "" + a;
    var res = a.length;

    return res;
}

var final;

final = mean(24587);

console.log(final);

//8

var a = [2, 4, 7, 8, 4, 7, 1];
var e = 7;


function array(a, e) {
    var i;
    var sum = 0;
    for (i = 0; i < a.length; i++) {

        if (a[i] == e) {

            sum++;
        }
    }
    return sum
}

var rez = array([2, 7, 7, 8, 4, 7, 1], 7);

console.log(rez);

//9

function counter(a) {

    var n = 0;
    var i;

    for (i = 0; i < a.length; i++) {

        if (a[i] % 2 == 1) {

            n++
        }
    }
    return n;
}

var final_n;

final_n = counter([3, 8, 9, 12, 14, 58]);

console.log(final_n);


//9 modifikovano


function array_odd(a) {
    var i;
    var sum = 0;
    for (i = 0; i < a.length; i++) {

        if (a[i] < 0) {

            sum += a[i];
        }
    }
    return sum
}

var rez = array_odd([2, -4, -7, 8, -4, 7, 1]);

console.log(rez);





//10

function num_lett(a) {
    var i;
    var sum = 0;
    for (i = 0; i < a.length; i++) {

        if (a[i] == "a" || a[i] == "A") {

            sum++;
        }
    }
    return sum
}

var rez = num_lett("aaviaAsnja");

console.log(rez);


//11

function conc(a, b) {
    var i;
    var sum = "";
    for (i = 1; i <= b; i++) {

        sum = sum + a;

    }
    return sum
}


var rez = conc("Ay2", 12);

console.log(rez);



