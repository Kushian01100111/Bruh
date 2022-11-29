// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

function dup(arrStrings){
    return arrStrings.map(elm => {
        let tempStr =  elm.split("")
        tempStr = tempStr.filter((n,i,arr) =>  arr[i+1] === n ? null: n)
        return tempStr.join("")
    })
}

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
console.log(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
console.log(dup(["kelless","keenness"]), ['keles','kenes'])
