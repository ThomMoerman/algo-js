// By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

// Write a documentation for the multiRand(n) function.

// Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.

/**
 * Generate random number between 1 and 10 include
 * @return { Number } 
 */
function rand10(){
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

/**
 * Generate an array of n numbers between 1 and 10
 * @param { Number} n 
 * @return { Number } 
 */
function multiRand(n){
    let arr = [];
    for(i=0; i<n; i++){
        arr.push(rand10());
    }
    return arr;
}

const prompt = require("prompt-sync")({
    sigint: true
});

let nbElements = prompt("Enter a number of random number: ");
console.log('This is an array of ' + nbElements + ' random numbers : ' +multiRand(nbElements));