//Ask the user to enter three numbers: min, max and current. Display if current is between min and max.

// Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)

// Bonus 2: be polite in the error messages. (facultative)

const prompt = require("prompt-sync")({
    sigint: true
});

let min = prompt("Enter a number as a minimum : ");
let max = prompt("Enter a number as a maximum : ");

if (min > max) {
    console.log("Your understanding of the two firsts statement is close to 0. Have a nice day.")
} else {
    let current = prompt("Enter a current value between min and max : ");

    if (min < current && current < max) {
        console.log(current + " is between " + min + " and " + max);
    }else{
            console.log(current + " isnt between " + min + " and " + max)
        }
    }
