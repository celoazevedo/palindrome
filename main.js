// let submitButton = document.getElementById();
// //  GET ELEMENT BY ID
// var headerTitle = document.getElementById('main-header');
// headerTitle.style.borderBottom = 'solid 3px #000';

// //GET ELEMEBT BY CLASS NAME
// var listItems = document.getElementsByClassName('word-list');
// listItems[2].textContent = 'hellow';

// //GET ELEMENT BY TAG NAME
// var li = document.getElementsByTagName('li');
///////////////////////////////////////////////////////////////
    // <script>
    //     function getInputValue(){
    //         // Selecting the input element and get its value 
    //         var inputVal = document.getElementById("myInput").value;
            
    //         // Displaying the value
    //         alert(inputVal);
    //     }
//////////////////////////////////////////////
//this is a submit event. so we need to add a submit event to the form

var form = document.getElementById('my-form');
var itemYlist = document.getElementById('yes-palindrome-list'); 

//Form submit event
form.addEventListener('submit', addItem);

//now we need a function to add an item - Add item function
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('my-input').value;

    //create new li element
    var li = document.createElement('li');
    //add a class name to the newly created list item
    li.className = 'word-list';
    //Add text node with the input value
    //the text node that we will create will be the newItem variable.
    //...whatever came from the text
    var addNewItem = document.createTextNode(newItem);
    li.appendChild(addNewItem);


    itemYlist.appendChild(li);


}






////////////////////////////////////////////////
// var itemInput = document.getElementById("my-input");
// var inputVal = document.getElementById("my-input").value;

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


// var button = document.getElementById('button').addEventListener('click', isPalindrome);

// function isPalindrome(){
//     console.log("buttonClicked");

// }

// function isPalindrome(word){
//     let len = word.length;
//     for (let i = 0; i < len / 2; i++){
//         if (word[i] !== word[len - 1 - i]){
//             return false;
//         } else {
//             return true;
//         }
//     }
//     console.log(isPalindrome('racecar'));    
// }


// may work to add the word to the list!!
// if we pass in an argument to the funciton
//function isPalindrome(e){
//   console.log(e.target);
//   var output = document.getElementbyId('output');
//   output.innerHTML = '<>'
//}


// listen to a submit event

//form.addEventListener('submit', runEvent);

//function runEvent(e){
//  e.preventDefault();
//  console.log('EVENT TYPE': '+ e.type);
//}