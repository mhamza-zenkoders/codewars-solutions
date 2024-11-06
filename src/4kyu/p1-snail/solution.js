/*


Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]



https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/javascript
*/



snail = function(array) {
    var result=[];
    while(array.length){
      result.push(...array.shift());
      for(var i=0; i<array.length;i++){
        result.push(array[i].pop());
      }
      array.reverse().map(row => row.reverse());
    }
    return result;
  }