//  ForEach loop

const coding =["js", "python", "java", "c++"]

//coding.forEach (function (item){
//    console.log(item)
//})

//   **for Each using Arrow**

coding.forEach((item) => {
    //console.log(item)
})

const myCoding = [
    {  languageName : "javascript",
       languageFile : "js"
    },
    {  languageName : "java",
       languageFile : "java"
    },
    {  languageName : "Python",
       languageFile : "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName, ":" , item.languageFile);
})