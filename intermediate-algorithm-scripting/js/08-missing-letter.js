"use strict";

function fearNotLetter(str) {
  var start = str.charCodeAt(0);
  var missingChar;
  for (var i = 1; i <= str.length; i++) {
    if (start !== str.charCodeAt([i] - 1)) {
      missingChar = String.fromCharCode(start);
      start = start + 2;
    } else {
      start = start + 1;
    }
  }
  console.log("RETURN => ", missingChar);
  return missingChar;
}

fearNotLetter("abce"); // should return "d".
fearNotLetter("abcdefghjklmno"); // should return "i".
fearNotLetter("bcd"); // should return undefined.
fearNotLetter("yz"); // should return undefined.

/*
  Find the missing letter in the passed letter range and return it.
  If all letters are present in the range, return undefined.

  Here are some helpful links:
    String.prototype.charCodeAt()
    String.fromCharCode()
*/