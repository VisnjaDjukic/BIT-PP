// izmisljeni primer - najjednostavniji kvadrat sa zvezdicama
var n = 5;
var i;
var j;
var s;

for (i = 0; i < n; i++) {
    s = ''
    for (j = 0; j < n; j++) {
        s = s + "*";
    }
    console.log(s);
}

// kvadrat oivicen zvezdicama, a unutra supljina
var n = 5;
var i;
var j;
var s;

for (i = 0; i < n; i++) {

    if (i == 0 || i == n - 1) {
        s = '';
        for (j = 0; j < n; j++) {
            s = s + '*';
        }
    }

    else {
        s = '*';
        for (j = 1; j < n - 1; j++) {

            s = s + ' ';
        }
        s = s + '*';
    }

    console.log(s);
}

//samopozivacuja funkcija

(function (inputArray) {

    var inputArray;
     // neko npr n ce biti promenljiva --> duzina stringa + 2
    var i;
    var j;
    var s;
    
    for (i = 0; i < inputArray.length+2; i++) {
      if (i == 0 || i == inputArray.length+1) {
        s = '';
        for (j = 0; j < inputArray.length+2; j++) {
          s = s + '*';
        }
      }
      else {
        s = '*';
        s = s + inputArray[i-1];
        s = s + '*';
      }
      console.log(s);
    }
        })(['Idem', 'sad', 'da', 'doruckujem', 'pa', 'veceras', 'u', 'Novi Sad']);