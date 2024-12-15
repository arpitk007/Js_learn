const coding = ["js", "ruby", "java", "python", "cpp"]


coding.forEach( function (item) {           //foreach loop callback function ka use karta hain jisse kiesme function lgata hain but we do not write function name
   // console.log(item)
});

//foreach using arrow function
coding.forEach( (item) => {
    //console.log(item)
})

//function ko print karna using for each
function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);          //we can take parameters one or more
// } )

const myGames=[
    {
        Gamename:'GTA VI',
        GameRelease:'2025' 
    },
    {
        Gamename:'For Cry 5',
        GameRelease:'2024'
    },
    {
        Gamename:'Assasain Creed Mirage',
        GameRelease:'2024'
    }
]

myGames.forEach((item)=> {
    console.log(item.Gamename,": ",item.GameRelease);

})

//so we can also print object key and value which inside the array using foreach loop