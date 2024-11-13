// A function to print each letter of "HITESH" on a new line
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// Uncomment the line below to call sayMyName and see each letter printed
// sayMyName()

// Function to add two numbers and log the result
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);  // Logs the sum of number1 and number2
// }

// Modified function to add two numbers and return the result
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2 // Alternatively, store sum in a variable `result` and return
    // return result
    return number1 + number2;  // Directly returns the sum of the two arguments
}

// Calling addTwoNumbers with arguments 3 and 5 and storing result in `result`
const result = addTwoNumbers(3, 5);

// Uncomment to log the result to console
// console.log("Result: ", result);

// Function to generate a login message with a default username
function loginUserMessage(username = "sam") {
    // Checks if a username was provided; if not, prompts user to enter one
    if (!username) {
        console.log("Please enter a username");
        return;  // Exits function if no username is provided
    }
    // Returns a message with the provided or default username
    return `${username} just logged in`;
}

// Uncomment below lines to test loginUserMessage function
// console.log(loginUserMessage("hitesh")); // Outputs: "hitesh just logged in"
// console.log(loginUserMessage()); // Outputs: "sam just logged in"

// Note: Without the if-else check, calling loginUserMessage() without arguments would return "undefined just logged in"

function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(200,300,400))  //esme kya hoga ki bas ek element lega first wala

function calculateCartPrice1(...num){       //...rest operator it will take all arguments and return as array
    return num
}

console.log(calculateCartPrice1(200,300,400)) 

function calculateCartPrice2(Price1,Price2,...num2){       //...rest operator it will take all arguments and return as array and price1 and price2 take first and second agruments
    return num2
}

console.log(calculateCartPrice2(200,300,400)) 

// Object with user details
const user = {
    username: "hitesh",
    prices: 199
};

// Logs username and price from an object
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user); // Calls with `user` object
handleObject({    //also we can take direct object as arguments like this
    username: "sam",
    price: 399
});

// Array of numbers
const myNewArray = [200, 400, 100, 600];

// Returns the second value in an array
function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));   // Logs second element: 400
console.log(returnSecondValue([200, 400, 500, 1000])); // also we can take direct array like this
