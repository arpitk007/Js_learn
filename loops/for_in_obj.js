const myobject={
    js:'javascript',
    cpp:'C++',
    py:'python'
}

for(const key in myobject){
   // console.log(key)
}

//or agar object chahiye to

for(const key in myobject){
   // console.log(myobject[key])
}
//or agar dono chahiye to

for(const key in myobject){
    //console.log(`${key} is shortcut of ${myobject[key]}`)
}

//arr ke uper for in loop

const myarr=['py','js','cpp','rb']
for(const key in myarr){
    //console.log(key)          //ye index return karega jabki for of loop value return karta hain
}

//value return karega
for(const key in myarr){
   // console.log(myarr[key])          
}

// const map=new Map()
// map.set('IN','India')
// map.set('USA','United State of America')      //map me for in direct use nhi karte hain agar karege to kuchh return nhi karega
// map.set('Fr','France')
// map.set('IN','India')

// for(const key in myarr){
//    // console.log(key)
// }