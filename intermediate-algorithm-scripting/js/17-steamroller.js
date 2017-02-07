"use strict";

function steamrollArray(arr) {
  var result = [];
  var arrLength = arr.length;
  function nnn(arr) {
    arr.forEach(function (xxx) {
      if (!Array.isArray(xxx)) {
        result.push(xxx);
      } else {
        nnn(xxx);
      }
    });
  }
  nnn(arr);
  console.log('RESULT', result);
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);

steamrollArray([[["a"]], [["b"]]]); // should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]); //  should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]); //  should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]); //  should return [1, {}, 3, 4].

/*
  Steamroller
  Flatten a nested array. You must account for varying levels of nesting.

  Array.isArray()
*/