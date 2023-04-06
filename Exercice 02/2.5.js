const prompt = require("prompt-sync")({
    sigint: true
});

let num = prompt("Enter your favorite number ? : ");

while(num != 42){
    console.log("Are you sure ?")
    num = prompt("Enter your favorite number ? : ")
}
