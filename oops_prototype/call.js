// Function to set the username, simulating a complex DB operation
function SetUsername(username){
    // Simulate a database call or complex logic
    this.username = username; // Assign the username to the current object
    console.log("called"); // Log to indicate the function execution
}

// Function to create a new user
function createUser(username, email, password){
    // Call the SetUsername function with the current context (`this`)
    // Using `call` to reuse functionality of SetUsername
    SetUsername.call(this, username);
   
    // Add additional properties specific to createUser
    this.email = email; // Assign the email to the current object
    this.password = password; // Assign the password to the current object
}

// Create a new user object using the `createUser` constructor function
const chai = new createUser("chai", "chai@fb.com", "123");

// Log the newly created object to verify its properties
console.log(chai); // Outputs: createUser { username: 'chai', email: 'chai@fb.com', password: '123' }

//imptotant Note:

function Name(){
    call()
}

//Que:isme this agar kare to kisko refer karega?
//Ans:aise case this refer kanrega Global Execution context ko aur eske wajah window object ko refer karega but node waale environment me { } esko refer karega