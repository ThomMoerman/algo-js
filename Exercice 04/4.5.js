// Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.

function calcDistance(arr1, arr2){
    let distance = Math.sqrt((arr2[0]-arr1[0])*(arr2[0]-arr1[0])+(arr2[1]-arr1[1])*(arr2[1]-arr1[1]))
    return distance;
}

var pointA = [1,1];
var pointB = [2,2];
var pointC = [3,1];

console.log(calcDistance(pointA, pointB));
console.log(calcDistance(pointA, pointC));