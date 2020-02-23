
var generateBtn = document.querySelector("#generate");
var lowerCaseValue;
var upperCaseValue;
var numberCaseValue;
var specialCharValue;
var lengthValue;

// displays password
function writePassword () {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}



// criteria prompts
function generatePassword() {

  var newPassword = [];

    var passLength = prompt("How many characters do you want?");
    if (passLength >= 8 && passLength <= 128) {
        lengthValue = parseInt(passLength);
    } else {
      alert("Too few characters little buddy!")
    }

    var upperCase = confirm("Do you want upper case letters?");
    if (upperCase===true) {
      upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      for (i = 0; i < upperCaseValue.length; i++) {
        newPassword.push(upperCaseValue[i]);
      }
    }    

    var lowerCase = confirm("Do you want lower case letters?");
    if (lowerCase===true) {
      lowerCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      for (i = 0; i < lowerCaseValue.length; i++) {
        newPassword.push(lowerCaseValue[i]);
      }
    }


    var numOfNums = confirm("Do you want numbers?");
    if (numOfNums===true) {
      numOfNumsValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      for (i = 0; i < numOfNumsValue.length; i++) {
        newPassword.push(numOfNumsValue[i]);
      }
    }
    
  
    var specialChar = confirm("Do you want special characters?");
    if (specialChar===true) {
      specialCharValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
      for (i = 0; i < specialCharValue.length; i++) {
        newPassword.push(specialCharValue[i]);
      }
    }

  var randomizer =""
  for (var i = 0; i < lengthValue; i++) {
    randomizer += newPassword[Math.floor(Math.random() * newPassword.length)];
  } 

  return randomizer;
  



//   for(var i = 0; i < passLength; i ++){
//     var randIndex = Math.floor(Math.random() * charSet.length);
//     random += charSet[randIndex];

    console.log("password")
}
  // prompt trigger
    generateBtn.addEventListener("click", function() {
    writePassword();
    }
    );

   

