/*



The Fibonacci numbers are the numbers in the following integer sequence (Fn): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such that:

F
(
0
)
=
1
F
(
1
)
=
1
F
(
n
)
=
F
(
n
−
1
)
+
F
(
n
−
2
)
F(0)=1
F(1)=1
F(n)=F(n−1)+F(n−2)
Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying:

F
(
n
)
∗
F
(
n
+
1
)
=
p
r
o
d
F(n)∗F(n+1)=prod



https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

*/

//Time Complexity: O(n)
function productFib(prod) {
    let a = 1; 
    let b = 1;
    
    while (true) {
        let product = a * b;
        
        if (product === prod) {
            return [a, b, true];
        } else if (product > prod) {
            return [a, b, false];
        }
        
        let next = a + b;
        a = b;
        b = next;
    }
}

