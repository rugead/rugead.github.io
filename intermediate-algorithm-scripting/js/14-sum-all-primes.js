"use strict";

function isPrime(num) {
  var yyy = false;
  if (num === 0 || num == 1) {
    yyy = false;
    return yyy;
  }

  if (num == 2) {
    yyy = true;
    return yyy;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      yyy = false;
      break;
    }

    if (num % i !== 0) {
      yyy = true;
    }
  }
  return yyy;
}

function sumPrimes(givenNum) {
  var xsumPrimes = 0;

  for (var i = 0; i <= givenNum; i++) {
    if (isPrime(i) === true) {
      xsumPrimes += i;
    }
  }
  console.log("RETURN => ", xsumPrimes);
  return xsumPrimes;
}

sumPrimes(977);