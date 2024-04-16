//  methods to combine two variablr values

const hero = ["akshay", "Shahid", "Ranbir"]
const heroine  = ["Twinkle", "Katrina","Alia"]
//hero.push(heroine)

//console.log(hero);  Push Method 1

const all = hero.concat(heroine) // Concat Method 2
//console.log(all);

const Actors = [...hero,...heroine] // Spread Method 3
//console.log(Actors);

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_Array = another_Array.flat(Infinity)
//console.log(real_another_Array);

//console.log(Array.isArray("Hitesh"))
//console.log(Array.from("Hitesh"))
//console.log(Array.from({name: "Hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));