// Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

// Name
// Production year
// Names of the cast members (there can be as much as the user want)
// That function must gather all the data in a single object and return it. The data structure must be elegant.

// Create a program that use that function to generate a TV serie object and display it to the user in JSON format.

// let tvSerie = {
//     "Name": String,
//     "Production Year": Number,
//     "Name of the cast members": Array
//   };

// console.log(tvSerie);

const prompt = require("prompt-sync")({
    sigint: true
});

function askSerie(){
    let tvSerie = new Object();
    tvSerie.Name = prompt("Enter the name of your TV Serie : ");
    tvSerie.Production_Year = prompt("Enter the production year : ");
    tvSerie.Name_of_cast_members = [];
    tvSerie.Name_of_cast_members.push(prompt("Enter the cast members : "));
    let reponse = prompt("Another member ? (Y or N) : ");
    while(reponse == 'Y'){
        tvSerie.Name_of_cast_members.push(prompt("Enter the cast members : "));
        reponse = prompt("Another member ? (Y or N) : ");
    }
    console.log(tvSerie)
}

askSerie();