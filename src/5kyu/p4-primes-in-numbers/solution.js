
/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"



https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript

*/


//Time Complexity: O(n^2)

function primeFactors(n) {
    var factors = {};
  
    while (n % 2 === 0) {
      factors[2] = (factors[2] || 0) + 1;
      n /= 2;
    }
  
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      while (n % i === 0) {
        factors[i] = (factors[i] || 0) + 1;
        n /= i;
      }
    }
  
    if (n > 2) {
      factors[n] = (factors[n] || 0) + 1;
    }
  
    var result = "";
    for (var [prime, count] of Object.entries(factors)) {
      if (count === 1) {
        result += `(${prime})`;
      } else {
        result += `(${prime}**${count})`;
      }
    }
  
    return result;
  }
  