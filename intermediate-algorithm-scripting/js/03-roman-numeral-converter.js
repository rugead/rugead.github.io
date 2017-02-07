'use strict';

function convertToRoman(num) {
  var table = [{ M: 1000 }, { CM: 900 }, { D: 500 }, { CD: 400 }, { C: 100 }, { XC: 90 }, { L: 50 }, { XL: 40 }, { X: 10 }, { IX: 9 }, { V: 5 }, { IV: 4 }, { I: 1 }];
  var romanNum = '';

  for (var i = 0; i < table.length; i++) {
    for (var k in table[i]) {
      while (num >= table[i][k]) {
        num = num - table[i][k];
        romanNum = romanNum + k;
      }
    }
  }
  console.log('RETURN => ', romanNum);
  return romanNum;
}
convertToRoman(9501);