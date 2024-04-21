function myName(){
    console.log("R");
    console.log("A");
    console.log("M");
}
// myName()  //    **** Basic Method ****

//  function Sum(num1,num2){
//      console.log(num1 + num2);   method 1
//  }
//  Sum(5,3)

//  function Sum(num1,num2){
//      let result = num1 + num2   method 2
//      return result
//  }


function Sum(num1,num2){
    return num1,num2
}                            // Best method 3
// const result = Sum(5,6)
// console.log("Result: ", result);

function userLoggedIn(username){ //(username = "Sam") default define 
    if (!username){  // (username === undefined)
        console.log("Please Enter User Name: ");
        return 
    }
    return `${username} just logged in `
}
//console.log(userLoggedIn()); // ("Martin") over write 

// ******* Functions with Objects **********

function calculateCartPrice(va1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200,300,500,50,150));

const user = {
    name: "Rax",
    price: 199
}
 function handleObject(anyobject){
    //console.log(`Username is ${anyobject.name} and Price is ${anyobject.price}`);
 }
// handleObject(user)

 handleObject({
    name: "Rax",  //Direct bhi define kr skte hai without object banaye
    price: 199 
 })

//               **************************************


 const myNewArray = [200, 300, 500, 800, 100]

 function myArray(getArray){
    return getArray[1]
 }
 //console.log(myArray(myNewArray));
 //console.log(myArray([200, 300, 500, 800, 100]));  // dono same output dete hai 


