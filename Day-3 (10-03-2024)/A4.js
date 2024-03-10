// Write a function that takes an array of strings and returns the longest string in the array.


let Strings = ['Hema Reddy','Jayasree','Sahithya','Love','Stories','Saketh Phaneendra'];

console.log(Strings);
let biggest = 0,index;
for(let i=0;i<Strings.length;i++){

    if(biggest < Strings[i].length){
        biggest = Strings[i].length;
        index = i;
    }
}

console.log("the biggest String is " + Strings[index] + " -> " + biggest);