const user = {
    username : "Akash",
    price : 999,

    welcomeMessage : function(){
        //console.log(`Hi, ${this.username}, welcome to website`);
    }
}
//user.welcomeMessage() // isme jo default declare kiya hai vo output aaya

//  OR username change kr na hai to
//user.username = "Ram"
//user.welcomeMessage()

// ********* Arrow Function **************

const chai = ()=>{  // Arrow function 
    let username = "Akash"
    //console.log(this);     
}
//chai()

// const addTwo = (num1, num2) => {  //  is method se likha, means parenthesis {} me to return likhna pdenga
//     return num1 + num2
// }
// console.log(addTwo(5,3));

const addTwo = (num1,num2) => (num1 + num2)  //  Advance Arrow function me return nhi likhna pdenga
console.log(addTwo(5,8));

// ek aur example
const addThree = (num1,num2) => ({username : "Akash"})
console.log(addThree())


