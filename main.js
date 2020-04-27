///////////////////////////////////////////////////////////////
    // <script>
    //     function getInputValue(){
    //         // Selecting the input element and get its value 
    //         var inputVal = document.getElementById("myInput").value;
            
    //         // Displaying the value
    //         alert(inputVal);
    //     }
////////////////////////////////////////////////////////////////









//this is a submit event. so we need to add a submit event to the form

var form = document.getElementById('my-form');
var itemYlist = document.getElementById('yes-palindrome-list'); 
var itemNlist = document.getElementById('not-palindrome-list');
//adding the submit event to the form
form.addEventListener('submit', isPalindrome);
//now we need a function to check if the item is  
// ...a palindrome and to add the item to the list 
function isPalindrome(e){
    e.preventDefault();
//Get input value
    var newItem = document.getElementById('my-input').value;
//create new li element
    var li = document.createElement('li');
    // var liN = document.createElement('li');
//add a class name to the newly created list item
    // liY.className = 'y-word-list';   
    // liN.className = 'n-word-list';
//Add text node with the input value
//the text node that we will create will be the newItem variable.
//...whatever came from the text
    var addNewItem = document.createTextNode(newItem);
    var len = newItem.length;
        var newItemRev = newItem.split('').reverse().join('');
            if (newItemRev !== newItem){
                li.appendChild(addNewItem);
                itemNlist.appendChild(li);
                // return false;
                console.log(newItem);
            } else {
                    li.appendChild(addNewItem);
                    itemYlist.appendChild(li);
                // return true;
                    console.log(newItem);
            }
        // for (var i = 0; i < len / 2; i++){
        //     if (newItem[i] !== newItem[len - 1 - i]){
        //         li.appendChild(addNewItem);
        //         itemNlist.appendChild(li);
        //         // return false;
        //         console.log(newItem);
        //     } else {
        //         li.appendChild(addNewItem);
        //         itemYlist.appendChild(li);
        //         // return true;
        //         console.log(newItem);
        //     }
        // }

}







// function getInputValue(){
//     // Selecting the input element and get its value 
    
//     // Displaying the value
//     alert(inputVal);
// }


// get input value and to the list as a new node
//create a node and append the value to the node
//shopping list scripts examples
///////////////////////////////////////////////////////




//do not use String and Array methods
//isPalindrome() must take in a string and return true or false
//declare a new array, can pop and unshift, push shift... into new array
//no splice, split,join
// function isPalindrome(word){
//     let len = word.length;
//     for (let i = 0; i < len / 2; i++){
//         if (word[i] !== word[len - 1 - i]){
//             return false;
//         } else {
//             return true;
//         }
//     }
// }
// isPalindrome('racecar');
// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('tacocat'));
// console.log(isPalindrome('anna'));  
// console.log(isPalindrome('hello !**! olleh'));
// console.log(isPalindrome('12raar  21'));

// console.dir(document);
