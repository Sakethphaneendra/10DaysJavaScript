// Create a variable x and assign it the value 5. Then, using the addition operator, 
// add 3 to x and log the result.
var x = 5
x+=3
console.log(x)

// Declare two variables, a and b, and assign them numeric values of your choice.
// Using the subtraction operator, find the difference between a and b and log the 
// result.
var a = 12 ; var b = 21
console.log(-(a-b))

// Declare a variable str and assign it a string value of your choice. Using the 
// concatenation operator, concatenate the string "Hello, " with the value of str and
//  log the result.
str = "JavaScript"
str+=" MyWorld"
console.log(str)

// Declare two variables, num1 and num2, and assign them numeric values of your choice.
// Using the multiplication operator, multiply num1 by num2 and log the result.
num1 =2 ;num2=4
result = num1**num2 //(power)
console.log(result)

// Declare a variable remainder and assign it the result of dividing 10 by 3 using 
// the remainder operator (%).
remider = 3%10 
console.log(remider)

// Create a variable isEven and assign it a boolean value indicating whether the 
// number 8 is even or not using the equality (==) operator.
isEven  = 8
if(isEven %2 == 0 ) {
    console.log("Even")}

// Declare a variable isGreaterThan and assign it a boolean value indicating whether 10
// is greater than 5 using the greater than (>) operator.
isGreater = true
if(10 > 5) {
    console.log(isGreater)}

// Declare a variable logicalAnd and assign it a boolean value resulting from 
// combining the expressions (5 > 3) and (10 < 5) using the logical AND (&&) operator.
logical = true
if(5>3 && 3<15)
console.log(logical)

// Declare a variable logicalOr and assign it a boolean value resulting from combining the expressions (10 === 10) or (5 !== 5) using the logical OR (||) operator.
logicalOr = false
if(10==110 || 3==(2-1)){
    console.log(true)
}
else 
console.log(logicalOr)