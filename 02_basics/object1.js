// singleton
// Object.create   constructer method ke sath object creation

// object literals

const mySym = Symbol("key1")  //symbol declaration 


const JsUser = {
    name: "Arpit",
    "full name": "Arpit Maurya",  //agar aise object define hota hain to 
    [mySym]: "mykey1",    //adding symbol in keys
    age: 18,
    location: "Ghazipur",
    email: "arpit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email)
 console.log(JsUser["email"])   //aise access kar sakte hain
 console.log(JsUser["full name"])
 console.log(JsUser[mySym])       //symbol printing

JsUser.email = "sangam@chatgpt.com"
// Object.freeze(JsUser)   using this we can free object value that noone can change
JsUser.email = "arpit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
