// Define a user object with properties and a method
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    // Method to log user details and demonstrate the use of `this`
    getUserDetails: function(){
        // Logs the user object itself to demonstrate `this` context
        console.log(this); 
    }
}

// Example usage of the user object
// console.log(user.username); // Accessing a property of the object
// console.log(user.getUserDetails()); // Calling a method on the object
// console.log(this); // `this` outside of any object refers to the global object (or undefined in strict mode)

// Constructor function to create multiple user objects
function User(username, loginCount, isLoggedIn){
    // Initializing object properties
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // Method to greet the user, demonstrates the dynamic nature of `this` in a constructor
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // Returning the current object (implicit in constructors, added here for clarity)
    return this;
}

// Creating instances of the User constructor function
const userOne = new User("hitesh", 12, true); // Creates a new user object
const userTwo = new User("ChaiAurCode", 11, false); // Another user object

// Demonstrating the constructor property of an object
console.log(userOne.constructor); // Logs the function that created the object (User)

// Example of accessing properties or calling methods of the instances
// console.log(userTwo); // Uncomment to see the details of userTwo
