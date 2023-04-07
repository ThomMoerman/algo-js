// Create a function named rand10() that returns a random integer between 1 and 10. Create a program that will display the result of that function each time it is run.

// Write a documentation for the rand10() function.


/**
 * Generate random number between 1 and 10 include
 * @return { Number } 
 */
function rand10(){
        min = Math.ceil(1);
        max = Math.floor(10);
        return Math.floor(Math.random() * (max - min +1)) + min;
}

console.log(rand10());