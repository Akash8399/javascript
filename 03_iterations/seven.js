//  ********  Map  ********

const numbers = [1,2,3,4,5,6,7,8,9,10]
//const myNums = numbers.map( (item) => item + 10)

const myNum = numbers.map( (num) => num * 10 ).map(  (num) => num + 2).filter( (num) => num > 40)
console.log(myNum);