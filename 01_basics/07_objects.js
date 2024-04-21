//  const tenderUser = new Object()  -- Single term object

const tenderUser = {}  // non single term object
tenderUser.id = "123abc",
tenderUser.name = "Sam",
tenderUser.isLoggedIn = false

//console.log(tenderUser);

const regularUser = {
    email : "sam@gmail.com",
    fullname : {
        firstname : "Sam",
        lastname : "martin"
    }
}
//console.log(regularUser.fullname.lastname);


const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}
const obj3 = {...obj1, ...obj2} //  Rest operator
//console.log(obj3)

console.log(tenderUser);
console.log(Object.keys(tenderUser));
console.log(Object.values(tenderUser));
console.log(Object.entries(tenderUser));
console.log(tenderUser.hasOwnProperty('isLoggedIn'));




