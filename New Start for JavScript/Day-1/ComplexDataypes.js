// Create an array students containing objects representing different students. 
// Each student object should have properties such as name, age, and grade.
var studentlist = [
    {name:"Saketh",age:21,grade:'A+'},
    {name:"Hema",age:20,grade:'B+'},
    {name:"Jayasree",age:20,grade:'A+'}];
console.log(studentlist)

// Create an object car representing a car, with properties such as make, model, and year.
car = {make:"Benz",model:"1231e1",year:2023}
console.log(car)

// Create an array movies containing objects representing different movies. 
// Each movie object should have properties such as title, director, and year.
moives=[ ["IronMan-1","Meher ramesh",2009],["IronMan-2","Om Raut",2011],["IronMan-3","Naveen meherom ",2019]]
console.log(moives) 

// Create an object person representing a person, with properties such as name, age, and address. 
// The address property should itself be an object with properties like street, city, and zipcode.
var person1 = {name : "Saketh Phaneendra Kondisetti", age:20, address:{street:"Mantripragada Street",city:"kakinada",zipcode:533001}}
console.log(person1)

// Create an array books containing objects representing different books.
// Each book object should have properties such as title, author, and pages.
books= [book1={title:"King Kong",author:"Unknown",pages:1410},
        book2={title:"King Kong2",author:"Unknown2",pages:1110},
        book3={title:"A unknown Life",author:"No Id",pages:420}]
console.log(books)

// Create an object restaurant representing a restaurant, with properties 
// such as name, cuisine, and menu. The menu property should be an array of objects
//  representing different dishes, with properties like name, price, and description.
var restaurant = {name:"Saketh",cusine:"MeEither likeit",menu:[["Fish",680,"Fish Fry Ready to serve"],["Chicken",500,"Chicken Arbic Style Fry"]]}
console.log(restaurant)

// Create an array employees containing objects representing different employees. Each
//  employee object should have properties such as name, position, and salary.
employees= [Emp1={name:"Hema",position:"HR",salary:200000},
            Emp2={name:"Saketh",position:"CEO",salary:801524000.32},
            Emp3={name:"JayaSree",position:"CEO Assistant",salary:600000}]
console.log(employees[1],"\n",employees[2])   

// Create an object computer representing a computer, with properties such as brand,
//  processor, and RAM. The RAM property should be an object with properties like size and type.
var computer ={brand:"Dell",processor:"I5 12th gen",Ram:{size:16,type:"DDR4"}}
console.log(computer.brand)
console.log(computer.Ram.size)

// Create an object playlist representing a playlist of songs, with properties such 
// as name and songs. The songs property should be an array of objects representing 
// different songs, with properties like title, artist, and duration.

playlist={PlaylistName:"Saketh's Personal",songs:[{title:"Life of Ram",language:"telugu",duration:"5 Mintues"},{title:"Animal Track Song",language:"hindi",duration:"4 Mintues"}]}

console.log(playlist)
console.log(playlist.songs[1].language)