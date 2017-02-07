'use strict';

function sumAll(arr) {
  var start = getMinOfArray(arr);
  var end = getMaxOfArray(arr);
  var sum = 0;
  var array = [];

  function getMinOfArray(min) {
    return Math.min.apply(null, min);
  };

  function getMaxOfArray(max) {
    return Math.max.apply(null, max);
  };

  for (start; start <= end; start++) {
    array.push(start);
    sum = sum + start;
  }
  console.log('RETURN => ', sum);
  return sum;
}
sumAll([1, 4]);