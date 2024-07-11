const name = " Rax"
const value = 70

//console.log(name + " and roll no. " + value );    Basic Tarika
//console.table([name,value])

console.log(`Hello, my name is ${name} and my roll no. is ${value}`); // Advance tarika 

const gameName = new String('mahendre')

console.log(gameName.charAt(7))
console.log(gameName.indexOf('d'))
console.log(gameName.toUpperCase())

const newString = gameName.substring(0,15)   // Negetive value nhi de skte
console.log(newString);

//Input: hiteshhc ; Output:ite 
const anotherString = gameName.slice(-8,4)  //negitave value de skta hai 
console.log(anotherString);

const newStringOne = "  hitesh  " 
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "http://www.hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('Akash'))  // kyua Akash url me hai 
console.log(gameName.split('-'))
console.log(gameName.split(' ')) // bs check kr rha tha kya aata hai 
