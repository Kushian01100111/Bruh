// Given a string of characters, return the character that appears the most often.

//str => could be any type of characters || only strings
//count the character that appears the most || first of the most repeted

function mostOften(str){
    //delare a obj that will have the count of individual characters
    let chars = {};
    //loop thougth the str => count the indiviual characters
    for(const char of str ){
        if(chars[char]) chars[char]++
        else chars[char] = 1 
    }
    //varible => array => sort => return first value
    let resultChar = Object.entries(chars).sort((a,b)=> b[1]-a[1]);

    return resultChar[0][0]
}

console.log(mostOften("Hello world"), "l")
console.log(mostOften("Helo word"), "o")
console.log(mostOften("Pedro"), "P")
