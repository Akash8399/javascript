const user = {
    username : "Akash",
    loggedIn : 8,
    signedIn : true,

    getUserDetail : function(){
        //console.log("Got user detail from database");
        //console.log(`username: ${this.username}`);
        //console.log(this);
    }
}
//console.log(user.username)
//console.log(user.getUserDetail())

function userDetail(username,loginCount, loggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.loggedIn = loggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new userDetail("Akash", 5, true)
const userTwo = new userDetail("Rax", 7, false)
console.log(userOne.constructor);
console.log(userOne)