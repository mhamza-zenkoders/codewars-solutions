/*

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.


https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

*/



// Time Complexity: O(n)
function isVow(a){
    
    var vowels = [97, 101, 105, 111, 117]
  
    for (var i=0; i<a.length; i++){
      if(vowels.includes(a[i])){
        a[i] = String.fromCharCode(a[i]);
      }
    }
    
    return a;
  }