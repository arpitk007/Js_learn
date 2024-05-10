
//stack(premitive data type), Heap(Non-premitive data type)

let myName="Arpit"

let anotherName=myName
anotherName="Sangam"       //jab bhi actual variable ko call karte hain uski ek copy milati hain by value

console.log(myName)        //actual variable change nhi hota
console.log(anotherName)

//heap 

let userOne={
    Name:"arpit",
    class:"Bachlers",
}

let userTwo=userOne

userTwo.Name="Sangam"
userTwo.class="Masters" 

console.log(userOne)  //esme kya hoga ki actual variable ki value jo hain new variable value jaisa ho jayega matlab both are same as second
console.log(userTwo)  //esme kya hota call by reference hota hain