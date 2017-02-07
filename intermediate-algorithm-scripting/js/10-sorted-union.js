"use strict";

function uniteUnique(arr) {
  var newArr = [];
  var args = Array.from(arguments);
  var merged = [].concat.apply([], args);
  var mergedLength = merged.length;
  for (var i = 0; i < mergedLength; i++) {
    if (newArr.indexOf(merged[i]) == -1) {
      newArr.push(merged[i]);
    }
  }

  console.log("RETURN => ", newArr);
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]); // should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]); // should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // should return [1, 2, 3, 5, 4, 6, 7, 8].