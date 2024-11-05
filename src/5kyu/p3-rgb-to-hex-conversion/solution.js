/*

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"





https://www.codewars.com/kata/513e08acc600c94f01000001/javascript

*/





//Time Complexity: O(1)
function rgb(r, g, b) {
    var r = Math.max(0,Math.min(255,r))
    var g = Math.max(0,Math.min(255,g))
    var b = Math.max(0,Math.min(255,b))
    
   return hexGen(r) + hexGen(g) + hexGen(b); 
    
}


function hexGen(value){
  var hexDigits = "0123456789ABCDEF";
  var high = hexDigits[Math.floor(value/16)];
  var low = hexDigits[Math.floor(value%16)];
  var hexCode = high+low;
  return hexCode;
  
  }



