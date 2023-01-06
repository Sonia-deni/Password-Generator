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

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("How many characters would you like for your password? Please choose between 10 and 64");
  var lowercaseLetters = confirm("Would you like lowercase letters?");
  var uppercaseLetters = confirm("Would you like uppercase letters?");
  var numberCharacters = confirm("would you like numbers?");
  var specialCharacters = confirm("Would you like special characters?");
}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

    var options = {}
      options["passwordLength"] = prompt("How many characters would you like for your password? Please choose between 10 and 64");
      options["lowercaseLetters"]= confirm("Would you like lowercase letters?");
      options["uppercaseLetters"]= confirm("Would you like uppercase letters?");
      options["numberCharacters"]= confirm("would you like numbers?");
      options["specialCharacters"]= confirm("Would you like special characters?");
      console.log(options);
      return options;
  }
  

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



//when the user clicks the button
  //prompt for length
  //check valid, if so, store. If not, re prompt
  //next prompt for character types
  //store boolean true/false

//create new array for password characters to choose from
//if character type == true, add this array to password array
//do this for each character type
//change passwordlength from a string to a number using parseInt()
//loop over the new long array for the length of the password, and each time randomly select a character. Push this into a new array and return it
