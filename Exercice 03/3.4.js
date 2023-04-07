// Write a program that will display the minimum and maximum elements of a given array.

var numbers = [1, 2, 3];

let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

console.log('The array looks like this : ' + numbers)
console.log('His maximun is : ' + maxValue +' and his minimum is : '+minValue);