
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.



*/

function persistence(num) {
    if (num < 10) {
      return 0;
    }
  
    let count = 0;
    let number = num.toString();  
    while (number.length > 1) {  
      let product = 1; 
      
      for (let i = 0; i < number.length; i++) {
        product *= Number(number[i]);
      }
      
      number = product.toString();  
      count++;
    }
  
    return count;  // Return the total count of steps
  }