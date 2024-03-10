// Write a function that takes an array of numbers and returns the sum of all the numbers in the array.


// Creating an Array

var arr = [1,4,6,10,-5,-1];
var sum =0;
for(let i=0; i<arr.length;i++){
    sum = sum+arr[i];
}

console.log(sum);