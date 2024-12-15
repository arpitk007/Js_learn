const myNums=[1,2,3,4,5,6,7,8,9,10]

//const newNums=myNums.map((num)=>num+10)

//console.log(newNums)             

//chaining 

const chainNums=myNums
        .map((num) => num*10)
        .map((num) => num+1)             //esme kya ho raha hain ki jab first map value return kar raha hain uske baad usi value par second waala map lg raha aise hi third wala filter bhi
        .filter((num)=> num>30)
 
console.log(chainNums)        
        