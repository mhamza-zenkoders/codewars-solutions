/* 

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

*/


//Time Complexity: O(n)

function countSmileys(arr) {
    var smileyRegex = /[:;][-~]?[)D]/;
    var count=0;
    for (var i=0; i<arr.length; i++){
      var symbol=arr[i];
      
      if(smileyRegex.test(symbol)){
        count++;
      }
      
    }
    return count;
  }