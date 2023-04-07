// Create a function pickLearner(inputAr, n) that takes 2 parameters.

// inputAr : An array of learners (the one you created in exercise 3.0 for example)
// n : A number, that should be greater than 0 and less than the length of inputAr
// The function should return an array of randomly selected learners.

let arrLearners = ["Abel Fortunati", "Alexandra Petit", "Anthony Denayer", "Benjamin Mayeur", "Bruno Lafont", "Ethan Dias", "Ismaël Mesmoudi", "Joddie Addis", "Julien Arnould", "Louka Cado", "Loic Lion", "Marine Fassin", "Nikko Di Bernardo", "Steve Grard", "Sylvain Jacobs", "Thomas Moerman"];

/**
 * Return an array of randomly selected elements of the array in parameter without double 
 * @param { Array } inputAr
 * @param { Number } n should be greater than 0 and less than the length of inputAr
 * @return { Array }
*/
function pickLearner(inputAr, n) {
    let arr = [];

    for (i = 0; i < n; i++) {
        var randomLearner = inputAr[Math.floor(Math.random() * inputAr.length)];

        // if (arr.includes(randomLearner)) {
        //     var index = inputAr.indexOf(randomLearner);
        //     inputAr.splice(index, 1)
        //     randomLearner = inputAr[Math.floor(Math.random() * inputAr.length)];
        //     arr.push(randomLearner);
        // } else { arr.push(randomLearner); }

        while(arr.includes(randomLearner)){
            randomLearner = inputAr[Math.floor(Math.random() * inputAr.length)];
        }

        arr.push(randomLearner);
    }

    return arr;
}

console.log(pickLearner(arrLearners, 4));