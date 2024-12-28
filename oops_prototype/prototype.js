// Initializing strings (commented out but left for context)
// let myName = "hitesh     "
// let mychannel = "chai     "

// Attempt to access a method not yet defined on String objects
// console.log(myName.trueLength);

// Array declaration
let myHeros = ["thor", "spiderman"]; // Array of superheroes

// Object with properties and a method
let heroPower = {
    thor: "hammer", // Property representing Thor's power
    spiderman: "sling", // Property representing Spiderman's power

    // Method to access a property dynamically using `this`
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Adding a method to the Object prototype (accessible by all objects)
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

// Adding a method to the Array prototype (accessible by all arrays)
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// Uncomment to test prototype methods:
// heroPower.hitesh(); // Accessing the prototype method from an object
// myHeros.hitesh(); // Accessing the prototype method from an array
// myHeros.heyHitesh(); // Array-specific prototype method
// heroPower.heyHitesh(); // Will throw an error as it's not an array

// Prototypal inheritance example
const User = {
    name: "chai", // Base property
    email: "chai@google.com" // Base property
}

const Teacher = {
    makeVideo: true // Teacher-specific property
}

// Teaching support inherits from Teacher
const TeachingSupport = {
    isAvailable: false // TeachingSupport-specific property
}

// TA Support inherits from TeachingSupport
const TASupport = {
    makeAssignment: 'JS assignment', // TA-specific property
    fullTime: true, // TA-specific property
    __proto__: TeachingSupport // Setting the prototype explicitly
}

// Teacher inherits from User
Teacher.__proto__ = User;

// Modern syntax to set prototype
Object.setPrototypeOf(TeachingSupport, Teacher);

// String prototype extension
let anotherUsername = "ChaiAurCode     "; // Example string with trailing spaces

// Adding a custom method to String prototype
String.prototype.trueLength = function(){
    console.log(`${this}`); // Logs the original string
    console.log(`True length is: ${this.trim().length}`); // Logs the trimmed string length
}

// Testing the new method on strings
anotherUsername.trueLength(); // Trims and calculates the true length
"hitesh".trueLength(); // Works directly on string literals
"iceTea".trueLength(); // Another string literal test
