// const tinderUser = new Object()  new way to make objects
const tinderUser = {}   //object declration

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Arpit",
            lastname: "kushwaha"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);     for printing object inside object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 //const obj3 = { obj1, obj2 }  //it will give output with brackets 
 //const obj3 = Object.assign({}, obj1, obj2, obj4)  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const obj3 = {...obj1, ...obj2}   //spread variable 
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));  jo key vaalue hoti hain use arrayme daal deta hain
 console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Defining an object `course` with properties: coursename, price, and courseInstructor
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Accessing the `courseInstructor` property directly from the `course` object
// course.courseInstructor  // This would directly output "hitesh"

// Using object destructuring to create a new variable `instructor`
// and assigning it the value of `courseInstructor` from the `course` object
const {courseInstructor: instructor} = course;

// Trying to log `courseInstructor` directly would result in an error because it’s not defined as a standalone variable
// console.log(courseInstructor); // This line would throw an error

// Logging the `instructor` variable, which holds the value "hitesh" from the `courseInstructor` property of `course`
console.log(instructor); // Output: "hitesh"

// Example JSON-like object to represent course details
{
    "name": "Sangam",
    "coursename": "js in hindi",
    "price": "free"
}

// Example of an array with multiple empty objects, often used as placeholders or to represent an empty structure
[
    {},  // First empty object
    {},  // Second empty object
    {}   // Third empty object
]



