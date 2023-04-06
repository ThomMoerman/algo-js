// Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)

const prompt = require("prompt-sync")({
    sigint: true
});

let nbUser = prompt("Enter a number between 1 and 7 ? : ")

switch(nbUser){
    case '1':
        console.log('1 => Monday');
        break;
    case '2':
        console.log('2 => Tuesday');
        break;
    case '3':
        console.log('3 => Wednesday');
        break;
    case '4':
        console.log('4 => Thursday');
        break;
    case '5':
        console.log('5 => Friday');
        break;
    case '6':
        console.log('6 => Saturday');
        break;
    case '7':
        console.log('7 => Sunday');
        break;
    default:
        console.log('Sorry, ' + nbUser + ' arent between 1 and 7.');
        break;
}