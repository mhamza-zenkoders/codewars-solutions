/*
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"


https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript


*/



function getMiddle(s) {

    if(s.length%2 == 0)
    {
      return s.substring(s.length/2-1, s.length/2+1);
    }
    else{
      return s.substring((s.length/2), s.length/2+1)
    }
    return '';
  }