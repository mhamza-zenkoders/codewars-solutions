/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.



https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript


*/


// Time Complexity: O(n)

function getCount(str) {
    var vowels=['a','e','i','o', 'u']
    var count=0;
    for (var i=0; i<str.length; i++){
      if (vowels.includes(str.charAt(i))){
        count++;
      }
    }
    return count;
  }