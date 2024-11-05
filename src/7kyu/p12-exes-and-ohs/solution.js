
/*


Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

*/

//Time Complexity: O(n)

function XO(str) {
    var xCount=0;
    var oCount=0;
      for (var c of str){
        if(c.toLowerCase() =='x'){
          xCount++;
        } 
        else if(c.toLowerCase() == 'o'){
          oCount++;
        }
      }
    if(xCount == oCount){
      return true;
    }
    return false;
  }