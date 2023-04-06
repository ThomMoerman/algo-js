// Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42).

const prompt = require("prompt-sync")({
    sigint: true
});

let num = prompt("Enter your favorite number ? : ");

while(num != 42){
    console.log("Are you sure ?")
    num = prompt("Enter your favorite number ? : ")
}
