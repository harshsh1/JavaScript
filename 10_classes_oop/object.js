function multipleBy5(num){
    this.num=num;
    return num*5
}

multipleBy5.power =2

console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype);  // {} ya milega basically ya is method ka context ha jaise ki this

function createUser(username,score){
   this.username=username;
   this.score=score;
}