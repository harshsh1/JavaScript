/*
const tinderUser= new Object() 

tinderUser.id="123abc"
tinderUser.name ="Harsh"
tinderUser.isLoggedIn = false

const regularUser= {
    email: "hs@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Harsh",
            lastname : "Sharma"
        }
    }
}
 console.log(regularUser.fullname.userfullname.firstname);
*/

const obj1={ 1: "a",2: "b"}
const obj2={ 3: "c",4: "d"}
const obj4={ 4: "e", 5: "f"}

  const obj3= Object.assign({},obj1,obj2,obj4)
  console.log(obj1);
  console.log(obj2);
  console.log(obj4);
  console.log(obj3);

//const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user=[
    { id:1 ,
    email: "h@amazon.com"
},{
    id:2,
    email: "s@amazon.com"
}
]

console.log(user[1].email)
console.log(Object.keys(tinderUser));  // Give all keys of an object in an array 
                                      // so that we can easily traverse through it
console.log(tinderUser.hasOwnProperty("name"));

