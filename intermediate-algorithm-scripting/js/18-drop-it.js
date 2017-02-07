'use strict';

function dropElements(arr, func) {
  var result = [];
  arr.reduce(function (acc, curr, index, array) {
    if (func(curr) && result.length == 0) {
      result = array.slice(index);
    }
  }, 0);

  /* working code
    for(var i = 0; arr.length > i; i++) {
      if (func(arr[i])){
        arr = arr.slice(i);
        break;
      }
      if (i >= arr.length-1 && !func(arr[i])){
        arr = [];
      }
    }
  
    console.log('RETURN => ', arr);
    return arr;
    */

  console.log('RESULT', result);
  return result;
}

dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
}); // should return [3, 4].
dropElements([1, 2, 3], function (n) {
  return n > 0;
}); // should return [1, 2, 3].
dropElements([1, 2, 3], function (n) {
  return n < 3;
});
dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
}); // should return [1, 0, 1].
dropElements([1, 2, 3, 7, 4], function (n) {
  return n > 3;
}); // should return [7, 4].
dropElements([1, 2, 3, 9, 2], function (n) {
  return n > 2;
}); // should return [3, 9, 2].
dropElements([1, 2, 3, 4], function (n) {
  return n > 5;
}); // should return [].

/*
  Drop the elements of an array (first argument),
  starting from the front, until the predicate (second argument) returns true.
  The second argument, func, is a function you'll use to test the first elements of the array
  to decide if you should drop it or not.
  Return the rest of the array, otherwise return an empty array.
*/