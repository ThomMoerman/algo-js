// Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.

const prompt = require("prompt-sync")({
    sigint: true
});

let tvSerie = {
    Name: "H",
    Production_Year: 2000,
    Name_of_cast_members: ["Jamel", "Eric", "Ramzy", "Thierry Henry"]
  };

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function randomizeCast(tvSerie){
   console.log(shuffleArray(tvSerie.Name_of_cast_members));
}

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
    return tvSerie;
}

randomizeCast(askSerie());

