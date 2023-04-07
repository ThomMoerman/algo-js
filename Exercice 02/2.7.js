// Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.

const prompt = require("prompt-sync")({
    sigint: true
});

let n = prompt("Enter an interation number : ");
var num = 0;
var result = 0;

for(i=1;i<=n;i++){
    num =prompt("Enter a number : ");
    result= parseInt(result) + parseInt(num);
}

console.log('The addition of the previous numbers is equal to ' + result);