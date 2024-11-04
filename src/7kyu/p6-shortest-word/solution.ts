/* 

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.



https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

*/

//Time complexity: O(n)

function findShort(s){
  
    var arr = s.split(" ");
    var shortest=arr[0].length;
    for (var i=0;i<arr.length;i++){
      if(arr[i].length<shortest){
        shortest = arr[i].length;
      }
    }
    return shortest;
  }