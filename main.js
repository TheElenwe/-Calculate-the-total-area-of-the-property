let prompt = require('prompt-sync')({sigint: true});
 let num1 = prompt("Write me the width:")
 let num2 = prompt("Write me the height")

 num1 = parseFloat(num1);
 num2 = parseFloat(num2);

 let total_area= (num1 * num2);
 console.log("The total area is : " + total_area);