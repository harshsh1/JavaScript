const user = {
   username: "harsh",
   price : 999,

   welcomeMessage: function(){
     console.log(`${this.username}, Welcome to the website`);
     console.log(this);
   }

}
/*
user.welcomeMessage()
user.username = "hitesh"
user.welcomeMessage()
*/

//console.log(this);
/*
function chai(){
    let username = "harsh"
    console.log(this.username);
}
chai()
*/
const chai = ()=>{
   let username = "harsh"
   console.log(this)
}
//chai()
// const addTwo = (num1,num2) =>{
//    return num1 + num2
// }

//const addTwo = (num1,num2) => num1 + num2  //Implicit return(Assumes return keyword is written)

//const addTwo = (num1,num2) => (num1 + num2 )  // Another way(more suitable because we can also return object)

const addTwo = (num1,num2) => ({username : "harsh"})

console.log(addTwo(3,4));
