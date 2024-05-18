const Marvel_heros=["Ironman","Spiderman","MoonNight"]
const Dc_heros=["Batman","Superman","Flash"]

//Marvel_heros.push(Dc_heros)     //yaha pe array ke andar dc array aa jayega as a  single element ki tarah
//console.log(Marvel_heros)
//console.log(Marvel_heros[3][1])   //yaha pe ye jo array ke andar array hain uske 1st element ko print karega

let final_Heros=Marvel_heros.concat(Dc_heros)  //yaha pe kya hoga saare element ko ek single array me kar dega
console.log(final_Heros)

const New_arr =[...Marvel_heros,...Dc_heros] //spread operator jo ek saare element ko spread kar ke ek single array bana deta hain
console.log(New_arr)

const arr=[1,2,3,[4,5],[6,7,[8,9]]]
const Real_arr=arr.flat(Infinity)     //ye kya karega ki jitte bhi sub array hain unko single array me daal dega
console.log(Real_arr)

console.log(Array.isArray("Sangam"))  //ye bata raha array hain bhi ki nhi
console.log(Array.from("Sangam"))  //change this word to single alphabet an make it array
console.log(Array.from({Name : "Sangam"}))  //it will reuturn [](empty array) due to we have to tail which key and value u have to take
let point1=100
let point2=200
let point3=300
let point4=400
console.log(Array.of(point1,point2,point3,point4)) //it will make it array