//for of

// ["","",""]  //arr ke andar string
// [{},{},{}]   //arr ke andar object

const nums=[1,2,3,4,5]

for(const num of nums){    //simply print arr number
    //console.log(num)
}  

const greeting='Welcome'                 //so for of ka use ham strings me bhi kar sakte hain

for(const greet of greeting){
    console.log(greet)
}

const map=new Map()
map.set('IN','India')
map.set('USA','United State of America')
map.set('Fr','France')
map.set('IN','India')

console.log(map)       //ye ek object ki tarah value return karega

for(const key of map){
    console.log(key)
}

for(const [key,value] of map){
    console.log(key ,': ', value)         //we can also write like this for printing key and value payer
}