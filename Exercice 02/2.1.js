const prompt=require("prompt-sync")({sigint:true}); 

let age = prompt("Enter your age : ");

if (age >= 18){
    console.log('You are an Adult')
}else{
        console.log("You are not yet an adult");   
}