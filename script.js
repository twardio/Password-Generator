// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



//-----------------------------------------------
// 1 Ask the user how many characters they want, and error message them if they go outside <10 or >60
function passwordLength() {
  var length = prompt("Please enter the desired length of your password (minimum 10 characters):");

  if (isNaN(length)) {
    alert("Error: password length must be a number. Please try again.");
    passwordLength();
  } else if (length < 10) {
    alert("Error: password must be at least 10 characters long. Please try again.");
    passwordLength();
  } else if (length > 64) {
    alert("Error: password must be no more than 64 characters long. Please try again.");
    passwordLength();
  } else {
      return length
  }
}

//---------------------------------------------------------------

// Function for getting a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}



//works to get random element when function is called 
// var randomSpecialCharacter = getRandomElement(specialCharacters);
// var randomNumericCharacter = getRandomElement(numericCharacters);
// var randomLowerCasedCharacter = getRandomElement(lowerCasedCharacters);
// var randomUpperCasedCharacter = getRandomElement(upperCasedCharacters);



// Function to generate password with user input
function generatePassword() {
  var length = passwordLength()
  alert(length);
  var wantsLower = confirm("do you want lowercase?");
  var wantsUpper = confirm("do you want uppercase?");
  var wantsNumber = confirm("do you want a number?");
  var wantsSpecial =confirm("do you want a special character?");

console.log(wantsLower, wantsUpper, wantsNumber, wantsSpecial);

var wantedCharacters = [];
  
  if (wantsLower === true) {
    wantedCharacters = wantedCharacters.concat(lowerCasedCharacters)
  }
  if (wantsUpper === true) {
    wantedCharacters = wantedCharacters.concat(upperCasedCharacters)
  }
  if (wantsNumber === true) {
    wantedCharacters = wantedCharacters.concat(numericCharacters)
  }
  if (wantsSpecial === true) {
    wantedCharacters = wantedCharacters.concat(specialCharacters)
  }
console.log(wantedCharacters);

//loop and add to a password variable 
var randomCharacters = getRandomElement(wantedCharacters);
//return password variable
  // alert("called this function etc etc");
  // return "this is a password"
}

generatePassword()


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);