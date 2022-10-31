const generateBtn = document.querySelector("#generate");

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function userAnswers() {
  let passwordLength= prompt("How long would you like your passowrd")
  let upperCase = confirm("Would you like the letters to be uppercase?")
  let lowerCase = confirm("Would you like the letters to be lowercase?")
  let specials = confirm("Would you like to have special characters?")
  let numbers = confirm("Would you like to have numbers?")
  let options = {passwordLength, upperCase, lowerCase, specials, numbers}
  return options
}

function generatePassword() {
  let passwordOptions = userAnswers()
  let bigArr = []
  let finalPassword = []
  let temp = []
  if (passwordOptions.lowerCase){
    bigArr = bigArr.concat(lowerCasedCharacters)
    temp.push(pickRandom(lowerCasedCharacters))
  }
  if (passwordOptions.upperCase){
    bigArr = bigArr.concat(upperCasedCharacters)
    temp.push(pickRandom(upperCasedCharacters))
  }
  if (passwordOptions.specials){
    bigArr = bigArr.concat(specialCharacters)
    temp.push(pickRandom(specialCharacters))
  }
  if (passwordOptions.numbers){
    bigArr = bigArr.concat(numericCharacters)
    temp.push(pickRandom(numericCharacters))
  }
  for (let i = 0; i < passwordOptions.passwordLength; i++) {
    finalPassword.push(pickRandom(bigArr))
  }
  console.log(finalPassword)
  console.log(temp)
  for (let i = 0; i < temp.length; i++) {
    finalPassword[i] = temp[i]
  }
  console.log(finalPassword)
  return finalPassword.join("")
}



function pickRandom (arr) {
  let randomNumber = Math.floor(Math.random()*arr.length)
  return arr[randomNumber]
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const button = document.getElementById("generate") 

button.addEventListener("click", function(){
console.log("button click!")
});



