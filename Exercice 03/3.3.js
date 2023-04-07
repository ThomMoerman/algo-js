// Write a program that will create a duplicate of a given array.


//Using push()

var numbers = [1, 2, 3];
var numbersCopy = [];

for (let i = 0; i < numbers.length; i += 1) {
    numbersCopy.push(numbers[i]);
}

console.log(numbers)
console.log(numbersCopy)



// Single method
var numbers = [1, 2, 3];
var numbersCopy = [...numbers];

console.log(numbers);
console.log(numbersCopy);