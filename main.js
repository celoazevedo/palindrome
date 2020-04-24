//do not use String and Array methods
//isPalindrome() must take in a string and return true or false
//declare a new array, can pop and unshift, push shift... into new array
//no splice, split,join
function isPalindrome(word){
    let len = word.length;
    for (let i = 0; i < len / 2; i++){
        if (word[i] !== word[len - 1 - i]){
            return false;
        } else {
            return true;
        }
    }
}
// isPalindrome('racecar');
console.log(isPalindrome('racecar'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('anna'));  
console.log(isPalindrome('hello !**! olleh'));
console.log(isPalindrome('12raar  21'));

console.dir(document);


let submitButton = document.getElementById();