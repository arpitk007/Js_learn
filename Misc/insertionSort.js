function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // Element to be inserted
        let j = i - 1;

        // Move elements of the sorted part that are greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key; // Insert the key at the correct position
    }
    return arr;
}

// Example usage
const array = [5, 3, 8, 6, 2];
console.log("Sorted Array:", insertionSort(array)); // Output: [2, 3, 5, 6, 8]

//Note:Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. It picks an element from the unsorted part, compares it with elements in the sorted part, and inserts it in the correct position.