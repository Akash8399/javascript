const mySym = Symbol("key1")

const jsUser = {
    name : "Akshay",
    [mySym] : "mykey1",
    age : 22,
    location : "Manali",
    email : "akshay@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

//console.log(jsUser.location) // this is not right way to address 
//console.log(jsUser["location"]);
//console.log(jsUser[mySym]);

jsUser.email = "akshay@gpt.com"
//Object.freeze(jsUser)
jsUser.email = "akshay@microsoft.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hi js user")
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());