const promiseOne=new Promise(function(resolve,reject){
    //here we can do all async task
    //like db call,network call, cryptography
    setTimeout(function(){
        console.log("Async task is completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise is consumed")
})

//another way for writing Promises without holding into const variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed")
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 is consumed")
})

//reslove used for data consumptiomn
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})  
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){

    setTimeout(function(){
        let Error=true
        if(!Error){
            resolve({username:"Sangam",email:"arpitgzpbhu@gmail.com"})
        }else{
            reject(`ERROR: Something went wrong`)
        }
        
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()  //it is taking time for executing converting string to Json
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()  
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

