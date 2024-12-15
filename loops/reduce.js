const myNums=[1,2,3,4,5]

// const myTotal=myNums.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`)            //reduce syntax
//     return acc+currval
// },0)

// console.log(myTotal)

//using arrow function

const myTotal=myNums.reduce((acc,currval) => acc+currval,0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//hame kya karna hain ki cart me sare price ko add karna hain

const priceTotal=shoppingCart.reduce((acc,item) => acc+item.price,0)

console.log(priceTotal)