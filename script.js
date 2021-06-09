// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", () =>
{
const length = +lenghtEl.value;
const hasLower = lowercaseEl.checked;
const hasUpper = uppercaseEl.checked;
const hasNumber = numberEl.checked;
const hasSymbol = symbolEl.checked;
generatedPassword = true;
  resultEl.innerText = 
  generatedPassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
});


// variable of the sets of characters we want in the password
var Lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var Upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var Symbol = [" ","!","","#","$","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<",">","=","?","@","[","]","^","_","`","{","|","}","~"]
var Number = ["1","2","3","4","5","6","7","8","9","0"]

//Functions to fetch the different settings
const randomFunc = {
lower: getRandomLower,
upper: getRandomUpper,
number: getRandomNumber,
symbol: getRandomSymbol,
};

function getRandomLower() {
  return
String.fromCharCode(Math.floor(Math.random() *26) + 97);
}
function getRandomUpper() {
  return
String.fromCharCode(Math.floor(Math.random() *26) + 97);
}
function getRandomNumber() {
  return
String.fromCharCode(Math.floor(Math.random() *10) + 48);
}
function getRandomSymbol() {
  return symbols[Math.floor(Math.random() *symbols.length)];
}

