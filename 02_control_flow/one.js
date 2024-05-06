const balance = 10
if (balance < 500){
    console.log("less than 500 ");
}else if(balance < 700){
    //console.log("Less than 700 ");
}else{
    //console.log("Your Balance is 1000");
}

//  ***** Buy Course****

const userloggedin = true 
const debitCard = true
const loggedinfromGoogle = false
const loggedinfromEmail = true

if (userloggedin && debitCard){
    //console.log("You are Allow to Buy Course");
}

if(loggedinfromGoogle || loggedinfromEmail){
    //console.log("User Logged in ");
}

