//here we write a function that welcome user on the website
const user={
    username:"Sangam",
    price:999,

     welcomeMeassage :function(){
        console.log(`${this.username},welcome to website`) //this keybord tell abbout the current context
       // console.log(this)  //agar ham esko yaha par print karege to ye context ko batayega jaaise pahle sangam ka then arpit ka
     }  
}

// user.welcomeMeassage()
// user.username="Arpit"
// user.welcomeMeassage()
//console.log(this)   //agar ham this ko function ke bahar print kare to empty curly braces(empty object) aate hain in node aur agar browser ke console me kare to window object milta hain
function chai(){
   const username1='Arpit'
   console.log(this.username1)  //this keybord hamesa object me hi kaam karta hain function me nhi agar esko function me lege to undefined value aayegi
   //console.log(this)
}
chai()

//arrow function
// const addtwo=(n1,n2) =>{
//    return n1+n2
// }
// console.log(addtwo(3,4))

// const addtwo=(n1,n2) => n1+n2   //we can also write arrow function like this

// console.log(addtwo(3,4))

const addtwo=(n1,n2) => (n1+n2)  //we can also write arrow function like this using brakets 

console.log(addtwo(3,4))

const objectfun=() =>({username2:'Arpit'}) //agar object ko return karna ho to ham paranthesis ka use karte hain