let myName="arpit" //simple decelration of string
let repoCount=10

let finalString=(myName+repoCount+"Coder")  //not a good way or old way

console.log(finalString)

console.log(`Hello i am ${myName} and git repo cout ${repoCount}`)  //string interpolation this method used for strings concanet

const GenderName= new String("Male") //new method to declare string 

console.log(GenderName[0]);
console.log(GenderName.charAt(2));  //yaha pe bahut saare method use ho sakte touppercase,tolowercase,indexof etc \


//string slicing
const str = 'Mozilla';

console.log(str.substring(1, 3));  
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"

const anotherStr=str.slice(4)  
console.log(anotherStr)

//triming or space removing from string
const newStringone="  Sangam  "
console.log(newStringone)
console.log(newStringone.trim())

//specialcharater removing
const url="https://arpitech.com/arpit20%kushwaha"
console.log(url.replace('20%','_'))
console.log(url.includes('sangam'))  //includes use for finding like es url me sangam hain ki nhi to esiliye output false aa raha

