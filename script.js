// 1. Choose a length of at least 8 characters and no more than 128 characters
// 2. Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// 3. Generate password
// 4. Display password to page.

// Assignment code here
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var length = window.prompt("How many chararters would you like your password to contain? Max: 128 Charaters")
  var lowercase = window.confirm("Click OK to include lowercase letters.")
  var uppercase = window.confirm("Click OK to include uppercase letters.")
  var numbers = window.confirm("Click OK to include Numbers.")
  var specialCharaters = window.confirm("Click OK to include special charaters.")

  var password = generatePassword(length.value, Charaters);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";
  for (var i = 0; i < length; i++) {
    password += charaters.charAt (
      Math.floor(Math.random() * length)
    )
  }

  return password ;
}