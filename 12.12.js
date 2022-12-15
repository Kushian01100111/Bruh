// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// array only nums => any length 
// return true if the a element is repeted twice false other wise

function repetedNum(arr){
     // loop thougth array  
    for(let i = 0; i < arr.length; i++){
        let temp = arr[i]
        // if current index of the element is the last index on which this element appered
        if(arr.lastIndexOf(temp) !== i) return true
    }
    // esle return false
    return false
}

console.log(repetedNum([1,2,3,1]),true)
console.log(repetedNum([1,2,3,4]),false)
console.log(repetedNum([1,1,1,3,3,4,3,2,4,2]),true)
