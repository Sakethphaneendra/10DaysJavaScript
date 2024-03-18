// Write a script that takes a number representing a day of the week (1 for Monday,
//  2 for Tuesday, etc.) and logs the corresponding day's name.
var value=7
switch(value){
    case 1 : console.log("Monday");break
    case 2 : console.log("Tuesday");break
    case 3 : console.log("Wdnesday");break
    case 4 : console.log("Thursday");break
    case 5 : console.log("Friday");break
    case 6 : console.log("Saturday");break
    case 7 : console.log("Sunday");break
    default : console.log("invalid Input");break;
}

/*Create a variable fruit and assign it a string value representing a fruit 
(e.g., "apple", "banana", "orange"). Write a script logs a message depending fruit:
If it's "apple", log "Apple is red."
If it's "banana", log "Banana is yellow."
If it's "orange", log "Orange is orange."
For any other fruit, log "I don't know what color this fruit is."
*/

fruit = "apple"
switch(fruit){
    case "apple" : console.log("Apple is red.");break
    case "banana" : console.log("Banana is yellow.");break
    case "orange" : console.log("Orange is orange.");break
    default:console.log("Invalid Input")
}