// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

// string 
// return true if is posible to create the ramson note with the words of the magazine, otherwise return false

function ramsonNote(ramson,magazine){
    let ramsonWords = ramson.split(" "),
        magazineWords = magazine.split(" "),
        magazineObj = {};
    let posible = true;

    for(const char of  magazineWords){
        magazineObj[char] =  magazineObj[char] + 1 || 1 
    }

    for(const n  of ramsonWords){
        if(magazineObj[n]){
            magazineObj[n]--
            if( magazineObj[n] < 0) return false
        }else{
            return false
        }
    }

    return posible
}

console.log(ramsonNote("sit ad est sint",magazine), true)
console.log(ramsonNote("sit ad est love", magazine), false)
console.log(ramsonNote("sit ad est sint in in", magazine), true)
console.log(ramsonNote("sit ad est sint in in in in", magazine), false)
