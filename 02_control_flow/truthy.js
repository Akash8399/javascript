const userEmail = "raxmonty.com"
if(userEmail){
    //console.log("Got user Email");
}else{
    //console.log("Dont have Email ID")
}

// Note: falsy values
// false, 0, -0, BigInt 0n, null, "", undefined, Nan(not a number)

// Note: Truthy values
// "false", "0", " ", [], {}, function(){}

const emptyobj = {}
if (Object.keys(emptyobj).length === 0){
    console.log("Object is Empty")
}

// Nullish coalescing operator(??): null, undefined
//let val1;
//val1 = 5 ?? 10                       Output: 5
//val1 = null ?? 10                    Output: 10
//val1 = undefined ?? 10 ?? 15         Output: 10
//val1 = null ?? 10 ?? 20              output: 10
// console.log(val1)

// Terniary Operator
//condition ? true : false
const teaPrice = 100
teaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")