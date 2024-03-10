// Write a function that takes an array of numbers and returns the average of all the numbers in the array.

let nums = [1,4,35,64,23,12,32,12,32,10,15.3,10 ,-32,24,67,23,35,12,32];
let sum=0;
for(let i=0;i<nums.length;i++){
    sum =sum+nums[i]; 
}

console.log(sum/nums.length);