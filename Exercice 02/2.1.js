// Ask the user to enter its age. If its age is at least 18 display "You are an adult". If it's not the case display "You are not yet an adult".

const prompt=require("prompt-sync")({sigint:true}); 

let age = prompt("Enter your age : ");

if (age >= 18){
    console.log('You are an Adult')
}else{
        console.log("You are not yet an adult");   
}