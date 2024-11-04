


/*


Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

*/ 
function solution(str){
    if(str.length%2 !=0){
      str = str + "_";
    }
   var arr = [];
   var start=0; var end=2;
   for (var i=0; i<str.length/2; i++){
     arr.push(str.substring(start, end));
     start +=2;
     end+=2;
   }
   return arr;
 }