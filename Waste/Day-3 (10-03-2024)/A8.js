// Write a function that takes a string as input and returns the number of vowels in the string.


let String = "Saketh"

console.log(String.length);
count=0;
for(let i=0 ; i <String.length ;i++){

    let cha =String[i];

    switch(cha){
        case 'a' :
            case 'e' : 
                case 'i' : 
                    case 'o' :
                        case 'u' : count++; break;

    }
}

console.log(count)