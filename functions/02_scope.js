let a=200
const c=300
if(true){
let a=20
var b=10
console.log("inner:",a)
const c=30
}

console.log(a)
console.log(b)
console.log(c)

//note:var has a function or global scope and can be redeclared.
    //let has block scope and cannot be redeclared within the same scope.
    //const also has block scope, but its value cannot be changed once assigned. 

function one(){
    const username="sangam"

    function two(){
        const website=" youtube"
        console.log(username)
    }
    //console.log(website)   // bescause of scope of website
    two()
}   
 //one() 

 if (true) {
    const username = "Sangam"
    if (username === "Sangam") {
        const website = " youtube"
         console.log(username + website)
    }
     //console.log(website)  
}

//console.log(username)  //scope of username

// ++++++++++++++++++ interesting ++++++++++++++++++

//hoisted means jo function hain use koe variable hold nhi kar raha
// Function declaration - hoisted, so can be called before it's defined
console.log(addone(5)); // Output: 6

function addone(num) {
    return num + 1;
}

// Function expression - not hoisted, so cannot be called before it's defined
console.log(addTwo(5)); // Error: addTwo is not defined at this point

const addTwo = function(num) {  //yaha kar raha hain
    return num + 2;
};
