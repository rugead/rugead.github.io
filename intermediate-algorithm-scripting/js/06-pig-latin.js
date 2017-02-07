"use strict";

function translatePigLatin(str) {
  var vokale = ["a", "e", "i", "o", "u"];
  var splitStr = str.split("");
  var indexOfVokal = str.length;

  for (var i = 0; i < vokale.length; i++) {
    if (splitStr.indexOf(vokale[i]) !== -1) {
      if (splitStr.indexOf(vokale[i]) < indexOfVokal) {
        indexOfVokal = splitStr.indexOf(vokale[i]);
      }
    }
  }

  if (indexOfVokal === 0) {
    str = splitStr.join("") + "way";
  } else {
    for (var a = 0; a < splitStr.slice(0, indexOfVokal).length; a++) {
      splitStr.push(splitStr.shift());
    }
    str = splitStr.join("") + "ay";
  }

  console.log('RETURN => ', str);
  return str;
}

translatePigLatin("california"); // should return "aliforniacay".
translatePigLatin("paragraphs"); // should return "aragraphspay".
translatePigLatin("glove"); // should return "oveglay".
translatePigLatin("algorithm"); // should return "algorithmway".
translatePigLatin("eight"); // should return "eightway".

/*
  Translate the provided string to pig latin.
  Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
  If a word begins with a vowel you just add "way" to the end.
  Input strings are guaranteed to be English words in all lowercase.

  Here are some helpful links:
    Array.prototype.indexOf()
    Array.prototype.push()
    Array.prototype.join()
    String.prototype.substr()
    String.prototype.split()
*/