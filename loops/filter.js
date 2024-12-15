// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item                                  //for each loop does not return anything give undefinded in printing
// } )

// console.log(values);

const myNum=[1,2,3,4,5,6,7,8,9,10]

const newNum=myNum.filter((num)=> num>4)     //filter return karta hain kyuki hamne yaha array function likha hain that is why we are not writing return
console.log(newNum)

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {                 //for each se aise kar sakte hain
//         newNums.push(num)
//     }
// } )

// console.log(newNums);         

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks=books.filter((bk)=> bk.genre==='Non-Fiction')
        userbooks=books.filter((bk) =>{
            return bk.genre==='Science' && bk.publish>1986
        })
  console.log(userbooks)