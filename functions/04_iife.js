//immediately invoekd function execution

(function chai(){                       //named iife esme kyuki function ka name hain
    console.log("DB Connected")
})();
(function chai(){                       //named iife esme kyuki function ka name hain
    console.log("DB Connected")
})();
( (name)=>{
    console.log(`DB Connected2 ${name}`)        //simple iffe 
})("Sangam")

// note:agar two  iffe function sath me likhe ho to first waale function call ke baad semicolon lagate hain nhi to iffe function run nhi karta hain 

// note:iffe ka use esliye hota hain ki golobal scope polution me ye function poluted na ho