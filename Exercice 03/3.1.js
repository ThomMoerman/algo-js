// Write a program that will add all the elements of an array.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];
var result1 = 0;
var result2 = 0;

for (let i = 0; i < arr1.length; i += 1) {
     result1+=arr1[i];
}

for (let i = 0; i < arr2.length; i += 1) {
    result2+=arr2[i];
}


console.log('The addition of all elements in the first array is : '+result1);
console.log('The addition of all elements in the second array is : '+result2);
