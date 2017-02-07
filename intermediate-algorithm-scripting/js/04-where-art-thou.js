"use strict";

function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var col = collection;
  var src = source;
  var colLength = Object.keys(col).length;
  var srcLength = Object.keys(src).length;

  for (var i = 0; i < collection.length; i++) {
    var testLength = 0;
    for (var c in src) {
      if (src.hasOwnProperty(c)) {
        if (c in col[i] && col[i][c] == src[c]) {
          testLength += 1;
        }
      }
      if (testLength === srcLength) {
        arr.push(collection[i]);
      }
    }
  }
  console.log('RETURN => ', arr);
  return arr;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whereAreYou([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });