
// Note: Date is an Object

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());

let myNewDate = new Date(2024, 0, 23)
//console.log(myNewDate.toDateString());

let createDate = new Date(2024, 0, 23, 5, 3)
//console.log(createDate.toLocaleString());

let newDate = new Date("03-8-2024")
//console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(newDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let nayaDate = new Date()
console.log(nayaDate);
console.log(nayaDate.getMonth() + 1); //  Month Zero se start hota hai  is liyea +1 lagaya
console.log(nayaDate.getDay());

