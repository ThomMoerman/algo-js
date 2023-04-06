// Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.

const prompt = require("prompt-sync")({
    sigint: true
});

let n = prompt("Enter an interation number : ");
let num = 0;

for(i=1;i<=n;i++){
    prompt("Enter an interation number : ");
}

console.log(num);