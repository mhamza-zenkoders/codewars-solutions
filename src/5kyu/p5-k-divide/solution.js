
/*

Problem statement
You are given a positive integer N and an integer K > 1.

For each integer from 1 to N, repeat the following operation:

Divide the integer by K
If the number is divisible, divide by K, and repeat
Otherwise, end the operation.
Let f(n) be the integer after the operation. For example, if n = 12 and K = 3, then f(12) = 4(12→4).

Find the sum of all f(n) from 1 to N.

Input
You be given:

N K
Constraints
The test cases are in the range

1≤N≤10^18
2≤K≤10^12

Examples
Let's try testing N=10 and K=4.

f(1)=1
f(2)=2
f(3)=3
f(4)=1
f(5)=5
f(6)=6
f(7)=7
f(8)=2
f(9)=9
f(10)=10
So, 1+2+3+1+5+6+7+2+9+10=46

The output should be 46.




https://www.codewars.com/kata/66ea899458daad2f0a5dd531/train/javascript/6728db815fba60f5f09c789e
*/


//Time Complexity: O(n^2    )

function calculateSum(n, k) {
    var n = BigInt(n);
    var k = BigInt(k);
    var sum = 0n; 
  
    for (var i = 1n; i <= n; i++) {
      if (i % k === 0n) {  
        var temp=i;
        while(temp%k ===0n){
          temp = (temp/k);
        }
        sum += temp;  
      } else {
        sum += i; 
      }
    }
  
    return sum;  // Return the total sum as BigInt
  }
  
  