//   Note: Objects me Strictly For in loop lagenga

const myObject ={
    js : "javascript",
    py : "Python",
    cpp : "C++",
    rb : "Ruby"
}
for (const key in myObject){
    //console.log(`${key} is stands for ${myObject[key]}`);
}


// Note: Array me For Of loop lagenga, aur below code me for in use kr k kiya hai  

const programming = ["js", "py", "java", "c++"]
for (const key in programming){
    console.log(programming[key]);
}
    