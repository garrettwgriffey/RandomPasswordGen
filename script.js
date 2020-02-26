// generate button
var generateBtn = document.querySelector("#generate");
var lowerCaseValue;
var upperCaseValue;
var numOfNumsValue;
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


  var passLength = prompt("How many characters do you want?");

  var newPassword = [];

    if (passLength >= 8 && passLength <= 128) {
        lengthValue = parseInt(passLength);
        var upperCase = confirm("Do you want uppercase letters?");
        var lowerCase = confirm("Do you want lowercase letters?");
        var numOfNums = confirm("Do you want numbers?");
        var specialChar = confirm("Do you want special characters?");
    } 
    else {
      alert("Too few characters, little buddy!")
      return generatePassword();
    }

    
    if (upperCase===true) {
      upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

      for (i = 0; i < upperCaseValue.length; i++) {
        newPassword.push(upperCaseValue[i]);
      }
    }    

    
    if (lowerCase===true) {
      lowerCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      for (i = 0; i < lowerCaseValue.length; i++) {
        newPassword.push(lowerCaseValue[i]);
      }
    }

    if (numOfNums === true) {
      numOfNumsValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

      for (i = 0; i < numOfNumsValue.length; i++) {
        newPassword.push(numOfNumsValue[i]);
      }
    }
    
    if (specialChar === true) {
      specialCharValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];

      for (i = 0; i < specialCharValue.length; i++) {
        newPassword.push(specialCharValue[i]);
      }
    }

    if (upperCase !== true && lowerCase !== true && numOfNums !== true && specialChar !== true) {
      alert("You did not choose any character types! Please try again.");
      return generatePassword();
    }
    

  //   if (userLength >= 8 && userLength <= 128) {
  //     userLengthValue = parseInt(userLength);
  // } else {
  //   alert("Not enough characters. Try again.");
  //   return generatePassword();
  // }

  var randomizer ="";

  for (var i = 0; i < lengthValue; i++) {
    randomizer += newPassword[Math.floor(Math.random() * newPassword.length)];
    return randomizer;
    
  }


// remove?
    // console.log("password")

}
  // prompt trigger
    generateBtn.addEventListener("click", function()  {
    writePassword();
    }
    );

   

  