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

//************Timestamp..........................//
let myTimeStamp=Date.now()   //it will give how much time it will take to fetch in miliseconds
console.log(myTimeStamp)
console.log(myNewdate.getTime())  //it will give the time 
console.log(Math.floor(myTimeStamp/1000)) //it will give readable seconds

let newDate=new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth()+1) //+ 1 esliye kyuki js me month 0 se chalu hota hain

let text=`Monday ${newDate.getDate()} is today`
console.log(text)

newDate.toLocaleString("default",{       //it work like a object where i can give other values like weekday
    weekday:"long"
})
console.log(newDate)

