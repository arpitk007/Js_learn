let score=33
let rollNo="33abc"

console.log(typeof(score))
let num=Number(rollNo) //here we are changing string 33abc into due to abc it is showing NaN in output
console.log(num)  

console.log(typeof(String(score)))  //33 easily change into string 

let bool=true
console.log(typeof(String(bool)))  // boolean easily change into string outpout come boolen type like true and false
console.log(Number(bool))  //it give 1 and 0 for num
console.log(bool)

let Count=0
console.log(Boolean(Count)) //so 0 change in false for boolean and 1 change in true

let Blank=null
console.log(String(Blank))  // string change Null to null in string
console.log(Number(Blank))  // in number null become 0
console.log(Boolean(Blank)) // in boolean null became false

let Void=undefined
console.log(String(Void)) //undefined became undefined string
console.log(Number(Void))  //in num it change into NaN
console.log(Boolean(Void)) //in boolean chnge into false

/* output is 
number
NaN
string
string
1
true
false
null
0
false
undefined
NaN
false   
        */