const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");                //array ki length ko return karega
}

// Nullish Coalescing Operator (??): null undefined :esko ham esliye use karte hain ki agar ham kisi data base se value fetch kar jisme 2 values hain like null and aur yaa phir koe aur data type to wo usko fech karega na ki null ko

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// //console me check 
//  false==0 ans:true
//  false==''  ans:true
//  0==''      ans:true