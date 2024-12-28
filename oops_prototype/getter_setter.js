class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){                            //getter likhe to  setter likhana padega
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value                    //setter me kuch return nhi hota hain
    }

    get password(){
        return `${this._password}sangam`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("A@Sangam.ai", "abc")
console.log(hitesh.email);

//Note: agar ham getter aur setter me ctor ki properties ke name same rakhte hain to ek error aata hain {maximun callstack exceeded} because ctor bhi unki proprties ko use karke set karta hain aur getter setter bhi karte hain to us error ko solve karne ke liye ham private properties alag hi bana dete hain jaise ki (_email & _password)