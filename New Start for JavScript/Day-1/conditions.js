// Write an if statement that checks if a variable age is greater than or equal to
//  18. If true, log "You are an adult", otherwise log "You are a minor".
var age = 3
if(age>=18){
    console.log("You are an adult");
}else{
    console.log("You are Minor")
}

// Declare a variable temperature and assign it a numeric value. Write an if 
// statement that logs "It's hot" if the temperature is greater than 30, "It's warm" 
// if it's between 20 and 30 (inclusive), and "It's cold" otherwise.
var temp = 12
if(temp>30){
    console.log("It's hot")
}else if(temp<30 && temp>20){
    console.log("It's Warm")
}else{
    console.log("Its cold")
}

// Write an if-else statement that checks if a number num is even. If true, log
//  "The number is even", otherwise log "The number is odd".
var num = 19
if(num%2 ==0){
    console.log("The number is even")
}else{
    console.log("The number is odd")
}

// Declare two variables, num1 and num2, and assign them numeric values. Write an
//  if-else-if statement that logs "num1 is greater" if num1 is greater than num2,
//  "num2 is greater" if num2 is greater than num1, and "Both are equal" otherwise.

var num1 = 192
var num2 = 192
if(num1>num2){
    console.log("The number1 is greater")
}else if (num1<num2){
    console.log("The number2 is greater")
} else{
    console.log("Both are equal")
}

// Write an if statement that checks if a variable str is empty. If true, log 
// "The string is empty", otherwise log "The string is not empty".

var str = " "
if(str==""){
    console.log("The string is empty")
}
else{
    console.log("The string is Not empty")
}

// Declare a variable day and assign it a string value representing a day of the week.
//  Write an if-else statement that logs "It's a weekday" if day is Monday through
//  Friday, and "It's a weekend" otherwise.

var day  = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
i=2
if(day[i]=="Saturday" || day[i]=="Sunday"  ){
    console.log("It's a weekend")
}else{
    console.log("It's a weekday")
}

// Write an if statement that checks if a variable num is positive, negative, or zero,
//  and logs the appropriate message.

num=0
if(num<0){
    console.log("It's negative")
}else if (num>0){
    console.log("It's a positive")
}
else{
    console.log("It's a Zero")
}

// Write a function getGrade that takes a score as input and returns a grade based on the following criteria:
// Score >= 90: A
// 80 <= Score < 90: B
// 70 <= Score < 80: C
// 60 <= Score < 70: D
// Score < 60: F 
result = Grading(-11.12)   
console.log(result)
function Grading(score){
    if(score>=90)return 'A';
    if(score>=80 && score<90 )return 'B';
    if(score>=70 && score<80 )return 'C';
    if(score>=60 && score<70 )return 'D';
    else return 'F';
}

