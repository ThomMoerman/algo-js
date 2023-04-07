// Create a function factorial(a) that returns the factorial of a number.

// That function must be recursive.

function factorial(num){
    if (num < 0) { 
        return -1; 
     } 
     else if (num == 0){ 
        return 1; 
     } 
     else { 
        return num * factorial(num - 1); 
     } 
}

console.log(factorial(0))
console.log(factorial(-2))
console.log(factorial(10));