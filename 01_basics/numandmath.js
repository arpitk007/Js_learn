let RollNo=1900330100049
const balance=new Number(100)  //new type to declare a num datatypes
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2)) // adding .00 after current num

const  otherNum=124.86 
console.log(otherNum.toPrecision(3))  //for making num to more pricise 

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'))  //use to make hundreds more understandable 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++math+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

console.log(Math)
console.log(Math.abs(-4))  //only change negative value to positive value 
console.log(Math.round(4.9))  //make it round value like 5
console.log(Math.ceil(4.2))   //rounded up the no to the nearest integer
console.log(Math.floor(4.9))  //always rounds down and returns the largest integer less than or equal to a given number. 
console.log(Math.min(4,6,3,-1))
console.log(Math.max(4,6,3,-2))  

console.log(Math.random()) //it alway gives values b/w 0 and 1
console.log(Math.floor(Math.random()*10)+1)   //multiple ten & add 1 to make it precise floor for removing decinmal
console.log((Math.random()*10)+1)      

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min) //to come inside the min ans max value boundries
