"use strict";

function diffArray(arr1, arr2) {
  var newArr = [];

  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) == -1) {
      newArr.push(arr1[i]);
    }
  }
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      newArr.push(arr2[i]);
    }
  }
  console.log('RETURN => ', newArr);
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);