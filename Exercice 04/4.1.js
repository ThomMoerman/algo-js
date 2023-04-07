// Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.

// Write a documentation for the calcSurface function.

/**
 * Calculate the surface of a rectangle 
 * @param { Number } lengthRec
 * @param { Number } widthRec
 * @return { Number } 
 */
function calcSurface(lengthRec, widthRec) {
    let surface = lengthRec*widthRec
    return surface;
  }

const prompt = require("prompt-sync")({
    sigint: true
});

let lengthUser = prompt("Enter a length for a rectangle : ");
let widthUser = prompt("Enter a width for the same rectangle : ");

console.log('The surface of the rectangle you\'ve created is equal to : ' +calcSurface(lengthUser,widthUser))