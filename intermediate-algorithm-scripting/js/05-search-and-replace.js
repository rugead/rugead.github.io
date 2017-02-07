"use strict";

function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    var aaa = after.split("");
    var up = aaa[0].toUpperCase();
    aaa.shift();
    aaa.unshift(up);
    after = aaa.join("");
  }

  str = str.replace(before, after);
  console.log('RETURN => ', str);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");