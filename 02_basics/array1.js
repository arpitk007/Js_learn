//array start with 0 and in js we can write any type in the array ,uses shallow copy

let arr=[1,2,3,"Sangam",true] 
console.log(arr)
console.log(arr.indexOf(2))  //tell the index

let myArray=new Array(1,2,3,4)  //this is another way to declare array
console.log(myArray[1]) //tell the index value

//array methods
myArray.pop(3)  //it remove value of index 3
myArray.push(7)  //it push value at backside of array
console.log(myArray)

myArray.unshift(4)  //add element of array at front side of array
myArray.shift() //remove element from front of arry
console.log(myArray) 

console.log(myArray.includes(3)) //it checks that element is present in array 

const newArray=myArray.join //function 
console.log(myArray)
console.log(newArray)

//slice and splice

console.log("A ",myArray)

const myn1=myArray.slice(1,3) // only take 1 to 2 and remove all element
console.log(myn1)
console.log("B ",myArray)

const myn2=myArray.splice(1,3)  //it only take element  1 to till 3 and change original array
console.log(myn2)
console.log("C",myArray)  //here output is [1]



