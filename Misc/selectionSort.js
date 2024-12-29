let arr=[1,3,2,5,6,-1]

const selectionSort=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        let minIndex=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        }
        
    }
    return arr
}

console.log(selectionSort(arr))

//Note:Selection Sort is a sorting algorithm that repeatedly finds the smallest (or largest) element in the unsorted part of the array and swaps it with the first element of the unsorted part. It continues this process, moving the boundary of the sorted portion one step at a time until the whole array is sorted.