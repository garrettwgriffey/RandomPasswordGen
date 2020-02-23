
var generateBtn = document.querySelector("#generate");
var lowerCaseValue;
var upperCaseValue;
var numberCaseValue;
var specialCharValue;
// var passLengthValue;
// prompts for gathering variable values


function writePassword () {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {

    var passLength = prompt("How many characters do you want?");
    var numOfNums = confirm("Do you want numbers?");
    var upperCase = confirm("Do you want upper case letters?");
    var lowerCase = confirm("Do you want lower case letters?");
    var specChar = confirm("Do you want special characters?");

//uppercase letters
if (upperCase===true) {
    upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }    

// lowercase letters
if (lowerCase===true) {
    lowerCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  }

//numbers 
  if (numberCase===true) {
    numberCaseValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }

//special characters 
  if (specialChar===true) {
    specialCharValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
  }

  var password = ["lowerCaseValue", "upperCaseValue", "numberCaseValue", "specialCharValue"];

//   for(var i = 0; i < wordLen; i ++){
//     var randIndex = Math.floor(Math.random() * charSet.length);
//     random += charSet[randIndex];

    console.log("password")
}

    generateBtn.addEventListener("click", function() {
    writePassword
    }
    );

   

