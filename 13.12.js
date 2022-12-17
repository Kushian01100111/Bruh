// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// array full of nums => can be small or really long arrays
// the element of the array that appears more than have the length of the array => return nums 

function majorityElement(arr){
    // obj that count for the nums will go to
    // higter count varible to compare
    // majority varible to compare
    let Obj = {},
        previusCount = 0,
        majorityValue = arr[0];
    // go through my arr and count apperences
    for(const num of arr){
        Obj[num] = Obj[num] + 1 || 1;
    }
    // go throught my obj compare the current count with the previus count if is hight the majority value get update
    for(const n in Obj){
        if(Obj[n] > previusCount){
            previusCount =  Obj[n];
            majorityValue =  n;
        }
    }

    return majorityValue
}

console.log(majorityElement([3,2,3]),3)
    console.log(majorityElement([2,2,1,1,1,2,2]),2)
console.log(majorityElement([2,2,1,1,1,1,1,2,2]),1)


