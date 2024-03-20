/*
function addTwo(number1,number2)  //parameters
{
  console.log(number1 + number2)
}
*/
function addTwo(number1,number2)  
{
  /*let result = number1 + number2
  return result
  */
 return number1 + number2 
}
//const result =addTwo() //arguments
//console.log(result);
function loginUser(username = "sam")//default value
{
    if(!username){
       console.log("Please Enter a user name");
       return
    }
    return `${username} just logged in`
}
//console.log(loginUser("Harsh"));
//console.log(loginUser());  //undefined if parameter is not passed

function calculateCartPrice(...num1){
   return num1
}
//console.log(calculateCartPrice(200,400,600));
const user = {
    username:"harsh",
    price: 199
}

function handleObject(anyobject)
{
    anyobject.username = "shivam";
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
/*
 handleObject({
    username: "Sam",
    price:399
})
*/

const myNewArray = [200,400,40]

function returnSecondValue(getArray){
    getArray[1]=500
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
// console.log(myNewArray[1]);