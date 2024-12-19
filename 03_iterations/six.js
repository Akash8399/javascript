//   Method different but result same
//filter mtlb jo true hinga vo hi pass honga 

const myNums = [1,2,3,4,5,6,7,8]

//const newNums = myNums.filter((item) => item > 3 )  // without object({})
//console.log(newNums)

const newNums = myNums.filter( (num) => {  // with object({})
    return num > 5                         // scope laga ke kiya to return likhna imp hai 
})
//console.log(newNums);

//  ** with for each loop
const number = []
myNums.forEach( (num) => {
    if(num > 4){
        number.push(num)
    }
})
//console.log(number);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);




