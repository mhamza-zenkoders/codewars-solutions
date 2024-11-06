/*

ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.

An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

For example:

ISBN     : 1 1 1 2 2 2 3 3 3  9
position : 1 2 3 4 5 6 7 8 9 10
This is a valid ISBN, because:

(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0


https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/train/javascript


*/



function validISBN10(isbn) {
    if (isbn.length !== 10) {
      return false;
    }
  
    var arr = isbn.split("");
  
    for (let i = 0; i < 10; i++) {
      if (arr[i] === 'X' || arr[i] === 'x') {
        if (i !== 9) {
          return false;
        }
        arr[i] = 10;
      } else if (isNaN(Number(arr[i]))) {
        return false;
      } else {
        arr[i] = Number(arr[i]);
      }
    }
  
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += arr[i] * (10 - i);
    }
  
    return sum % 11 === 0;
  }
  