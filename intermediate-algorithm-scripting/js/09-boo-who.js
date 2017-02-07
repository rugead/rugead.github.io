'use strict';

function booWho(bool) {
  if (typeof bool === 'boolean') {
    console.log('RETURN  =>', true);
    return true;
  } else {
    console.log('RETURN  =>', false);
    return false;
  }
}

booWho(true); // should return true.
booWho(false); // should return true.
booWho([1, 2, 3]); // should return false.
booWho([].slice); // should return false.
booWho({ "a": 1 }); // should return false.
booWho(1); // should return false.
booWho(NaN); // should return false.
booWho("a"); // should return false.
booWho("true"); // should return false.
booWho("false"); //