 /*
 const hero = ["thor","iron","spider"]
 const dc= ["super","bat","flash"]

 hero.push(dc) //Add dc as an single element array.Not Favorable to used
 console.log(hero[3]);
 console.log(hero[3][1]) //Output:bat

  const newArr=hero.concat(dc); // concat creates new Array
 console.log(newArr);

 const all_new = [...hero,...dc]  // Spread operator most used
 console.log(all_new);
 */
/*
 const another_Arr= [1,2,3,[4,5,6],7,[6,7,[4,5]]]

 const real_another= another_Arr.flat(Infinity)
 console.log(real_another);
 console.log(another_Arr);
 */

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Harsh"})); //Interview (We need to specify array for keys and values)

let score1=100
let score2=200
let score3=300;
console.log(Array.of(score1,score2,score3));

