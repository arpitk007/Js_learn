
let arr=[3,1,5,2,6]
const bubbleSort=(arr)=>{
    for (let i = 0; i< arr.length; i++) {
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }  
    }
    return arr;
}

console.log(bubbleSort(arr))

//Note:Bubble Sort is a simple sorting algorithm where adjacent elements are compared and swapped if they are in the wrong order. This process repeats until the entire list is sorted, with the largest elements "bubbling" to the end in each pass.