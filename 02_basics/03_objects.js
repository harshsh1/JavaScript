// singleton (through constructor apna tara ka ek hi object ha)
// object literals
//Object.create(using constructor)
const mySym= Symbol("key1")
const JsUser={               // Not a singleton
    name:"Harsh",
    "full name": "Harsh Sharma",
     [mySym] : "mykey1",      //For using Symbol as a key use [].
    age : 22,
    location :"hapur",
    email: "harsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]
}

 //console.log(JsUser["full name"]);
 //console.log(JsUser[mySym]);

JsUser.email="harsh@gmail.com"  // Overwriting email
// Object.freeze(JsUser)  // We have freeze  the object no overWriting can be done
JsUser.email="harsh@amazon.com"  // Value will not change
// console.log(JsUser.email);   
// console.log(JsUser);
 console.log(typeof JsUser.lastLoginDays);
 console.log(typeof JsUser.isLoggedIn);
/*
JsUser.greeting = function()
{
  console.log("heloo Js user");
}

JsUser.greetingTwo = function()
{
  console.log(`hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
*/
