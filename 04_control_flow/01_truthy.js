/*
const userEmail = "harsh@gmail.com"

if(userEmail)    //Assuming string is a true value
{
    console.log("got Email");
}
else
{
    console.log("Do not have Email" );
}

const emptyObj = {}

if(Object.keys(emptyObj).length ===0)
{
 console.log("Object is Empty");
}
*/
//  Nullish Coalescing Operator (??) : null undefined  For dealing with databases
// -------------------- Truthy values ------------------------------
//  false,0,-0, BigInt0n,"",null,undefined,NaN

//-----------------------------Falsy Vlaues ---------------------------
// "0",'false'," ",[],{},function(){}

let val1;
val1 = null ?? 10
console.log(val1);