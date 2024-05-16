//Dates  
let mydate=new Date()
console.log(mydate)      //intinal formate 

console.log(mydate.toString())
console.log(mydate.toDateString())  // it will show cordinated universal time with date day month
console.log(mydate.toLocaleString())  //it will show date in time in am/pm formate
console.log(typeof(mydate))    //it is object type 

let myNewdate=new Date(2023,0,29)  //in array month is start with 0 in js
let myNewdate1=new Date(2023,0,29,2,3) //date in yy:mm:dd and time hh:mm
let myNewdate2=new Date("05-28-2023")  //we can also wirte date like that 
console.log(myNewdate2.toLocaleString())
console.log(myNewdate.toDateString())
console.log(myNewdate1.toLocaleString())   //it will give whole input from fetching the whole database


