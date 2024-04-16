const Arr2 = new Array(1,2,3,4,5)
console.log(Arr2[2]);


const  Arr = [0,1,2,3,4,5]
//Arr.push(6) // Push means ADD
//Arr.pop() // last element remove
//Arr.unshift(9)  // start me element add hojayenga
//Arr.shift()  // add hua element remove ho jayenga

//console.log(Arr);

//console.log(Arr.includes(6));
//console.log(Arr.indexOf(4));

const newArr =  Arr.join()
//console.log(Arr);
//console.log(typeof newArr);
//console.log(newArr);

//  ++++++++ Slice Or Splice ++++++++++

//console.log("A " + Arr);

const myn1 = Arr.slice(1,3)
//console.log(myn1);
//console.log("B " + Arr);

const myn2 = Arr.splice(1,3)  // Note: Splice me Array ko hi manipulate kr deta hai 
//console.log("C " + Arr);
//console.log(myn2);

