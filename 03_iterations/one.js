for(let i = 0; i < 10; i++){
    const element = i;
    if(element == 5){
        //console.log("5 is best number")
    }
    //console.log(element)
}

//         ****************

for (let i = 2; i < 10; i++) {
    //console.log(`outer loop value: ${i}`)
    for (let j = 1; j < 10; j++) {
        //console.log(i + '*' + j + '=' + i*j )       
    }
}

//          ***************

let myArray = ["flash", "superman", "batman", "ironman"]
for (let i = 0; i < myArray.length; i++) {
    //const element = myArray[i];
    //console.log(myArray[i]);   
}

//           ****************

for (let index = 1; index <= 20; index++) {
    //const element = index;
    if(index == 10){
        console.log("10 is detected")
        continue
    }
    console.log(`value of i is ${index}`)    
}