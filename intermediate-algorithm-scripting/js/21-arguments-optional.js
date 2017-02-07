'use strict';

function addTogether() {
  var args = Array.from(arguments);

  if (args.length == 2) {
    if (typeof args[0] !== 'number' || typeof args[1] !== 'number') {
      console.log('RETURN => ', undefined);
      return undefined;
    } else {
      console.log('RETURN => ', args[0] + args[1]);
      return args[0] + args[1];
    }
  }

  if (args.length == 1) {
    var argOne = args[0];
    if (typeof argOne !== 'number') {
      console.log('RETURN => ', undefined);
      return undefined;
    } else {
      return function (second) {
        if (typeof second !== 'number') {
          console.log('RETURN => ', undefined);
          return undefined;
        } else {
          console.log('RETURN => ', argOne + second);
          return argOne + second;
        }
      };
    }
  }
}

addTogether(3, 2); // should return 5.
addTogether(2)(3); // should return 5.
addTogether("http://bit.ly/IqT6zt"); // should return undefined.
addTogether(2, "3"); // should return undefined.
addTogether(2)([3]); // should return undefined.

/*
  Create a function that sums two arguments together. If only one argument is provided,
  then return a function that expects one argument and returns the sum.
  For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
  Calling this returned function with a single argument will then return the sum:
  var sumTwoAnd = addTogether(2);
  sumTwoAnd(3) returns 5.
  If either argument isn't a valid number, return undefined.

  Here are some helpful links:
    Closures
    Arguments object
*/