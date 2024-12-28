//Classes were introduced in ECMAScript 2015 (ES6) as a syntactic sugar over JavaScript's existing prototype-based inheritance.

// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the scene

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc@`
}

User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const Tea = new User("Tea", "Tea@gmail.com", "321")

console.log(Tea.encryptPassword());
console.log(Tea.changeUsername());