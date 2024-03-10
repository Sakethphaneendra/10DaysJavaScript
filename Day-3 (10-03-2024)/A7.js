// Write a function that takes an array of numbers and returns a new array with only the even numbers from the original array.


let originalArray = [1,4,4,2,21,54,64,65,76];
let newarry =[];
for(let i =0 ;i<originalArray.length;i++){
    if(originalArray[i]%2==0){
        newarry.push(originalArray[i]);
    }
}

console.log(newarry);