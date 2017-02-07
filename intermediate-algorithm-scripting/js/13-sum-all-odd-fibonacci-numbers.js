'use strict';

function sumFibs(num) {
  var a = 0;
  var b = 1;
  var f = 1;
  var c = 0;

  for (var i = 0; i <= num; i++) {
    if (f > num) {
      break;
    }

    if (f % 2 !== 0) {
      c = c + f;
    }

    f = a + b;
    a = b;
    b = f;
  }
  console.log('RETURN => ', c);
  return c;
}
sumFibs(10);
sumFibs(1); // should return a number.
sumFibs(1000); // should return 1785.
sumFibs(4000000); // should return 4613732.
sumFibs(4); // should return 5.
sumFibs(75024); // should return 60696.
sumFibs(75025); // should return 135721.