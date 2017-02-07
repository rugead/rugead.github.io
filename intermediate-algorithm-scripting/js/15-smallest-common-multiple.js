'use strict';

// noprotect
function smallestCommons(arr) {

  var highNum = arr[0] > arr[1] ? arr[0] : arr[1];
  var lowNum = arr[0] < arr[1] ? arr[0] : arr[1];
  var smallestCommon = highNum;
  var remainderArr = ['false'];

  function iterator(x, y) {
    remainderArr = [];
    for (var i = y + 1; highNum > y; y++) {
      var remainder = x % y;
      if (remainder !== 0) {
        remainderArr.push('false');
      } else {
        remainderArr.push('true');
      }
    }
  }

  function tester() {
    while (remainderArr.indexOf('false') > -1) {
      smallestCommon = smallestCommon + highNum;
      iterator(smallestCommon, lowNum);
    }
  }

  tester();
  console.log('RETURN => ', smallestCommon);
  return smallestCommon;
}

smallestCommons([1, 5]); // should return a number.
smallestCommons([1, 5]); // should return 60.
smallestCommons([5, 1]); // should return 60.
smallestCommons([1, 13]); // should return 360360.
smallestCommons([23, 18]); // should return 6056820.