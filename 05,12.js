// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// str a empty string or any combination of characters
// count how many time each of the character string repeats it seft

function countChar(str){
    // obj => characters of the string and count 
    let Obj = {}
    // loop through the str and count the characters
    for(const char of str){
        if(Obj[char]) Obj[char] = ++Obj[char]
        else Obj[char] = 1
    }

    return Obj
}

console.log(countChar("aba"), {'a':2, 'b':1})
console.log(countChar("dog"), {'d':1, 'o':1, 'g':1})
console.log(countChar(""), {})
