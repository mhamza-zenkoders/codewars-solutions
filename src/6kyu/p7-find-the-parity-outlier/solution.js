/*

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)


https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

*/



//Time Complexity: O(n)

function findOutlier(integers){
    var outlier = 0;
    var evenCount = 0;
    var oddCount = 0;
    
    var sum=0;
    for (var i=0; i<integers.length; i++){
        if (integers[i]%2 ===0){
          evenCount++;
        }else{
          oddCount++;
        }
             
    }
    
    var isMajorityEven = evenCount > oddCount;
    
      for (var j=0; j<integers.length; j++){
        if ( isMajorityEven && integers[j]%2 != 0){
          outlier = integers[j]
        }
        else if
          (!isMajorityEven && integers[j]%2 == 0){
          outlier = integers[j]
        }
        
    }
    return outlier;
  }

