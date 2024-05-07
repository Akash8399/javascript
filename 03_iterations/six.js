//   Method different but result same
//filter mtlb jo true hinga vo hi pass honga 

const myNums = [1,2,3,4,5,6,7,8]

//const newNums = myNums.filter((item) => item > 3 )  // without object({})
//console.log(newNums)

const newNums = myNums.filter( (num) => {  // with object({})
    return num > 5                         // scope laga ke kiya to return likhna imp hai 
})
//console.log(newNums);

//  ** with for each loop
const number = []
myNums.forEach( (num) => {
    if(num > 4){
        number.push(num)
    }
})
console.log(number);






