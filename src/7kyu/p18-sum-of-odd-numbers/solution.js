
/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8



https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
*/

function rowSumOddNumbers(n) {
	var start = (n - 1) * n + 1; 
    var sum = 0;
    
    for (var i = 0; i < n; i++) {
        sum += start + 2 * i; 
    }
    
    return sum;
}