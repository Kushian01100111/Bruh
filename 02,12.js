// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function reverseStr(str){
    let result = ""
    for(char of str){
        result = char + result
    }
    return result
}
