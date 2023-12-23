// Primitive(Call by Value)
// 7 types: String,Number,boolean,Null,,undefined,Symbol(making Value unique),Big Int

// Reference type(Non-primitive)
// arrays,Objects,Functions 

const id=Symbol('133')   // They both have diff Id although in symbol it is 133.That's why symbol 
                          //  is used for uniqueness
// const anotherId=Symbol('133')  // Symbol also returns a symbol datatype
// console.log(id==anotherId)
// console.log(typeof id);

const heroes= ["msd","Ian Cardazo","sam"]
let myObj={
    name:"harsh",
    age:21
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof myFunction);