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
  } else if (length > 60) {
    alert("Error: password must be no more than 60 characters long. Please try again.");
    passwordLength();
  } else {
      // at this point console logging length works
      console.log(length);
  }
}
//   //this function is a prompt that asks the user for a passsword
  passwordLength();



// Function for getting a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

var randomSpecialCharacter = getRandomElement(specialCharacters);
var randomNumericCharacter = getRandomElement(numericCharacters);
var randomLowerCasedCharacter = getRandomElement(lowerCasedCharacters);
var randomUpperCasedCharacter = getRandomElement(upperCasedCharacters);



//works to get random element when function is called 
function generatePassword() { 
var password = [];

  for (var i = 0; i < password.length; i++) {
    if (i === 0) {
      changes.push(0);
    }

alert(generatePassword());



// // Function to generate password with user input
// function generatePassword() {
//   alert("called this function etc etc");
  
// }


// generatePassword()