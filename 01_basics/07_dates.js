// // Dates
/*
 let myDate=new Date()
 console.log(myDate.toString())
 console.log(myDate.toDateString())
 console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
*/
/*
 let myCreatedDate=new Date(2023,11,28) // Months starts from zero(year,month,date)
  //let myCreatedDate=new Date(2023-11-28)

 let myTimeStamp= Date.now()
 console.log(myTimeStamp);
 console.log(myCreatedDate.getTime());
 


 console.log(myCreatedDate.toDateString());
console.log(Math.round(Date.now()/1000));
*/

let newDate=new Date()
console.log(newDate);

console.log(newDate.getDate());
console.log(newDate.toLocaleString());
newDate.toLocaleString('default',{weekday:"narrow"})
console.log(newDate);

