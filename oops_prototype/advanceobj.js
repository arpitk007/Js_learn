const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5                         //pi ki value constant rahti hain becasue descripter properties like (writable,enumerable,configureable) sab false hote hain aur inko change bhi nhi kar sakte
// console.log(Math.PI);

//but apna object bana ke uski descripter propertis ko define kar sakte hain aur apne liye bhi pi jaisa properties bana sakte hain
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false,                    //agar ham name access karna chahe to nhi hoga because of enumerable ki value false hain
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {        //object.entries we can iterate objects
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}