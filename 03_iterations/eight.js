const myNums = [1,2,3,4,5]

//   using without Arrow function

//const myTotal = myNums.reduce(function (acc,currval){
//    console.log(`acc : ${acc} and currval : ${currval}`)
//    return acc + currval
//}, 1)
//console.log("Total : " + myTotal)

//   using Arrow function

//const myTotal = myNums.reduce( (acc, currval) => acc + currval, 1)  // 1 se chalu honga
//console.log(`Total: ${myTotal}`)

const shoppingCart = [
    {
        "item": "js course",
        "price" : 2999
    },
    {
        "item": "python course",
        "price" : 999
    },
    {
        "item": "java course",
        "price" : 4999
    },
]
const totalCoursePrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalCoursePrice)


