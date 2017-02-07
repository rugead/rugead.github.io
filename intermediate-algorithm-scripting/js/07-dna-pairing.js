"use strict";

function pairElement(str) {
  var strSplit = str.split('');
  var newArr = [];
  for (var i = 0; i < strSplit.length; i++) {
    var pair = [];
    switch (strSplit[i]) {
      case "A":
        pair.push("A");
        pair.push("T");
        break;
      case "T":
        pair.push("T");
        pair.push("A");
        break;
      case "C":
        pair.push("C");
        pair.push("G");
        break;
      case "G":
        pair.push("G");
        pair.push("C");
        break;
    }
    newArr.push(pair);
  }
  console.log("RETURN => ", newArr);
  return newArr;
}

pairElement("ATCGA"); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG"); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA"); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

/*
The DNA strand is missing the pairing element.
Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array,
and all the arrays are grouped into one encapsulating array.

Array.prototype.push()
String.prototype.split()

*/