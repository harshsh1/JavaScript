 console.log("2">1)  // javascript automatically converts string to integer and compare
                      // it with another integer.We try to avoid comparison like this.
                     // Always try to compare with same datatype
 console.log(null>0);
 console.log(null==0);
 console.log(null>=0);  // Not a predictable result.In 3rd case null is converted to zero

 console.log(undefined ==0);
 console.log(undefined >=0);
 console.log(undefined !=0);

 //===(strict check) check value as well as datatype
console.log("2"===2);
