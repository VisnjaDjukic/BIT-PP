//primer

function string() {
  var zbir = 0;

  for (var i = 0; i < arguments.length; i++) {
    zbir += arguments[i];
  }
  return zbir;
}

var a = string(1, 2, "str3", 4, 5);
console.log(a);

//1

function string(a) {
  var rez = false;
  if (typeof a == "string") {
    rez = true;
  }
  return rez;
}

var test = string(NaN);
console.log(test);

//2

function string(a) {
  var rez = false;
  if (a == " ") {
    rez = true;
  }
  return rez;
}

var test = string(" ");
console.log(test);
