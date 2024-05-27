const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
  this.username = username
  this.loginCount= loginCount
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
  }
  return this             // Implicitly return hota hi ha
}

 const userOne = new User('Harsh',1,true);   // Creates  anew Instance for this userOne only
const userTwo = new User("Shivam",12,false);
console.log(userOne.constructor);
//console.log(userTwo);

  