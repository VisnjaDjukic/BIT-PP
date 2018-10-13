// 5

var n = 5;

var v;
var k;
var s;

for (v = 0; v < n; v++) {
  if (v == 0 || v == n - 1) {
    // zadatak: odstampati n zvezdica
    s = "";
    for (k = 0; k < n; k++) {
      s = s + "*";
    }
  } else {
    // zadatak: odstampati *, n-2 blanko karaktera, *
    s = "*";
    for (k = 1; k <= n - 2; k++) {
      s = s + " ";
    }
    s = s + "*";
  }

  console.log(s);
  //console.log("\n");
}

// 5a

var n = 15;

if (n % 2 == 0) {
  console.log("Pogresna vrednost!");
} else {
  // provera da li je n parno
  var i;
  var j;
  var s;

  for (i = 0; i < n; i++) {
    s = "";
    for (j = 0; j < n; j++) {
      if (j == i || i + j == n - 1) {
        s = s + "*";
      } else {
        s = s + " ";
      }
    }
    console.log(s);
    //console.log("\n");
  }
}

// 5b
var n = 6;
var i;
var j;
var s;

if (n % 2 == 0) {
  console.log("Unesite neparan broj!");
} else {
  for (i = 0; i < n; i++) {
    s = "";
    for (j = 0; j < n; j++) {
      if (i == (n - 1) / 2 || j == (n - 1) / 2) {
        s += "*";
      } else {
        s += " ";
      }
    }
    console.log(s);
  }
}

// 6

var arr = [5, 3, 7];

for (i = 0; i < arr.length; i++) {
  s = "";
  for (j = 0; j < arr[i]; j++) {
    s += "*";
  }
  console.log(s);
}

// 7

var num = 465;

if (typeof num == "number") {
  var str = num + "";
  console.log(str.length);
} else {
  console.log("Enter a valid number");
}

// 3

var n = 3460;
if (n >= 100 && n <= 999) {
  console.log("Jeste");
} else {
  console.log("Nije");
}

var n = 346; // 3*10^2 + 4*10^1 + 6
var last_digit;
console.log(n % 10);
console.log((n - (n % 10)) / 10);

while (n != 0) {
  last_digit = n % 10;
  console.log(last_digit);
  n = (n - last_digit) / 10;
}

// 8

var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
var i;
var sum = 0;

for (i = 0; i < a.length; i++) {
  if (a[i] === e) {
    sum++;
  }
}
console.log(sum);

