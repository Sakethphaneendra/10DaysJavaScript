// Push Method 
let arr = ["Saketh",143,"JayaSree",14.3]
arr.push(true,false)
console.log(arr)
console.log(arr[arr.length-1])

// Pop Method
let arr2=["Saketh","Jayasree","Hema","Sahithya"]
console.log(arr2)
console.log(arr2.pop())
console.log(arr2)

// Shift(removes the first element)

console.log(arr2.shift())
console.log(arr2)

// Unshift(Add one or more elements in first place)

console.log(arr2.unshift("Saketh",12.32,42,132,true))
console.log(arr2)
// Concat
var sak = arr.concat(arr2)
console.log(sak)

// Slice()
var num = [10,320,120,240,53]
console.log(num.length)
console.log(num.slice(0,))

// Index()
console.log(num.indexOf(4))

// ForEach()

num.forEach(function(i,indexx,y)
{
console.log(i,indexx,y)
})