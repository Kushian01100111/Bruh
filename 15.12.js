// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// array || given sum
// pairs of value of the array that add up to the given sum 

function twoSum(arr,givenNum){
    // 2 variables => With the pair of Nums || => with nums taken into account 
    let pairs = [],
        accountNums = {};
    // for loop => 1 givenNum - current  2 check hash map=> push the [result,current]
    for(const current of arr){
        let result = givenNum - current;
        if(accountNums[result]){
            pairs.push([current,result]);
        }else{
            // 3 new entrie with the current 
            accountNums[current] = 1;
        }
    }
    // return array contaning the pairs
    return pairs
}

console.log(twoSum([1,2,2,3,4], 4),"[[2,1],[3,1]]")