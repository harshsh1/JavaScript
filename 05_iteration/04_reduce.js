/*
const myNums = [1,2,3]

const myTotal = myNums.reduce( (acc,curr)=>
{
    console.log(`acc: ${acc} and curr: ${curr}`);
    return acc + curr
},0)   
console.log(myTotal);
*/

const shoppingCart = [
    {
        itemName : "jscourse",
        price : 399
    },
    {
        itemName : "reactcourse",
        price : 299 
    },
    {
    itemName : "javacourse",
    price : 399
    }
]

console.log(shoppingCart.reduce( (acc,item)=> acc + item.price,0))