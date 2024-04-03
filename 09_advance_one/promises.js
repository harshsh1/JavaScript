// A promise is an object representing the eventual completion or failure of an 
// asynchronous operation.
/*
const promiseOne = new Promise(function(resolve,reject)
{
  // Do an async task
  // DB calls, cryptography , network calls
  setTimeout(function(){
    console.log('Async task is complete')
    resolve()    // connect hua .then sa
  },1000)
})

promiseOne.then(function(){       //resoleve ka connection hota ha then ka sath
    console.log("Promise consumed")
})          

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task two")
        resolve()
    },1000)
}).then(()=>{
    console.log("Promise 2 consumed")
})

const promise3 = new Promise(function(resolve,reject)
{
   setTimeout(function()
   {
     resolve({username: "Harsh", email:"Harsh.20B0131132@abes.ac.in"})
   },1000)
})

promise3.then(function(user){
   console.log(user)
})
*/
/*
const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = true
       if(error)
       {
        resolve({username:"shivam",password: "123"})
       }
       else{
         reject('ERROR Something Went wrong')
       }
    },1000)
})

 promise4
 .then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>
{
   console.log(username)
})
.catch((error)=>{
  console.log(error)
}).finally (()=> console.log("The promise is either resolved or rejected"))
*/

const promise5 = new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let error = true
        if(error)
        {
         resolve({username:"JavaScript",password: "123"})
        }
        else{
          reject('ERROR: Js Went wrong')
        }
     },1000)
})

